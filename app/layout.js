import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Shamsa Batool — AI/ML Engineer & Agentic AI Developer",
  description:
    "Portfolio of Shamsa Batool — AI/ML Engineer specializing in Agentic AI, LLM-powered applications, voice agents, and intelligent automation systems.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Agentic AI",
    "LLM",
    "LangGraph",
    "Voice AI",
    "Portfolio",
    "Shamsa Batool",
  ],
  openGraph: {
    title: "Shamsa Batool — AI/ML Engineer & Agentic AI Developer",
    description:
      "Building intelligent AI agents, voice interfaces, and automation systems.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
