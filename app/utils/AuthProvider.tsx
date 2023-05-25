import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRevalidator } from "@remix-run/react";
import { useSupabase } from "~/supabaseContext";

const AuthContext = createContext(null as any);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const revalidator = useRevalidator();
  const [user, setUser] = useState(null);
  const supabase = useSupabase();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_: null, session: any) => {
        console.log("SESSION", session);
        revalidator.revalidate();
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.api.resetPasswordForEmail(email);
    if (error) throw error;
  };

  const updatePassword = async (oldPassword: string, newPassword: string) => {
    const { error } = await supabase.auth.update({
      password: newPassword,
      oldPassword,
    });
    if (error) throw error;
  };

  const value = {
    user,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
