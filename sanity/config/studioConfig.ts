import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "../schemas/schema";

export default defineConfig({
  name: "habilite-clinics-studio",
  title: "Habilite Clinics CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-20",
  basePath: "/studio",
  plugins: [
    deskTool(), // Enables document editor lists and editing UI
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  }
});
