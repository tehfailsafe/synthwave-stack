import { useRevalidator } from "@remix-run/react";
import { useEffect } from "react";

export const revalidateAuthStateChange = (supabase: any) => {
  const revalidator = useRevalidator();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      revalidator.revalidate();
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);
};
