import type { Project } from "../types/portfolio";
import type { ProjectMediaItem } from "../components/shared/ProjectMedia";

export const agvProject: Project = {
  id: "project-agv",
  name: "Autonomous Warehouse Digital Twin",
  tagline: "Distributed multi-agent coordination for autonomous warehouse vehicles",
  nameExplanation: "Industry collaboration with E80 Group",
  period: "Presented September 2026",
  description: "A multi-agent warehouse simulation developed in collaboration with E80 Group, where autonomous AGVs negotiate missions, plan congestion-aware routes, and synchronize with a Unity digital twin.",
  image: "/images/projects/agv/AGV1.jpg",
  tech: ["Python", "AgentPy", "Unity", "A*", "Multi-Agent Systems", "JSON"],
  cardTech: ["Python", "AgentPy", "Unity", "A*"],
  overview: "Developed in collaboration with E80 Group as an industry-partnered academic project, this project explores how automated guided vehicles can coordinate warehouse missions without relying on a central controller. We built a multi-agent simulation in Python and a Unity digital twin to test distributed mission assignment, congestion-aware routing, and battery-aware behavior.",
  contribution: "We modeled four AGVs operating among production lines, racks, pallets, truck docks, and charging stations, with pedestrians, dynamic obstacles, and temporary station failures.",
  gallery: [],
};

// All supplied media lives in public/images/projects/agv.
export const agvHeroMedia: ProjectMediaItem = {
  type: "image",
  src: "/images/projects/agv/AGV1.jpg",
  caption: "Unity digital twin — AGV view, fleet batteries, and active missions",
  alt: "Unity warehouse visualization following an AGV between racks, with fleet battery levels and mission activity alongside",
};
export const warehouseLayoutMedia: ProjectMediaItem = {
  type: "image",
  src: "/images/projects/agv/warehouse-schematic.svg",
  caption: "Environment layout · initial AGV positions",
  alt: "Warehouse plan with four production lines on the left, four docks on the right, two chargers at the top, racks A and B in the center, C at the top, D vertically to the right, and E at the bottom; four AGVs start along the left aisle",
};
export const projectMedia: ProjectMediaItem[] = [
  { type: "video", src: "/images/projects/agv/Grabación de pantalla 2026-09-11 a la(s) 6.26.38 p.m..mp4", caption: "AGV simulation — screen recording", alt: "Screen recording of the AGV simulation project" },
  { type: "video", src: "/images/projects/agv/AGVvid1.mp4", caption: "Simulation in motion", alt: "AGV warehouse simulation in motion" },
  { type: "image", src: "/images/projects/agv/AGV2.png", caption: "Unity digital twin — overhead view", alt: "Overhead Unity view of four AGVs among five racks, with production lines on the left and docks on the right" },
  { type: "image", src: "/images/projects/agv/AGV3.png", caption: "Python simulation — mission and battery states (still frame)", alt: "Python simulation at step 144, with AGV positions, battery levels, an obstacle, and the mission panel" },
];

export const missionSteps = [
  ["Mission created", "A transport task enters the simulation."],
  ["Mission published", "The task is available in the shared repository."],
  ["AGVs calculate utility", "Each available vehicle evaluates the mission locally."],
  ["Distributed auction", "AGVs compare bids to determine the winner."],
  ["Winner self-assigns", "The winning vehicle takes responsibility for the task."],
  ["Route planning", "The vehicle plans a path to carry out its mission."],
  ["Mission execution", "The AGV transports its pallet to the destination."],
  ["Recharge / re-plan", "It responds to low energy or blocked paths as needed."],
];

export const primaryResults = [
  { value: "18.5%", label: "Less mission waiting time" },
  { value: "5.4%", label: "Less average mission execution time" },
  { value: "6.1%", label: "Higher AGV utilization" },
  { value: "35.7%", label: "Less average charging time" },
];
export const supportingResults = [
  { value: "+5.4%", label: "Fleet availability" },
  { value: "+1.7%", label: "Completed missions" },
  { value: "+1.7%", label: "Throughput" },
];
export const tradeoffs = [
  { value: "+3.7%", label: "Average distance traveled" },
  { value: "+3.4%", label: "Route conflicts" },
  { value: "19.2% worse", label: "Workload balance" },
];
export const futureImprovements = [
  "Tune or learn utility weights automatically.",
  "Estimate congestion along the full planned path.",
  "Allow mission reassignment when conditions change.",
  "Explore Q-Learning or Markov Decision Processes.",
  "Scale to more AGVs and a larger environment.",
  "Test more dynamic obstacles.",
];
