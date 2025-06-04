
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, Heart } from "lucide-react";

interface AuthSectionProps {
  onLogin: (user: any) => void;
}

export const AuthSection = ({ onLogin }: AuthSectionProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app, this would connect to Supabase
    onLogin({ email, name: name || "Demo User" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Hero Section */}
        <div className="text-center text-white space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">SocialHub</h1>
          <p className="text-lg text-blue-100">Connect, Share, Inspire</p>
          
          <div className="flex justify-center space-x-8 mt-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/20 p-3 rounded-full">
                <Users className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm text-blue-100">Connect</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/20 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm text-blue-100">Share</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/20 p-3 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm text-blue-100">Inspire</span>
            </div>
          </div>
        </div>

        {/* Auth Card */}
        <Card className="backdrop-blur-sm bg-white/95 shadow-2xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              {isLogin ? "Welcome Back" : "Join SocialHub"}
            </CardTitle>
            <CardDescription className="text-center">
              {isLogin 
                ? "Sign in to your account to continue" 
                : "Create an account to get started"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>
            
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"
                }
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
