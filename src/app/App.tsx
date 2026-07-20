import { useEffect, useRef, useState } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { Toolbar } from "./components/layout/Toolbar";
import { projects } from "./data/portfolio";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { HomePage } from "./pages/HomePage";
import { LeadershipPage } from "./pages/LeadershipPage";
import { ProjectPage } from "./pages/ProjectPage";
import type { Page } from "./types/portfolio";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const mainRef = useRef<HTMLElement>(null);

  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={navigate} />;
      case "about":
        return <AboutPage />;
      case "experience":
        return <ExperiencePage />;
      case "leadership":
        return <LeadershipPage />;
      case "contact":
        return <ContactPage />;
      case "project-oasis":
      case "project-ensenname":
      case "project-awaq": {
        const project = projects.find((p) => p.id === currentPage);
        if (!project) return <HomePage onNavigate={navigate} />;
        return <ProjectPage project={project} onBack={() => navigate("home")} />;
      }
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden"
      style={{
        display: "grid",
        gridTemplateRows: "40px 1fr",
        gridTemplateColumns: "216px 1fr",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Toolbar currentPage={currentPage} onNavigate={navigate} />
      <Sidebar currentPage={currentPage} onNavigate={navigate} />
      <main
        ref={mainRef}
        className="overflow-y-auto bg-[#07182C] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {renderPage()}
      </main>
    </div>
  );
}
