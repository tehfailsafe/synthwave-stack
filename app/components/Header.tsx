import { Link } from "@remix-run/react";
import { useSupabase } from "~/supabaseContext";
import { useAuth } from "~/utils/AuthProvider";

export const Header = () => {
  const { signOut, user } = useAuth();

  return (
    <header className="flex justify-between items-center py-4 container mx-auto">
      <h1 className="text-2xl font-bold">My Project</h1>
      {user ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </header>
  );
};
