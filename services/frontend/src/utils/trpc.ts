import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "@pahn/api";

export const trpc = createReactQueryHooks<AppRouter>();
