import { createContext, useContext, useState } from "react";

export const SupabaseContext = createContext(null as any);

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context.supabase) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return context.supabase;
};
