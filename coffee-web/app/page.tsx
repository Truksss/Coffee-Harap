'use client';
// import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import Navbar  from  "../components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
    <AuroraBackground>
        <Navbar>

        </Navbar>
    </AuroraBackground>
    </div>
  );
}


{/* <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          
        </button> */}