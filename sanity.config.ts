import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas/schema";

// Read env vars (expected to be provided by CLI/runtime)
// Fallbacks so Studio never crashes if env vars are not picked up
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "xyk8ch4r";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || process.env.SANITY_API_VERSION || "2024-12-01";

export default defineConfig({
  name: "habilite-clinics-studio",
  title: "Habilite Clinics CMS",
  projectId: projectId || "",
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [
    deskTool(), // Enables document lists and editor UI
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});

