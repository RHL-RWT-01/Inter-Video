"use client";

import { ReactNode,useEffect, useState } from "react";
import {StreamVideoClient, StreamVideo} from "@stream-io/video-react-sdk";

import {useUser} from "@clerk/nextjs";


const StreamVideoProvider = ({children}:{children:ReactNode})=>{
    const [StreamVideoClient, setStreamVideoClient] = useState<StreamVideoClient>();
    const {user, isLoaded} = useUser();

    useEffect(()=>{
        if(!isLoaded || !user)return;
        const client = new StreamVideoClient({
            apiKey:process.env.NEXT_PUBLIC_STREAM_API_KEY!,
            user:{
                id:user?.id,
                name:user?.firstName || "" + " "+user?.lastName || "" || user?.id,
                image:user?.imageUrl,

            },
            tokenProvider: streamTokenProvider,
        });

        setStreamVideoClient(client);

    },[user, isLoaded]);

    if(!StreamVideoClinet)return <LoaderUI/>;

    return(

    )
};

export default StreamVideoProvider;
