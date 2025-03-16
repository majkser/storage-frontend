"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    // Implement your Google authentication logic here
    try {
      // Example: await signInWithGoogle()
      console.log("Logging in with Google...");
    } catch (error) {
      console.error("Google login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md m-auto p-6">
      <Card className="p-6 bg-black border-none shadow-xl rounded-xl">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brand">Welcome Back</h2>
            <p className="text-gray-400 mt-2">
              Sign in to continue to your account
            </p>
          </div>

          <Button
            variant="outline"
            className="w-full bg-transparent border border-gray-700 hover:bg-gray-900 text-white flex items-center justify-center gap-2 h-12 rounded-lg"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <FcGoogle className="h-5 w-5" />
            <span>{isLoading ? "Connecting..." : "Continue with Google"}</span>
          </Button>

          <div className="flex items-center gap-2">
            <Separator className="flex-1 bg-gray-800" />
            <span className="text-xs text-gray-500">OR</span>
            <Separator className="flex-1 bg-gray-800" />
          </div>

          <div className="space-y-4">
            <Button className="w-full bg-brand hover:bg-brand/90 text-black font-medium h-12 rounded-lg">
              Sign in with Email
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Dont have an account?{" "}
                <a href="#" className="text-brand hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
