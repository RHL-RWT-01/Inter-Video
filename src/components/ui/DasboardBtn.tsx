"use client";
import Link from 'next/link';
import React from 'react'
import { Button } from './button';
import { SparkleIcon } from 'lucide-react';
import useUserRole from '@/hooks/useUserRole';

function DasboardBtn() {
    const {isLoading, isCandidate, isInterviewer} = useUserRole()
    if(isCandidate || isLoading) {
        return null
    }
  return (
    <Link href='/dashboard'>
        <Button className='"gap-2 font-medium size={md}'>
            <SparkleIcon className='size-4' />
            Dashboard
        </Button>
    </Link>
  )
}

export default DasboardBtn