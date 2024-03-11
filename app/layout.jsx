import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portolio Antonio Luis Palomeque López",
  description: "Portfolio Antonio Luis Palomeque López",
  keywords: "Portfolio, Antonio Luis Palomeque López, Web Developer, Frontend Developer, Backend Developer, Fullstack Developer, React, Next.js, TailwindCSS, Node.js, Express, MongoDB, MySQL, PostgreSQL, Firebase, AWS, GCP, Azure, Docker, Kubernetes, CI/CD, Git, GitHub, GitLab, Bitbucket, Agile, Scrum, Kanban, Jira, Trello, Slack, Microsoft Teams, Zoom, Google Meet, Microsoft Teams"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f1faee]`}>
        <header className="bg-white px-6 shadow">
          <Navigation />
        </header>
        {children}
        <footer className="py-10">
        <Footer />
        </footer>
      </body>
    </html>
  );
}
