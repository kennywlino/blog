import { defineConfig } from "tinacms";
import blogCollection from './collections/blog';
import learningJournalCollection from './collections/learning-journal';
import dsaCollection from './collections/dsa';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      blogCollection,
      learningJournalCollection,
      dsaCollection
    ],
  },
});
