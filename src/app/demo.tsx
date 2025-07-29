"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Board from "@/components/board/board";
import Piece from "@/components/pieces/piece";

function TrainSection() {
  useGSAP(() => {
    const tl1 = gsap.timeline({
      repeat: -1,
      delay: 1,
      defaults: { ease: "power1.inOut" },
    });

    tl1
      .fromTo(
        "#one-pawn",
        { opacity: 1, duration: 0.6, left: "0%", top: "0%" },
        { opacity: 0, duration: 0.6, left: "33.333%", top: "33.333%" },
        0,
      )
      .from(
        "#one-rook",
        { opacity: 0, duration: 0.6, left: "0%", top: "0%" },
        0,
      )
      .to(
        "#one-rook",
        { opacity: 0, duration: 0.6, left: "66.666%", top: "66.666%" },
        "+=1",
      )
      .from(
        "#one-queen",
        { opacity: 0, duration: 0.6, left: "33.333%", top: "33.333%" },
        "-=0.6",
      )
      .to("#one-queen", { opacity: 0, duration: 0.6 }, "+=1")
      .from(
        "#one-pawn",
        { opacity: 0, duration: 0.6, left: "0%", top: "0%" },
        "-=0.6",
      )
      .to({}, { duration: 1 });
  });

  return (
    <section className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-16 md:p-16">
      <div className="flex h-fit w-full justify-center">
        <Board width={3} height={3} className="max-w-xs">
          <Piece
            id="one-pawn"
            type="pawn"
            color="white"
            className="top-0 left-0 w-1/3"
          />
          <Piece
            id="one-rook"
            type="rook"
            color="white"
            className="top-1/3 left-1/3 w-1/3"
          />
          <Piece
            id="one-queen"
            type="queen"
            color="white"
            className="top-2/3 left-2/3 w-1/3"
          />
        </Board>
      </div>

      <div className="w-full">
        <h2 className="font-vt323 text-6xl font-bold md:text-8xl">Train</h2>
        <p className="text-muted-foreground">
          In just 36 hours, build and train an AI Grandmaster <br />
          From opening gambits to endgame tactics, every move is on you
        </p>
      </div>
    </section>
  );
}

function IterateSection() {
  useGSAP(() => {
    const tl2 = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power1.inOut" },
    });

    tl2
      .from(
        ["#two-pawn-1", "#two-pawn-2", "#two-pawn-3", "#two-rook", "#two-king"],
        { opacity: 0 },
        0,
      )
      .fromTo(
        "#two-pawn-1",
        { left: "25%", top: "50%" },
        { left: "25%", top: "25%" },
        "+=1",
      )
      .to("#two-rook", { left: "0%", top: "0%" }, "+=1")
      .to("#two-pawn-2", { left: "50%", top: "25%" }, "+=1")
      .to(
        ["#two-pawn-1", "#two-pawn-2", "#two-pawn-3", "#two-rook", "#two-king"],
        { opacity: 0 },
        "+=1",
      )
      .to({}, { duration: 1 });
  });

  return (
    <section className="flex w-full flex-col items-center gap-8 md:flex-row-reverse md:gap-16 md:p-16">
      <div className="flex h-fit w-full justify-center">
        <Board width={4} height={4} className="max-w-sm">
          <Piece
            id="two-king"
            type="king"
            color="white"
            className="top-3/4 right-0 w-1/4"
          />
          <Piece
            id="two-pawn-1"
            type="pawn"
            color="white"
            className="top-2/4 right-2/4 w-1/4"
          />
          <Piece
            id="two-pawn-2"
            type="pawn"
            color="white"
            className="top-2/4 right-1/4 w-1/4"
          />
          <Piece
            id="two-pawn-3"
            type="pawn"
            color="white"
            className="top-1/4 right-0 w-1/4"
          />
          <Piece
            id="two-rook"
            type="rook"
            color="white"
            className="top-3/4 left-0 w-1/4"
          />
        </Board>
      </div>

      <div className="w-full text-right">
        <h2 className="font-vt323 text-6xl font-bold md:text-8xl">Iterate</h2>
        <p className="text-muted-foreground">
          Pit your model against the ghost of its last iteration
          <br />
          Monitor rating gains, move quality, and response times
        </p>
      </div>
    </section>
  );
}

function CompeteSection() {
  useGSAP(() => {
    const ayushObj = { rating: 2400 };
    const moulikObj = { rating: 2250 };

    const tl3 = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power1.inOut" },
      onRepeat: () => {
        ayushObj.rating = 2400;
        moulikObj.rating = 2250;
        document.getElementById("ayush-rating")!.innerText = Math.round(
          ayushObj.rating,
        ).toString();
        document.getElementById("moulik-rating")!.innerText = Math.round(
          moulikObj.rating,
        ).toString();
      },
    });

    tl3
      .from(
        ["#three-queen", "#three-pawn-1", "#three-pawn-2", "#three-pawn-3"],
        { opacity: 0 },
        0,
      )
      .fromTo(
        "#three-queen",
        { left: "75%", top: "75%" },
        { left: "75%", top: "0%" },
        "+=1",
      )
      .from("#three-check", { opacity: 0 }, "+=0")
      .from("#three-leaderboard", { left: "100%" }, "+=0.5")
      .to(
        ayushObj,
        {
          rating: 2350,
          duration: 1,
          ease: "power1.inOut",
          onUpdate: () => {
            document.getElementById("ayush-rating")!.innerText = Math.round(
              ayushObj.rating,
            ).toString();
          },
        },
        "+=0.5",
      )
      .to(
        moulikObj,
        {
          rating: 2300,
          duration: 1,
          ease: "power1.inOut",
          onUpdate: () => {
            document.getElementById("moulik-rating")!.innerText = Math.round(
              moulikObj.rating,
            ).toString();
          },
        },
        "<",
      )
      .to("#three-leaderboard", { opacity: 0 }, "+=1")
      .to({}, { duration: 1 });
  });

  return (
    <section className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-16 md:p-16">
      <div className="flex h-fit w-full justify-center">
        <Board width={4} height={4} className="max-w-sm">
          <div
            id="three-check"
            className="absolute top-0 left-1/4 h-1/4 w-1/4 bg-radial from-red-500 to-transparent opacity-25"
          ></div>
          <Piece type="rook" color="black" className="top-0 left-0 w-1/4" />
          <Piece type="king" color="black" className="top-0 left-1/4 w-1/4" />
          <Piece type="pawn" color="black" className="top-1/4 left-1/4 w-1/4" />
          <Piece
            type="king"
            color="white"
            className="bottom-0 left-1/4 w-1/4"
          />

          <Piece
            type="pawn"
            color="white"
            className="bottom-1/4 left-1/4 w-1/4"
          />
          <Piece
            id="three-queen"
            type="queen"
            color="white"
            className="right-0 bottom-0 w-1/4"
          />

          <div
            id="three-leaderboard"
            className="absolute top-0 right-0 flex h-full w-2/3 flex-col items-center gap-2 rounded-lg bg-black/50 p-4 backdrop-blur-sm"
          >
            <h3 className="font-vt323 text-xl font-bold text-white/75">
              Leaderboard
            </h3>
            <div className="flex w-full items-center gap-3 rounded-md bg-black/25 p-2">
              <div className="h-8 w-8 rounded-full bg-neutral-700/50 text-sm"></div>
              <span className="text-white">Ayush G</span>
              <span
                className="ml-auto font-mono text-emerald-400"
                id="ayush-rating"
              >
                2400
              </span>
            </div>
            <div className="flex w-full items-center gap-3 rounded-md bg-black/25 p-2">
              <div className="h-8 w-8 rounded-full bg-neutral-700/50 text-sm"></div>

              <span className="text-white">Moulik B</span>
              <span
                className="ml-auto font-mono text-emerald-400"
                id="moulik-rating"
              >
                2250
              </span>
            </div>
            <div className="flex w-full items-center gap-3 rounded-md bg-black/25 p-2">
              <div className="h-8 w-8 rounded-full bg-neutral-700/50 text-sm"></div>

              <span className="text-white">John D</span>
              <span className="ml-auto font-mono text-emerald-400">2100</span>
            </div>
          </div>
        </Board>
      </div>

      <div className="w-full">
        <h2 className="font-vt323 text-6xl font-bold md:text-8xl">Compete</h2>
        <p className="text-muted-foreground">
          Throw your bot into the wringer, challenge other teams in real time
          <br />
          Only one can take home the queen
        </p>
      </div>
    </section>
  );
}

export default function DemoSection() {
  return (
    <section className="flex flex-col gap-16 md:gap-0">
      <TrainSection />
      <IterateSection />
      <CompeteSection />
    </section>
  );
}
