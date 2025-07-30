import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { emailList } from "@/server/db/schema";

export const generalRouter = createTRPCRouter({
  registerEmailList: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { email } = input;
      try {
        await ctx.db.insert(emailList).values({ email });
        return { success: true };
      } catch (error) {
        return { success: false, error: "Email already exists" };
      }
    }),
});
