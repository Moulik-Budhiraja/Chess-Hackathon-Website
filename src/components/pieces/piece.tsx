import { cn } from "@/lib/utils";

type Props = {
  type: "pawn" | "knight" | "bishop" | "rook" | "queen" | "king";
  color: "white" | "black";
  className?: string;
  id?: string;
};

export default function Piece({ type, color, className, id }: Props) {
  return (
    <div className={cn("absolute aspect-square w-full", className)} id={id}>
      <img
        src={`/pieces/${color}-${type}.svg`}
        alt={`${color} ${type} piece`}
        className="h-full w-full drop-shadow-md drop-shadow-neutral-600/30"
      />
    </div>
  );
}
