import { createServerClient } from "@supabase/auth-helpers-remix";

export const getServerClient = (request: Request, response: Response) => {
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    { request, response }
  );

  return supabase;
};
