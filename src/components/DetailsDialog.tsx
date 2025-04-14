"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, HelpCircle, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const DetailsDialog = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="flex items-center px-2 py-1 text-white rounded-md bg-slate-800">
          What is this
          <HelpCircle className="w-5 h-5 ml-1" />
        </span>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[100vw] md:w-[60vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Welcome to Quizmefy!
          </DialogTitle>
          <DialogDescription>
            <div className="flex items-center justify-center gap-6 my-4">
              <Link
                href="https://github.com/elliott-chong/Quizzzy"
                target="_blank"
                className="flex items-center hover:underline text-sm"
              >
                <Github className="w-5 h-5 mr-1" />
                GitHub
              </Link>
              <Link
                href="https://youtube.com/@elliottchong"
                target="_blank"
                className="flex items-center hover:underline text-sm"
              >
                <Youtube className="w-5 h-5 mr-1 text-red-500" />
                YouTube
              </Link>
            </div>

            <p className="my-2 text-sm leading-relaxed">
              Are you tired of mundane and repetitive quizzes? Say goodbye to the ordinary and embrace the extraordinary with <strong>Quizmefy</strong>!  
              Our platform is revolutionizing the quiz and trivia experience by harnessing the immense potential of artificial intelligence.
            </p>

            <hr className="my-4" />

            <h4 className="text-base font-semibold mt-4 mb-2">Built with</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                ["planetscale", "PlanetScale", 35],
                ["nextjs", "Next.js", 35],
                ["tailwind", "Tailwind", 35],
                ["nextauth", "NextAuth", 30],
                ["openai", "OpenAI", 30],
                ["react-query", "React Query", 30],
                ["prisma", "Prisma", 30],
                ["typescript", "TypeScript", 30],
              ].map(([src, name, size]) => (
                <div key={name} className="flex items-center gap-2">
                  <Image
                    alt={String(name)}
                    src={`/${src}.png`}
                    width={+size}
                    height={+size}
                  />
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsDialog;
