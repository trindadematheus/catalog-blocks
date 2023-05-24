import { z } from "zod";

import { procedure, router } from "../trpc";
import { getFamilies } from "@/service/families";

export const appRouter = router({
  families: procedure
    .input(
      z.object({
        skip: z.number(),
        take: z.number(),
      })
    )
    .output(
      z.array(
        z.object({
          id: z.string(),
          premium: z.boolean(),
          details: z.object({
            name: z.string(),
            description: z.string(),
          }),
        })
      )
    )
    .query(async (opts) => {
      const skip = opts.input.skip;
      const take = opts.input.take;

      try {
        const { data } = await getFamilies({
          skip: skip,
          take: take,
        });

        return data;
      } catch (error) {
        throw error;
      }
    }),
});

export type AppRouter = typeof appRouter;
