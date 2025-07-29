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
      await ctx.db.insert(emailList).values({ email });
      return { success: true };
    }),
});
