"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-Login-Card";
import { Button } from "@/components/ui/button";
import { Github, Mail } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa'
import { signIn } from "next-auth/react";

export function LoginCard() {

    const handleSignInGoogle = () => {
        signIn('google', {
            callbackUrl: '/'
        })
    }

    const handleSignInGithub = () => {
        signIn('github', {
            callbackUrl: '/'
        })
    }

  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-zinc-900/[0.1] bg-zinc-900/50 border-zinc-800 w-full max-w-md h-auto rounded-xl p-6 border backdrop-blur-md backdrop-saturate-150">
        <CardItem
          translateZ="50"
          className="text-3xl font-bold text-zinc-100 text-center mb-2"
        >
          Your ideas, your workspace
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm text-center text-zinc-400 mb-4"
        >
          Sign in to manage your notes, tasks, and more with ease.
        </CardItem>
        <CardItem translateZ="100" className="w-full mb-4">
          <Image
            src="/login-logo.png"
            height={100}
            width={100}
            className="h-32 w-32 mx-auto object-contain"
            alt="ANARC Logo"
          />
        </CardItem>
        <CardItem translateZ="50" className="w-full space-y-4">
          <Button onClick={handleSignInGoogle} className="w-full bg-zinc-850 text-zinc-100 hover:bg-zinc-950 backdrop-blur-sm transition-all duration-300 hover:text-zinc-100" variant="outline">
            <FaGoogle className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
          <Button onClick={handleSignInGithub} className="w-full bg-zinc-850 text-zinc-100 hover:bg-zinc-700/50 backdrop-blur-sm transition-all duration-300 hover:text-zinc-100 hover:bg-zinc-950" variant="outline">
            <Github className="mr-2 h-4 w-4" />
            Sign in with GitHub
          </Button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

