"use client"

import Loader from '@/components/Loader';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import useGetCallById from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

function MeetingPage() {
  const { id } = useParams();
  const { isLoaded } = useUser();
  const [isSetUpCompleted, setIsSetUpCompleted] = useState<boolean>(false);
  const { call, isCallLoading } = useGetCallById(id);
  if (!isLoaded || isCallLoading) return <Loader />
  if(!call){
    return(
      <div className='h-screen flex items-center justify-center'>
        <p className='text-2xl font-semibold'>Meeting not found</p>
      </div>
    );
  }
  return (
    <StreamCall call={call}>
      <StreamTheme>
        (!isSetUpCompleted ?(
        <MeetingSetup onSetupComplete={() => setIsSetUpCompleted(true)} />
        ):(<MeetingRoom />));
      </StreamTheme>
    </StreamCall>
  )
}

export default MeetingPage