"use client";

import { useState, useEffect, useRef } from "react";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Button2 } from "../../components/Button2";
import { Input2 } from "../../components/Input2";
import { TextArea2 } from "../../components/TextArea2";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/Card";
import React from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase"; // Ensure you import your auth instance

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: { seconds: number }; // Firestore timestamp format
  user: string; // User who posted the message
}

export default function Forums() {
  const [user, loadingUser, errorUser] = useAuthState(auth); // Accessing the current logged-in user
  const [currentForum, setCurrentForum] = useState<string | null>(null); // Currently selected forum
  const [posts, setPosts] = useState<Post[]>([]); // List of posts
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [darkMode, setDarkMode] = React.useState(true);

  const titleRef = useRef<HTMLInputElement>(null); // Ref for title input
  const contentRef = useRef<HTMLTextAreaElement>(null); // Ref for content input

  // Fetch posts when a forum is selected
  useEffect(() => {
    if (currentForum) {
      const postsRef = collection(db, "forums", currentForum, "posts");
      const q = query(postsRef);

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const fetchedPosts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Post[];

          setPosts(fetchedPosts);
        },
        (error) => {
          console.error("Error fetching posts:", error);
          setError("Failed to fetch posts.");
        }
      );

      return () => unsubscribe();
    }
  }, [currentForum]);

  // Handle post submission
  const handlePostSubmit = async () => {
    if (!titleRef.current?.value || !contentRef.current?.value) {
      setError("Both title and content are required.");
      return;
    }

    if (!user) {
      setError("You must be logged in to post.");
      return;
    }

    setLoading(true);
    try {
      const postsRef = collection(db, "forums", currentForum!, "posts");
      await addDoc(postsRef, {
        title: titleRef.current?.value,
        content: contentRef.current?.value,
        createdAt: new Date(),
        user: user.displayName || user.email, // Storing the user's name or email
      });
      titleRef.current.value = ""; // Clear title input
      contentRef.current.value = ""; // Clear content input
      setError("");
    } catch (error) {
      console.error("Error adding post:", error);
      setError("Failed to add the post. Please try again later.");
    }
    setLoading(false);
  };

  // Forum selection UI
  const ForumsPage = () => (
    <PageLayout darkMode={darkMode}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Debate Forums</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Lincoln-Douglas", "Parliamentary", "Policy", "Public Forum"].map((format) => (
            <Card key={format}>
              <CardHeader>
                <CardTitle>{format}</CardTitle>
              </CardHeader>
              <CardFooter>
                <Button2 onClick={() => setCurrentForum(format)}>Enter Forum</Button2>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );

  // Specific forum UI
  const ForumPage = () => (
    <PageLayout darkMode={darkMode}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <h2 className="text-3xl font-bold mb-6">{currentForum} Forum</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Start a New Discussion</h3>
          <Input2
            ref={titleRef} // Assign the ref to the title input
            placeholder="Title of your question"
          />
          <TextArea2
            ref={contentRef} // Assign the ref to the content input
            placeholder="Provide details about your question..."
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <Button2 onClick={handlePostSubmit} className="mt-4" disabled={loading}>
            {loading ? "Submitting..." : "Submit Post"}
          </Button2>
        </div>
        <h3 className="text-xl font-semibold mb-4">Recent Discussions</h3>
        {posts.length === 0 ? (
          <p>No posts available yet. Be the first to start a discussion!</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {post.content}
                  <div className="text-sm text-gray-500 mt-2">
                    Posted by {post.user} on{" "}
                    {new Date(post.createdAt.seconds * 1000).toLocaleString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        <Button2 onClick={() => setCurrentForum(null)} className="mt-8">
          Back to Forums
        </Button2>
      </div>
    </PageLayout>
  );

  return <div>{currentForum ? <ForumPage /> : <ForumsPage />}</div>;
}
