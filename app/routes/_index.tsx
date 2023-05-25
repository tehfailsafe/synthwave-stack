import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import {
  Form,
  useLoaderData,
  useRevalidator,
  useRouteError,
} from "@remix-run/react";
import { createServerClient } from "@supabase/auth-helpers-remix";
import { Header } from "../components/Header";
import { getServerClient } from "~/utils/getServerClient";
import { useEffect } from "react";
import { useSupabase } from "~/supabaseContext";
import { useRealtime } from "~/utils/useRealtime";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Synthwave App" },
    { name: "description", content: "Welcome to the Synthwave stack!" },
  ];
};

export const action = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const supabase = getServerClient(request, response);
  const { data, error } = await supabase.from("posts").insert({});

  if (error) throw new Error(error.message);
  return { headers: response.headers };
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
  useRealtime("posts");
  const supabase = useSupabase();

  return (
    <>
      <Header />
      <div className="container mx-auto">
        {data.map((post) => (
          <div key={post.id} className="flex gap-4">
            <h2>{post.id}</h2>
            <p>{post.created_at}</p>
            <div
              className="cursor-pointer"
              onClick={async () =>
                await supabase.from("posts").delete().eq("id", post.id)
              }
            >
              Delete
            </div>
          </div>
        ))}
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <Form method="post">
          <button type="submit">Submit</button>
        </Form>
      </div>
    </>
  );
}
