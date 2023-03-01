export default {
  name: "blog",
  label: "Blog",
  path: "src/content/blog",
  defaultItem: () => {
    return {
      draft: true,
      heroImage: 'public/itemPreview.png'
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
      name: "pubDate",
      label: "Publish date",
      required: true,
    },
    {
      type: "string",
      name: "heroImage",
      label: "Hero Image",
      required: false,
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
      required: false,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
}