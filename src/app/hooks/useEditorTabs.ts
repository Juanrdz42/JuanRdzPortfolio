import { useCallback, useState } from "react";
import { getPageLabel } from "../data/navigation";
import type { Page } from "../types/portfolio";

export interface EditorTab {
  page: Page;
  label: string;
}

const initialTab: EditorTab = { page: "home", label: getPageLabel("home") };

export function useEditorTabs() {
  const [tabs, setTabs] = useState<EditorTab[]>([initialTab]);
  const [activePage, setActivePage] = useState<Page | null>(initialTab.page);

  const openTab = useCallback((page: Page) => {
    setTabs((currentTabs) => {
      if (currentTabs.some((tab) => tab.page === page)) return currentTabs;
      return [...currentTabs, { page, label: getPageLabel(page) }];
    });
    setActivePage(page);
  }, []);

  const activateTab = useCallback((page: Page) => {
    setActivePage(page);
  }, []);

  const closeTab = useCallback((page: Page) => {
    setTabs((currentTabs) => {
      const closingIndex = currentTabs.findIndex((tab) => tab.page === page);
      if (closingIndex === -1) return currentTabs;

      const remainingTabs = currentTabs.filter((tab) => tab.page !== page);
      setActivePage((currentPage) => {
        if (currentPage !== page) return currentPage;
        return remainingTabs[Math.max(0, closingIndex - 1)]?.page ?? null;
      });
      return remainingTabs;
    });
  }, []);

  return { tabs, activePage, openTab, activateTab, closeTab };
}
