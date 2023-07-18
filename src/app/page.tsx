"use client"
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import error from './error';
import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/dashboard')
            //redirect('/auth/login?callbackUrl=/dashboard')

        }
    })

  return (


    <>
     
    </>

  )
}
