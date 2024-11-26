"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface ThreeDCardDemoProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export function ThreeDCardDemo({ title, description, imageUrl, imageAlt }: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-full h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
            height={1000}
            width={1000}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={imageAlt}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

