"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { api } from "@/trpc/react";
import { toast } from "sonner";

const DemoSection = dynamic(() => import("./demo"), { ssr: false });

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(5px)", "blur(16px)"],
  );

  const { mutate: registerEmail } = api.general.registerEmailList.useMutation();

  return (
    <main className="p-8">
      <section className="relative h-svh w-full overflow-hidden">
        <div className="fixed top-0 left-0 -z-10 h-full w-full">
          <motion.img
            src="/images/hero-img.webp"
            alt="hero"
            className="h-full w-full object-cover"
            style={{ filter: blur }}
          />
        </div>

        <div className="absolute top-1/2 w-full -translate-y-1/2 sm:max-w-sm md:left-24">
          <h1 className="font-vt323 text-5xl font-bold">
            Waterloo&apos;s First <br /> Chess AI Hackathon
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Your move, Developer • November 7-9, 2025
          </p>

          <form
            className="mt-4 flex w-full flex-col gap-2"
            action={(formData) => {
              const email = formData.get("email");
              if (email) {
                registerEmail({ email: email as string });
                toast.success("Email registered successfully");
              } else {
                toast.error("Please enter an email");
              }
            }}
          >
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="rounded-full"
              required
            />
            <Button
              type="submit"
              variant={"outline"}
              className="rounded-full text-white/50"
            >
              Sign up for updates
            </Button>
          </form>
        </div>
      </section>

      <div className="w-full" ref={ref}>
        <DemoSection />

        <section className="flex h-svh flex-col items-center justify-center gap-2 text-center">
          <h2 className="font-vt323 text-6xl font-bold">
            Join Us this November
          </h2>
          <p className="text-muted-foreground text-sm">
            Sign up for email updates and be the first to know when registration
            opens.
          </p>

          <form
            className="mt-8 flex w-full max-w-sm flex-col items-center justify-center gap-2"
            action={(formData) => {
              const email = formData.get("email");
              if (email) {
                registerEmail({ email: email as string });
                toast.success("Email registered successfully");
              } else {
                toast.error("Please enter an email");
              }
            }}
          >
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="rounded-full"
              required
            />
            <Button
              type="submit"
              variant={"outline"}
              className="rounded-full text-white/50"
            >
              Sign up for updates
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
}
