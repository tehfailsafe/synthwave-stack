var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LOZ4Y4B4.css";

// app/utils/revalidateAuthStateChange.tsx
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), revalidateAuthStateChange = (supabase) => {
  let revalidator = (0, import_react2.useRevalidator)();
  (0, import_react3.useEffect)(() => {
    let {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(() => {
      revalidator.revalidate();
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);
};

// app/root.tsx
var import_react8 = require("react"), import_auth_helpers_remix = require("@supabase/auth-helpers-remix");

// app/supabaseContext.tsx
var import_react4 = require("react"), SupabaseContext = (0, import_react4.createContext)(null), useSupabase = () => {
  let context = (0, import_react4.useContext)(SupabaseContext);
  if (!context.supabase)
    throw new Error("useSupabase must be used within a SupabaseProvider");
  return context.supabase;
};

// app/utils/AuthProvider.tsx
var import_react5 = require("react"), import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), AuthContext = (0, import_react5.createContext)(null), AuthProvider = ({
  children
}) => {
  let revalidator = (0, import_react6.useRevalidator)(), [user, setUser] = (0, import_react5.useState)(null), supabase = useSupabase();
  (0, import_react5.useEffect)(() => {
    let { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        console.log("SESSION", session), revalidator.revalidate(), setUser((session == null ? void 0 : session.user) ?? null);
      }
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  let value = {
    user,
    signIn: async ({
      email,
      password
    }) => {
      let { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error)
        throw error;
    },
    signUp: async (email, password) => {
      let { error } = await supabase.auth.signUp({ email, password });
      if (error)
        throw error;
    },
    signOut: async () => {
      let { error } = await supabase.auth.signOut();
      if (error)
        throw error;
    },
    resetPassword: async (email) => {
      let { error } = await supabase.auth.api.resetPasswordForEmail(email);
      if (error)
        throw error;
    },
    updatePassword: async (oldPassword, newPassword) => {
      let { error } = await supabase.auth.update({
        password: newPassword,
        oldPassword
      });
      if (error)
        throw error;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthContext.Provider, { value, children }, void 0, !1, {
    fileName: "app/utils/AuthProvider.tsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
}, useAuth = () => {
  let context = (0, import_react5.useContext)(AuthContext);
  if (!context)
    throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }];
async function loader() {
  return (0, import_node2.json)({
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
    }
  });
}
function App() {
  let { ENV } = (0, import_react7.useLoaderData)(), [supabase] = (0, import_react8.useState)(
    () => (0, import_auth_helpers_remix.createBrowserClient)(ENV.SUPABASE_URL, ENV.SUPABASE_ANON_KEY)
  );
  return revalidateAuthStateChange(supabase), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SupabaseContext.Provider, { value: { supabase }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AuthProvider, { supabase, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react7.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Oh no!!!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Oops! An error occurred." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("pre", { children: error.message }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader2,
  meta: () => meta
});
var import_react10 = require("@remix-run/react");

// app/routes/components/Header.tsx
var import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Header = () => {
  let { signOut, user } = useAuth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "flex justify-between items-center py-4 container mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-2xl font-bold", children: "My Project" }, void 0, !1, {
      fileName: "app/routes/components/Header.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    user ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: () => signOut(), children: "Sign Out" }, void 0, !1, {
      fileName: "app/routes/components/Header.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react9.Link, { to: "/signin", children: "Sign In" }, void 0, !1, {
      fileName: "app/routes/components/Header.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/components/Header.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};

// app/utils/getServerClient.tsx
var import_auth_helpers_remix2 = require("@supabase/auth-helpers-remix"), getServerClient = (request, response) => (0, import_auth_helpers_remix2.createServerClient)(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
  { request, response }
);

// app/routes/_index.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Synthwave App" },
  { name: "description", content: "Welcome to the Synthwave stack!" }
], loader2 = async ({ request }) => {
  let response = new Response(), supabase = getServerClient(request, response), { data, error } = await supabase.from("posts").select("*");
  if (error)
    throw error;
  return { data, headers: response.headers };
};
function Index() {
  let { data } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("pre", { children: JSON.stringify(data, null, 2) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/signin.tsx
var signin_exports = {};
__export(signin_exports, {
  default: () => Signin
});
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Signin() {
  let { signIn } = useAuth(), navigate = (0, import_react11.useNavigate)(), handleSignin = async (e) => {
    e.preventDefault(), await signIn({
      email: "mike@failsafedesign.com",
      password: "password"
    }), navigate("/");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container mx-auto flex justify-center items-center flex-col h-full w-1/2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-4xl mb-8", children: "Sign In" }, void 0, !1, {
      fileName: "app/routes/signin.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { onSubmit: (e) => handleSignin(e), className: "w-1/2 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          className: "block px-2 py-1 bg-transparent border border-gray-700 rounded-sm mb-4",
          type: "email",
          name: "email",
          placeholder: "Email"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/signin.tsx",
          lineNumber: 23,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          className: "block px-2 py-1 bg-transparent border border-gray-700 rounded-sm mb-8",
          type: "password",
          name: "password",
          placeholder: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/signin.tsx",
          lineNumber: 30,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "bg-blue-500 py-2 rounded-sm", children: "Submit" }, void 0, !1, {
        fileName: "app/routes/signin.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signin.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/signin.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-DURMAEDD.js", imports: ["/build/_shared/chunk-E6GVVEBE.js", "/build/_shared/chunk-UHTSJ5IT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RY4MDJAJ.js", imports: ["/build/_shared/chunk-UTUE6QIR.js", "/build/_shared/chunk-SJ25VI6Q.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-XCP47RKL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signin": { id: "routes/signin", parentId: "root", path: "signin", index: void 0, caseSensitive: void 0, module: "/build/routes/signin-BNTSL7BC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "c15db42d", hmr: void 0, url: "/build/manifest-C15DB42D.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/signin": {
    id: "routes/signin",
    parentId: "root",
    path: "signin",
    index: void 0,
    caseSensitive: void 0,
    module: signin_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
