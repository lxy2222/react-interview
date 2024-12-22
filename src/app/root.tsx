import { LiveReload, Outlet, Links } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import globalLargeStylesUrl from "~/styles/global-large.css?url";
import globalMediumStylesUrl from "~/styles/global-medium.css?url";
import globalStylesUrl from "~/styles/global.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesUrl }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Links />
        <title>React interview test</title>
      </head>
      <body>
        <Outlet />
        {/* refresh */}
        <LiveReload />
      </body>
    </html>
  );
}
