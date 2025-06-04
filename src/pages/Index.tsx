
import { useState } from "react";
import { AuthSection } from "@/components/AuthSection";
import { MainFeed } from "@/components/MainFeed";
import { Navigation } from "@/components/Navigation";
import { CreatePost } from "@/components/CreatePost";
import { UserProfile } from "@/components/UserProfile";
import { AuthProvider, useAuth } from "@/hooks/useAuth";

const AppContent = () => {
  const [currentView, setCurrentView] = useState("feed");
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthSection />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation 
        currentView={currentView} 
        onViewChange={setCurrentView}
      />
      
      <div className="max-w-4xl mx-auto px-4 pt-20 pb-8">
        {currentView === "feed" && (
          <div className="space-y-6">
            <CreatePost />
            <MainFeed />
          </div>
        )}
        
        {currentView === "profile" && (
          <UserProfile />
        )}
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default Index;
