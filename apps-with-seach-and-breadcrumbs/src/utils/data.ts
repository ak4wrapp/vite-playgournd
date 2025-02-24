import { AppData } from "../types";

export const jsonData: AppData[] = [
  {
    id: "1",
    title: "Company 1 - Group 1",  // Group 1 in Company 1
    href: "#group1",
    children: [
      { id: "11", title: "App 1.1 - HR Management", href: "#app1.1", children: [] },  // App related to HR Management
      {
        id: "12",
        title: "Company 1 - Group 1.1",  // Nested Group in Group 1
        href: "#group1.1",
        children: [
          { id: "121", title: "App 1.1.1 - Finance Tracker", href: "#app1.1.1", children: [] },  // Finance Tracker App
          {
            id: "122",
            title: "Company 1 - Group 1.1.1",  // Another nested Group
            href: "#group1.1.1",
            children: [{ id: "1221", title: "App 1.1.1.1 - Project Management", href: "#app1.1.1.1", children: [] }]  // Project Management App
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Company 2 - Group 2",  // Group in Company 2
    href: "#group2",
    children: [
      { id: "21", title: "App 2.1 - Customer Relationship Management", href: "#app2.1", children: [] }  // CRM App
    ],
  },
  { id: "3", title: "App 3 - Marketing Automation", href: "#app3", children: [] },  // Standalone Marketing App
];
