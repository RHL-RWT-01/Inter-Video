
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import useMeeting from '@/hooks/useMeeting';

interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string,
    isJoinMeeting: boolean;
}

function MeetingModal({ isOpen, onClose, title, isJoinMeeting }: MeetingModalProps) {

    const [meetingUrl, setMeetingUrl] = useState("");

    const {createInstantMeeting, joinMeeting} = useMeeting();
    const handleStart = () => { };
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className='sm:max-w-[425px] '>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className='space-y-4 pt-4'>
                    {isJoinMeeting && (
                        <Input
                            placeholder='Enter Meeting URL'
                            value={meetingUrl}
                            onChange={(e) => setMeetingUrl(e.target.value)}
                        />
                    )}
                    <div className='flex justify-end gap-3'>

                        <Button variant={'outline'}
                            onClick={onClose}
                        >cancel</Button>

                        <Button onClick={handleStart} disabled={isJoinMeeting && !meetingUrl.trim()}>{isJoinMeeting ? "Join Meeting" : "Start Meeting"}</Button>

                    </div>

                </div>
            </DialogContent>

        </Dialog>
    )
}

export default MeetingModal