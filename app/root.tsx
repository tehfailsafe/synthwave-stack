import { json, type LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { revalidateAuthStateChange } from "./utils/revalidateAuthStateChange";
import { useState } from "react";
import {
  createBrowserClient,
  SupabaseClient,
} from "@supabase/auth-helpers-remix";
import { SupabaseContext } from "./supabaseContext";
import { AuthProvider } from "./utils/AuthProvider";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export async function loader() {
  return json({
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    },
  });
}

export default function App() {
  const { ENV } = useLoaderData<typeof loader>();
  const [supabase] = useState<SupabaseClient>(() =>
    createBrowserClient(ENV.SUPABASE_URL!, ENV.SUPABASE_ANON_KEY!)
  );

  revalidateAuthStateChange(supabase);

  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SupabaseContext.Provider value={{ supabase }}>
          <AuthProvider supabase={supabase}>
            <Outlet />
          </AuthProvider>
        </SupabaseContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html>
      <head>
        <title>Oh no!!!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="container mx-auto">
          <h1>Oops! An error occurred.</h1>
          <pre>{error.message}</pre>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
