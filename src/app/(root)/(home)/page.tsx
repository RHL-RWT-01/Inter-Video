"use client";
import { QUICK_ACTIONS } from "@/constants";
import useUserRole from "@/hooks/useUserRole";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { action } from "../../../../convex/_generated/server";
import ActionCard from "@/components/ActionCard";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";

export default function Home() {

  const router = useRouter();
  const { isInterviewer, isCandidate,isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const [showModel, setShowModel] = useState(false);
  const [modelType, setModelType] = useState<"start" | "join">();
  const handleQuickClick = (title: string) => {
      switch(title){
        case "New Call":
          setModelType("start");
          setShowModel(true);
          break;
        case "Join Interview":
          setModelType("join");
          setShowModel(true);
          break;
        default:
          router.push(`/${title.toLowerCase()}`);
          break;

        
      }
  };

  if(isLoading) return <p>loading....</p>  

  return (
    <div className="container max-w-7xl mx-auto px-6">
      <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
          Welcome back!
        </h1>
        <p className="text-muted-foreground mt-2">
          {isInterviewer
            ? "Manage your interviews, track progress, and assess candidates seamlessly."
            : "View your scheduled interviews and stay prepared for upcoming sessions."}
        </p>
      </div>
      {isInterviewer ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_ACTIONS.map((action) => (
              <ActionCard
                key={action.title}
                action={action}
                onClick={() => handleQuickClick(action.title)}
              />
            ))}
          </div>
          <MeetingModal
          isOpen={showModel}
          onClose={() => setShowModel(false)}
          title={modelType=="join"?"Join Meeting":"Start Meeting"}
          isJoinMeeting={modelType=="join"}
          />
        </>
      ) : (
        <>
          <div>
            candidate view
          </div>
        </>
      )}

    </div>
  );
}
