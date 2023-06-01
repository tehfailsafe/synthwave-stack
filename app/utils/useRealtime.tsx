import { useRevalidator } from "@remix-run/react";
import { useEffect } from "react";
import { useSupabase } from "~/supabaseContext";

export const useRealtime = (table: string) => {
  const supabase = useSupabase();
  const revalidator = useRevalidator();

  return useEffect(() => {
    supabase
      .channel("any")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: table },
        () => revalidator.revalidate()
      )
      .subscribe();
  }, []);
};
