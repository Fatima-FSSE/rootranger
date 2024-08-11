import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import AddBootstrap from "./AddBootstrap";
import SessionProvider from "./SessionProvider";

export const metadata = {
  title: "Root Ranger",
  description: "An Ai Gardener",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
        <AddBootstrap />
      </body>
    </html>
  );
}
