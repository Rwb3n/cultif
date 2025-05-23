import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/* ANNOTATION_BLOCK_START
{
  "artifact_id": "vite_config_ts_g157",
  "version_tag": "1.0.0",
  "g_created": 158,
  "g_last_modified": 158,
  "description": "Vite build configuration file, migrated to TypeScript. Configures React plugin, Tailwind CSS Vite plugin, and path aliasing for '@/*'.",
  "artifact_type": "CONFIG_FILE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide the build and development server configuration for the Vite-based cycle0_react_web prototype, now using TypeScript.",
  "key_logic_points": [
    "Uses defineConfig from Vite.",
    "Includes @vitejs/plugin-react for React support.",
    "Includes @tailwindcss/vite for Tailwind CSS integration with Vite.",
    "Configures resolve.alias for '@' to point to './src'."
  ],
  "interfaces_provided": [],
  "requisites": [
    {"description": "@vitejs/plugin-react installed.", "type": "DEPENDENCY"},
    {"description": "@tailwindcss/vite installed.", "type": "DEPENDENCY"},
    {"description": "@types/node installed (for 'path' module types).", "type": "DEPENDENCY"},
    {"description": "tsconfig.node.json configured to include vite.config.ts.", "type": "DEPENDENCY"}
  ],
  "external_dependencies": [
    {"name": "vite", "version": "^latest", "reason": "Build tool.", "notes": "Core dependency."},
    {"name": "@vitejs/plugin-react", "version": "^latest", "reason": "Vite plugin for React.", "notes": "Enables React support (Fast Refresh, JSX transform, etc.)."},
    {"name": "@tailwindcss/vite", "version": "^latest", "reason": "Tailwind CSS integration for Vite.", "notes": "Processes Tailwind directives and JIT compilation."},
    {"name": "path", "version": "Node.js built-in", "reason": "Path manipulation for alias configuration."}
  ],
  "internal_dependencies": ["tsconfig_node_g157"],
  "dependents": [],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": null
  }
}
ANNOTATION_BLOCK_END */

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}); 