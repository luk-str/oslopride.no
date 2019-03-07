export default {
  name: "prideart",
  title: "Pride Art",
  type: "document",
  preview: {
    select: {},
    prepare() {
      return {
        title: "Pride Art"
      };
    }
  },
  fields: [
    {
      name: "preamble",
      title: "Ingress",
      type: "blockContent",
      validation: Rule => Rule.required()
    },
    {
      name: "image",
      title: "Bilde",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "body",
      title: "Innhold",
      type: "blockContent",
      validation: Rule => Rule.required()
    }
  ]
};
