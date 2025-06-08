import "./globals.css";
import LeftSidebar from "../components/layout/LeftBar";
import RightSidebar from "../components/layout/Rightbar";
import BottomBar from "../components/layout/BottomBar";
import Header from "../components/layout/Header";
import { ThemeProvider } from "../components/layout/theme";
import Page from "./page";

export const metadata = {
  title: "Abdur Rahman's Portfolio",
  description: "Showcasing my work as a software engineer, specializing in React, front-end development, and modern web technologies.",
   icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
  <link rel="icon" href="/favicon.ico" sizes="any" />
</head>
      {/* <body className="flex flex-col min-h-screen outer-container"> */}
      <body class="bg-background dark:bg-dark-blue text-foreground">
        <ThemeProvider>
          <Header />
          <div className="flex flex-1">
            <aside className="w-20 text-white fixed letft-0 top-16 h-[calc(100vh-4rem)]">
              <LeftSidebar />
            </aside>
            <div className="flex-1 p-8 overflow-y-auto dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
              <Page/>
            </div>
            <aside className="w-20  text-white fixed right-0 top-16 h-[calc(100vh-4rem)]">
              <RightSidebar />
            </aside>
            {/* <aside className="w-20  text-white fixed bottom-0 top-16 h-[calc(100vh-4rem)]">
              <BottomBar />
            </aside> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
