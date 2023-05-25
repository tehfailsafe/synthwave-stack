import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData, useRouteError } from "@remix-run/react";
import { createServerClient } from "@supabase/auth-helpers-remix";
import { Header } from "./components/Header";
import { getServerClient } from "~/utils/getServerClient";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Synthwave App" },
    { name: "description", content: "Welcome to the Synthwave stack!" },
  ];
};

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const supabase = getServerClient(request, response);

  const { data, error } = await supabase.from("posts").select("*");
  if (error) throw error;

  return { data, headers: response.headers };
};

export default function Index() {
  const { data } = useLoaderData();

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
}
