"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <div className="flex h-64 items-center justify-center text-zinc-500 font-semibold text-sm">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 border-2 border-zinc-500/30 border-t-zinc-400 rounded-full animate-spin" />
        <span>Redirecting to Console...</span>
      </div>
    </div>
  );
}
