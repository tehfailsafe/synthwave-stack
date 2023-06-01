import { useNavigate } from "@remix-run/react";
import { useAuth } from "~/utils/AuthProvider";

export default function Signin() {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSignin = async (e: Event) => {
    e.preventDefault();

    await signUp({
      email: "test@test.com",
      password: "password",
    });

    navigate("/");
  };

  return (
    <div className="container mx-auto flex justify-center items-center flex-col h-full w-1/2">
      <h1 className="text-4xl mb-8">Sign In</h1>
      <form onSubmit={(e) => handleSignin(e)} className="w-1/2 flex flex-col">
        <input
          className="block px-2 py-1 bg-transparent border border-gray-700 rounded-sm mb-4"
          type="email"
          name="email"
          placeholder="Email"
        />

        <input
          className="block px-2 py-1 bg-transparent border border-gray-700 rounded-sm mb-8"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="bg-blue-500 py-2 rounded-sm">Submit</button>
      </form>
    </div>
  );
}
