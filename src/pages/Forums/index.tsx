"use client";

import { useState, useEffect, useRef } from "react";
import { collection, addDoc, query, onSnapshot, doc, getDoc, updateDoc, increment, arrayUnion, arrayRemove, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Button2 } from "../../components/Button2";
import { Input2 } from "../../components/Input2";
import { TextArea2 } from "../../components/TextArea2";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/Card";
import React from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";
//import { deleteDoc } from "firebase/firestore";

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: { seconds: number }; // Firestore timestamp format
  upvoteCount: number;
  upvotedBy: string[]; // Store the list of user IDs who have upvoted
}

interface Comment {
  id: string;
  content: string;
  createdAt: { seconds: number }; // Firestore timestamp format
  upvotes: number;
  upvotedBy: string[]; // Store the list of user IDs who have upvoted
  postId: string; // Added this field to associate comment with a post
}

export default function Forums() {
  const [currentForum, setCurrentForum] = useState<string | null>(null); // Currently selected forum
  const [posts, setPosts] = useState<Post[]>([]); // List of posts
  const [comments, setComments] = useState<{ [key: string]: Comment[] }>({}); // Comments for each post
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [darkMode, setDarkMode] = useState(true);
  const [visibleComments, setVisibleComments] = useState<{ [key: string]: number }>({}); // Track number of visible comments per post

  const titleRef = useRef<HTMLInputElement>(null); // Ref for title input
  const contentRef = useRef<HTMLTextAreaElement>(null); // Ref for content input
  const commentRefs = useRef<{ [postId: string]: React.RefObject<HTMLInputElement> }>({}); // Ref for comment inputs

  // Get user authentication state
  const [user] = useAuthState(auth);

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

  // Fetch comments for each post
  useEffect(() => {
    if (currentForum) {
      const fetchComments = async () => {
        const commentsRef = collection(db, "forums", currentForum, "comments");
        const q = query(commentsRef);

        const snapshot = await getDocs(q);
        const fetchedComments: { [key: string]: Comment[] } = {};

        snapshot.docs.forEach((doc) => {
          const commentData = doc.data() as Comment;
          if (!fetchedComments[commentData.postId]) {
            fetchedComments[commentData.postId] = [];
          }
          fetchedComments[commentData.postId].push(commentData);
        });

        setComments(fetchedComments);
      };

      fetchComments();
    }
  }, [currentForum]);

  // Handle post submission
  const handlePostSubmit = async () => {
    if (!titleRef.current?.value || !contentRef.current?.value) {
      setError("Both title and content are required.");
      return;
    }

    setLoading(true);
    try {
      const postsRef = collection(db, "forums", currentForum!, "posts");
      await addDoc(postsRef, {
        title: titleRef.current?.value,
        content: contentRef.current?.value,
        createdAt: new Date(),
        upvoteCount: 0, // Initialize the upvote count
        upvotedBy: [], // Initialize the upvotedBy array
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

  // Handle upvoting a post
  const handleUpvotePost = async (postId: string) => {
    if (!user) {
      setError("You must be logged in to upvote.");
      return;
    }

    const postRef = doc(db, "forums", currentForum!, "posts", postId);
    const postSnapshot = await getDoc(postRef);

    if (!postSnapshot.exists()) {
      setError("Post not found.");
      return;
    }

    const postData = postSnapshot.data() as Post;

    if (postData.upvotedBy.includes(user.uid)) {
      await updateDoc(postRef, {
        upvoteCount: increment(-1),
        upvotedBy: arrayRemove(user.uid),
      });
    } else {
      if (postData.upvoteCount < 1) {
        await updateDoc(postRef, {
          upvoteCount: increment(1),
          upvotedBy: arrayUnion(user.uid),
        });
      }
    }
  };

  // Handle adding a comment
  const handleAddComment = async (postId: string) => {
    const commentInput = commentRefs.current[postId]?.current;
    const commentContent = commentInput?.value.trim();

    if (!commentContent || !user) {
      setError("You must be logged in and enter a comment.");
      return;
    }

    const commentsRef = collection(db, "forums", currentForum!, "comments");
    await addDoc(commentsRef, {
      postId,
      content: commentContent,
      createdAt: new Date(),
      upvotes: 0,
      upvotedBy: [],
    });

    // Update local state for the comment
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [
        ...(prevComments[postId] || []),
        {
          content: commentContent,
          createdAt: { seconds: Math.floor(Date.now() / 1000) },
          upvotes: 0,
          upvotedBy: [],
          postId,
          id: Math.random().toString(), // Temp id for local state
        },
      ],
    }));

    commentInput.value = ""; // Clear the comment input
  };

  // Handle "See More" button click to show more comments
  const handleSeeMoreComments = (postId: string) => {
    setVisibleComments((prev) => ({
      ...prev,
      [postId]: (prev[postId] || 2) + 2, // Show 2 more comments
    }));
  };

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

  const ForumPage = () => (
    <PageLayout darkMode={darkMode}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4">
        <h2 className="text-3xl font-bold mb-6">{currentForum} Forum</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Start a New Discussion</h3>
          <Input2 ref={titleRef} placeholder="Title of your question" />
          <TextArea2 ref={contentRef} placeholder="Provide details about your question..." />
          {error && <p className="text-red-600">{error}</p>}
          <Button2 onClick={handlePostSubmit} loading={loading}>
            Submit
          </Button2>
        </div>
          {posts.map((post) => (
            <div key={post.id} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>{post.content}</CardContent>
                <CardFooter>
                  <Button2 onClick={() => handleUpvotePost(post.id)}>
                    {post.upvoteCount} Upvotes
                  </Button2>
                </CardFooter>
                <div>
                  <h4 className="text-lg font-semibold">Comments</h4>
                  {comments[post.id]?.slice(0, visibleComments[post.id] || 2).map((comment) => (
                    <div key={comment.id} className="border-b mb-2 pb-2">
                      <p>{comment.content}</p>
                      <p>{comment.upvotes} Upvotes</p>
                    </div>
                  ))}
                  {comments[post.id]?.length > (visibleComments[post.id] || 2) && (
                    <Button2 onClick={() => handleSeeMoreComments(post.id)}>
                      See More
                    </Button2>
                  )}
                  <Input2
                    placeholder="Add a comment"
                    ref={commentRefs.current[post.id] || (commentRefs.current[post.id] = React.createRef())}
                  />
                  <Button2 onClick={() => handleAddComment(post.id)}>Submit Comment</Button2>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <Button2 onClick={() => setCurrentForum(null)} className="mt-8">
          Back to Forums
        </Button2>
      </div>
    </PageLayout>
  );

  return currentForum ? <ForumPage /> : <ForumsPage />;
};
