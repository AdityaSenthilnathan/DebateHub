"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export default function Forums() {
    const [currentForum, setCurrentForum] = useState(null); // Currently selected forum
    const [posts, setPosts] = useState([]); // List of posts
    const [comments, setComments] = useState({}); // Comments for each post
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [darkMode, setDarkMode] = useState(true);
    const [visibleComments, setVisibleComments] = useState({}); // Track number of visible comments per post
    const titleRef = useRef(null); // Ref for title input
    const contentRef = useRef(null); // Ref for content input
    const commentRefs = useRef({}); // Ref for comment inputs
    // Get user authentication state
    const [user] = useAuthState(auth);
    // Fetch posts when a forum is selected
    useEffect(() => {
        if (currentForum) {
            const postsRef = collection(db, "forums", currentForum, "posts");
            const q = query(postsRef);
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const fetchedPosts = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPosts(fetchedPosts);
            }, (error) => {
                console.error("Error fetching posts:", error);
                setError("Failed to fetch posts.");
            });
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
                const fetchedComments = {};
                snapshot.docs.forEach((doc) => {
                    const commentData = doc.data();
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
            const postsRef = collection(db, "forums", currentForum, "posts");
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
        }
        catch (error) {
            console.error("Error adding post:", error);
            setError("Failed to add the post. Please try again later.");
        }
        setLoading(false);
    };
    // Handle upvoting a post
    const handleUpvotePost = async (postId) => {
        if (!user) {
            setError("You must be logged in to upvote.");
            return;
        }
        const postRef = doc(db, "forums", currentForum, "posts", postId);
        const postSnapshot = await getDoc(postRef);
        if (!postSnapshot.exists()) {
            setError("Post not found.");
            return;
        }
        const postData = postSnapshot.data();
        if (postData.upvotedBy.includes(user.uid)) {
            await updateDoc(postRef, {
                upvoteCount: increment(-1),
                upvotedBy: arrayRemove(user.uid),
            });
        }
        else {
            if (postData.upvoteCount < 1) {
                await updateDoc(postRef, {
                    upvoteCount: increment(1),
                    upvotedBy: arrayUnion(user.uid),
                });
            }
        }
    };
    // Handle adding a comment
    const handleAddComment = async (postId) => {
        const commentInput = commentRefs.current[postId]?.current;
        const commentContent = commentInput?.value.trim();
        if (!commentContent || !user) {
            setError("You must be logged in and enter a comment.");
            return;
        }
        const commentsRef = collection(db, "forums", currentForum, "comments");
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
        if (commentInput) {
            commentInput.value = "";
        } // Clear the comment input
    };
    // Handle "See More" button click to show more comments
    const handleSeeMoreComments = (postId) => {
        setVisibleComments((prev) => ({
            ...prev,
            [postId]: (prev[postId] || 2) + 2, // Show 2 more comments
        }));
    };
    const ForumsPage = () => (_jsxs(PageLayout, { darkMode: darkMode, children: [_jsx(Header, { darkMode: darkMode, setDarkMode: setDarkMode }), _jsxs("div", { className: "container mx-auto px-4 py-8 min-h-screen", children: [_jsx("h2", { className: "text-3xl font-bold mb-6", children: "Debate Forums" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: ["Lincoln-Douglas", "Parliamentary", "Policy", "Public Forum"].map((format) => (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: format }) }), _jsx(CardFooter, { children: _jsx(Button2, { onClick: () => setCurrentForum(format), children: "Enter Forum" }) })] }, format))) })] })] }));
    const ForumPage = () => (_jsxs(PageLayout, { darkMode: darkMode, children: [_jsx(Header, { darkMode: darkMode, setDarkMode: setDarkMode }), _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("h2", { className: "text-3xl font-bold mb-6", children: [currentForum, " Forum"] }), _jsxs("div", { className: "mb-8", children: [_jsx("h3", { className: "text-xl font-semibold mb-4", children: "Start a New Discussion" }), _jsx(Input2, { ref: titleRef, placeholder: "Title of your question" }), _jsx(TextArea2, { ref: contentRef, placeholder: "Provide details about your question..." }), error && _jsx("p", { className: "text-red-600", children: error }), _jsx(Button2, { onClick: handlePostSubmit, loading: loading, children: "Submit" })] }), posts.map((post) => (_jsx("div", { className: "space-y-4", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: post.title }) }), _jsx(CardContent, { children: post.content }), _jsx(CardFooter, { children: _jsxs(Button2, { onClick: () => handleUpvotePost(post.id), children: [post.upvoteCount, " Upvotes"] }) }), _jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold", children: "Comments" }), comments[post.id]?.slice(0, visibleComments[post.id] || 2).map((comment) => (_jsxs("div", { className: "border-b mb-2 pb-2", children: [_jsx("p", { children: comment.content }), _jsxs("p", { children: [comment.upvotes, " Upvotes"] })] }, comment.id))), comments[post.id]?.length > (visibleComments[post.id] || 2) && (_jsx(Button2, { onClick: () => handleSeeMoreComments(post.id), children: "See More" })), _jsx(Input2, { placeholder: "Add a comment", ref: commentRefs.current[post.id] || (commentRefs.current[post.id] = React.createRef()) }), _jsx(Button2, { onClick: () => handleAddComment(post.id), children: "Submit Comment" })] })] }) }, post.id)))] }), _jsx(Button2, { onClick: () => setCurrentForum(null), className: "mt-8", children: "Back to Forums" })] })] }));
    return currentForum ? _jsx(ForumPage, {}) : _jsx(ForumsPage, {});
}
;
