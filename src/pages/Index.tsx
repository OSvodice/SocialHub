
import { useState } from "react";
import { AuthSection } from "@/components/AuthSection";
import { MainFeed } from "@/components/MainFeed";
import { Navigation } from "@/components/Navigation";
import { CreatePost } from "@/components/CreatePost";
import { UserProfile } from "@/components/UserProfile";

const Index = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState("feed");
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: "Sarah Chen", username: "sarahc", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=100&h=100&fit=crop&crop=face" },
      content: "Just launched my new project! Excited to share it with everyone 🚀",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      likes: 24,
      comments: 8,
      timestamp: "2 hours ago",
      liked: false
    },
    {
      id: 2,
      user: { name: "Alex Rivera", username: "alexr", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
      content: "Beautiful sunset from my coding session today. Sometimes you need to step back and appreciate the view.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      likes: 56,
      comments: 12,
      timestamp: "4 hours ago",
      liked: true
    },
    {
      id: 3,
      user: { name: "Maya Patel", username: "mayap", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
      content: "Working from home with my furry coding companion 🐱",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop",
      likes: 89,
      comments: 23,
      timestamp: "6 hours ago",
      liked: false
    }
  ]);

  const mockUser = {
    name: "John Doe",
    username: "johndoe",
    bio: "Full-stack developer | Coffee enthusiast | Building the future",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    followers: 1247,
    following: 892,
    posts: 156
  };

  if (!currentUser) {
    return <AuthSection onLogin={setCurrentUser} />;
  }

  const handleCreatePost = (newPost) => {
    const post = {
      id: posts.length + 1,
      user: mockUser,
      content: newPost.content,
      image: newPost.image,
      likes: 0,
      comments: 0,
      timestamp: "Just now",
      liked: false
    };
    setPosts([post, ...posts]);
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation 
        user={mockUser} 
        currentView={currentView} 
        onViewChange={setCurrentView}
        onLogout={() => setCurrentUser(null)}
      />
      
      <div className="max-w-4xl mx-auto px-4 pt-20 pb-8">
        {currentView === "feed" && (
          <div className="space-y-6">
            <CreatePost onCreatePost={handleCreatePost} />
            <MainFeed posts={posts} onLike={handleLike} />
          </div>
        )}
        
        {currentView === "profile" && (
          <UserProfile user={mockUser} posts={posts.filter(post => post.user.username === mockUser.username)} />
        )}
      </div>
    </div>
  );
};

export default Index;
