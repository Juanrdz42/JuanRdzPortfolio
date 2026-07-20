import { useEffect, useRef } from "react";
import { EditorTabs } from "./components/layout/EditorTabs";
import { EmptyEditor } from "./components/layout/EmptyEditor";
import { Sidebar } from "./components/layout/Sidebar";
import { Toolbar } from "./components/layout/Toolbar";
import { projects } from "./data/portfolio";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { HomePage } from "./pages/HomePage";
import { LeadershipPage } from "./pages/LeadershipPage";
import { ProjectPage } from "./pages/ProjectPage";
import { useEditorTabs } from "./hooks/useEditorTabs";
import type { Page } from "./types/portfolio";

export default function App() {
  const mainRef = useRef<HTMLElement>(null);
  const { tabs, activePage, openTab, activateTab, closeTab } = useEditorTabs();

  const navigate = (page: Page) => {
    openTab(page);
  };

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [activePage]);

  const renderPage = () => {
    if (!activePage) return <EmptyEditor />;

    switch (activePage) {
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
        const project = projects.find((p) => p.id === activePage);
        if (!project) return <HomePage onNavigate={navigate} />;
        return <ProjectPage project={project} onBack={() => navigate("home")} />;
      }
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div
      className="portfolio-shell xcode-shell h-screen w-screen overflow-hidden"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Toolbar currentPage={activePage} onNavigate={navigate} />
      <Sidebar currentPage={activePage} onNavigate={navigate} />
      <div
        className={`${activePage ? "xcode-workspace" : "empty-workspace"} flex min-h-0 min-w-0 flex-col overflow-hidden`}
      >
        <EditorTabs
          tabs={tabs}
          activePage={activePage}
          onActivate={activateTab}
          onClose={closeTab}
        />
        <main
          ref={mainRef}
          className="min-h-0 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
