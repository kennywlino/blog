export default {
  name: "blog",
  label: "Blog",
  path: "src/content/blog",
  defaultItem: () => {
    return {
      pubDate: new Date().toString(),
      draft: false,
      heroImage: ''
    }
  },
  ui: {
    filename: {
      slugify: values => {
        return `${values?.title?.toLowerCase().replace(/[^0-9a-z]+/gi, '-').replace(/-+/g, "-")}`
      },
    },
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
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
}