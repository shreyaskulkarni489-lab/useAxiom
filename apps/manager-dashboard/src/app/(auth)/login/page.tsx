"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Mail, Lock, ArrowRight, Eye, EyeOff, Cpu } from "lucide-react";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@useaxiom/ui";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorCode, setErrorCode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorCode("Please fill in all fields.");
      return;
    }
    
    setIsLoading(true);
    setErrorCode("");

    // Simulate login loading state
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1200);
  };

  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center bg-zinc-950 text-zinc-100 overflow-hidden px-4">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decorative Grid Line Banner */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-md z-15 animate-in fade-in zoom-in-95 duration-500">
        <Card className="border-purple-500/10 bg-zinc-900/40 backdrop-blur-xl shadow-2xl relative overflow-hidden p-6 sm:p-8">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600" />
          
          <CardHeader className="flex flex-col items-center text-center pb-2 pt-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20 mb-4 animate-pulse">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400">
              Sign in to useAxiom
            </CardTitle>
            <CardDescription className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mt-1">
              Manager Control Portal
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorCode && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium text-center">
                  {errorCode}
                </div>
              )}
              
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500 pointer-events-none">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="manager@axiom.labs"
                    disabled={isLoading}
                    className="w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 focus:border-purple-500/50 rounded-xl text-zinc-100 placeholder-zinc-650 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Password</label>
                  <a href="#" className="text-[10px] text-purple-400 hover:text-purple-300 font-semibold transition-colors">Forgot Password?</a>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500 pointer-events-none">
                    <Lock className="w-4 h-4" />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    disabled={isLoading}
                    className="w-full pl-10 pr-10 py-2.5 bg-zinc-950 border border-zinc-800 focus:border-purple-500/50 rounded-xl text-zinc-100 placeholder-zinc-650 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full py-2.5 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/10 transition-all duration-200 mt-6"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-zinc-300/30 border-t-zinc-100 rounded-full animate-spin" />
                    <span>Establishing session...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-1.5 w-full">
                    <span>Access Console</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col items-center justify-center gap-3 pt-4 border-t border-zinc-800/60 mt-4 text-center">
            <div className="flex items-center gap-1.5 justify-center">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">Secure Agent Handshake Node</span>
            </div>
            <p className="text-[10px] text-zinc-600">
              For demo access, enter any mock credentials and click Access Console.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
