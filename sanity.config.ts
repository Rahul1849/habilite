import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { table } from "@sanity/table"; // ✅ REQUIRED
import { schemaTypes } from "./sanity/schemas/schema";

// Read env vars (expected to be provided by CLI/runtime)
const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "xyk8ch4r";
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  process.env.SANITY_API_VERSION ||
  "2024-12-01";

export default defineConfig({
  name: "habilite-clinics-studio",
  title: "Habilite Clinics CMS",
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [
    deskTool(),
    visionTool(),
    table(), // ✅ THIS LINE FIXES EVERYTHING
  ],
  schema: {
    types: schemaTypes,
  },
});
