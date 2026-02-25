// internationalization
const i18n = require("eleventy-plugin-i18n");

const filters = require("./utils/filters.js");

//const shapesFilters = require("./utils/shapes.js");
const slugify = require("slugify");

module.exports = async function (config) {
  const { EleventyI18nPlugin } = await import("@11ty/eleventy");

  config.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
    autoescape: false, // warning: don’t do this!
  });

  // ***************** Filters ***********************

  // filters
  // all imported filters from utils/filters.js
  Object.keys(filters).forEach((filterName) => {
    config.addFilter(filterName, filters[filterName]);
  });

  // pass-through
  config.addPassthroughCopy({ static: "/" });

  config.addFilter("slug", (str) =>
    slugify(str, { lower: true, strict: true, locale: "fr" })
  );

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts",
      data: "_data",
    },
  };
};
