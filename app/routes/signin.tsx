import { useAuth } from "~/utils/AuthProvider";

export default function Signin() {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="container mx-auto flex justify-center items-center flex-col h-full w-1/2">
      <h1 className="text-4xl mb-8">Sign In</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Sigin with Google
      </button>
    </div>
  );
}
