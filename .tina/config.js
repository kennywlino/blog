import { defineConfig } from "tinacms";

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
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        defaultItem: () => {
          return {
            pubDatetime: new Date().toISOString(),
            draft: true,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "pubDatetime",
            label: "Publish date/time",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: false,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft?",
          },  
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "learning_journal",
        label: "Learning Journals",
        path: "src/content/blog/learning-journal",
        defaultItem: () => {
          return {
            title: `Learning Journal - ${new Date().toLocaleDateString('en-ZA')}`,
            description: `Summary of top 2-3 topics today.`,
            pubDatetime: new Date().toISOString(),
            tags: ['learning-journal'],
            body: {
              type: 'root',
              children: [
                {
                  type: 'h2',
                  children: [
                    {
                      type: 'text',
                      text: 'What was your goal today? Did you accomplish it, and if not, what can you do differently next time?',
                    },
                  ],
                },
                {
                  type: 'h2',
                  children: [
                    {
                      type: 'text',
                      text: 'What did you learn or work on today? How does it tie into your goals?',
                    },
                  ],
                },
                {
                  type: 'h2',
                  children: [
                    {
                      type: 'text',
                      text: 'What are some things you\'d like to make special note of?'
                    },
                  ],
                },
                {
                  type: 'h2',
                  children: [
                    {
                      type: 'text',
                      text: 'What are some things you\'re still curious about?'
                    },
                  ],
                },
                {
                  type: 'h2',
                  children: [
                    {
                      type: 'text',
                      text: 'What do you plan to work on tomorrow?'
                    },
                  ],
                },
              ],
            },
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "pubDatetime",
            label: "Publish date/time",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: false,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft?",
          },  
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "dsa",
        label: "Data Structures & Algorithms",
        path: "src/content/blog/dsa",
        defaultItem: () => {
          return {
            title: `[Problem Type] - Problem Title`,
            description: `Summary of the problem.`,
            pubDatetime: new Date().toISOString(),
            tags: ['dsa', 'neetcode150'],
            body: {
              type: 'root',
              children: [
                {
                  type: 'h2',
                  children: [
                    {
                      type: 'text',
                      text: 'Problem Domain',
                    },
                  ],
                },
                {
                  type: 'h2',
                  children: [
                    {
                      type: 'text',
                      text: 'Input/Output',
                    },
                  ],
                },
                {
                  type: 'h2',
                  children: [
                    {
                      type: 'text',
                      text: 'Tests'
                    },
                  ],
                },
                {
                  type: 'h2',
                  children: [
                    {
                      type: 'text',
                      text: 'Visualization'
                    },
                  ],
                },
                {
                  type: 'h2',
                  children: [
                    {
                      type: 'text',
                      text: 'Algorithm'
                    },
                  ],
                },
                {
                  type: 'h2',
                  children: [
                    {
                      type: 'text',
                      text: 'Code'
                    },
                  ],
                },
              ],
            },
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "pubDatetime",
            label: "Publish date/time",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: false,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft?",
          },  
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "project",
        label: "Projects",
        path: "src/content/blog/project",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
