import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";

import { appRouter } from "@/server/routers/_app";

export async function getStaticProps() {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: {},
    transformer: superjson,
  });

  await helpers.families.prefetch({ skip: 0, take: 28 });

  return {
    props: {
      trpcState: helpers.dehydrate(),
      skip: 0,
      take: 28,
    },
  };
}

export { default } from "../container/Home";
