
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  const { signOut } = useAuth();
  const { profile } = useProfile();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SocialHub
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onViewChange("feed")}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                currentView === "feed" 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Feed</span>
            </button>
            
            <button
              onClick={() => onViewChange("profile")}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                currentView === "profile" 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </button>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src={profile?.avatar_url} alt={profile?.full_name} />
              <AvatarFallback>{profile?.full_name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
            <Button
              variant="outline"
              size="sm"
              onClick={signOut}
              className="hidden sm:inline-flex"
            >
              Logout
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => onViewChange("feed")}
              className={`p-2 rounded-lg ${currentView === "feed" ? "bg-blue-50 text-blue-600" : "text-gray-600"}`}
            >
              <Home className="h-5 w-5" />
            </button>
            <button
              onClick={() => onViewChange("profile")}
              className={`p-2 rounded-lg ${currentView === "profile" ? "bg-blue-50 text-blue-600" : "text-gray-600"}`}
            >
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
