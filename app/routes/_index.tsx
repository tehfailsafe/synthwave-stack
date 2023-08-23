import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { Header } from "../components/Header";
import { getServerClient } from "~/utils/getServerClient";
import { useSupabase } from "~/supabaseContext";
import { useRealtime } from "~/utils/useRealtime";
import {
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Text,
  Theme,
} from "@radix-ui/themes";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Synthwave App" },
    { name: "description", content: "Welcome to the Synthwave stack!" },
  ];
};

export const action = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const supabase = getServerClient(request, response);
  const { data, error } = await supabase.from("items").insert({});

  if (error) throw new Error(error.message);
  return { headers: response.headers };
};

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const supabase = getServerClient(request, response);

  const { data, error } = await supabase.from("items").select("*");
  if (error) throw error;

  return { data, headers: response.headers };
};

export default function Index() {
  const { data } = useLoaderData();
  useRealtime("items");
  const supabase = useSupabase();

  return (
    <>
      <Theme appearance="dark">
        <Container size="3" className="py-12">
          <Flex direction="column">
            <Heading>Test</Heading>
            <Card>Test</Card>[]
          </Flex>
        </Container>
      </Theme>
      <Header />
      <Text>Test </Text>
      <div className="container mx-auto">
        {data.map((post) => (
          <div key={post.id} className="flex gap-4">
            <h2>{post.id}</h2>
            <p>{post.created_at}</p>
            <div
              className="cursor-pointer"
              onClick={async () =>
                await supabase.from("items").delete().eq("id", post.id)
              }
            >
              Delete
            </div>
          </div>
        ))}
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <Form method="post">
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </>
  );
}
