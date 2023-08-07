module.exports = ({ env }) => ({
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms: {
        wrapBodyWithDataKey: true,
      },
      hooks: {},
      contentTypeFilter: {},
      plugins: {},
    },
  },
  documentation: {
    enabled: true,
    config: {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "Strapi Backend",
        description: "Strapi backend Documentation",
        contact: null,
        license: null,
        termsOfService: null,
      },
      "x-strapi-config": {
        plugins: [],
      },
      servers: [
        {
          url: "api",
        },
      ],
      externalDocs: null,
    },
  },
  "protected-populate": {
    enabled: true,
    config: {
      ["auto-populate"]: true,
    },
  },
});
