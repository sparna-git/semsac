// Eleventy Version 3.0 with node.js >18
const nunjucks = require("nunjucks");

const { DateTime } = require("luxon");

module.exports = {

  // allows to make an absolute URL relative. Use it like this :
  // {{ '/assets/old-website/uploads/2014/09/illustration.jpg' | relative(page) }}
  relative: function (absoluteUrl, page) {
    if (absoluteUrl.includes("://")) {
      // full URI, return it directly
      return absoluteUrl;
    }
    // if (!absoluteUrl.startsWith('/')) {
    //  throw new Error('URL is already relative : '+absoluteUrl)
    // }
    try {
      var relativeUrl = require("path").relative(page.url, absoluteUrl);
      const URLRelative = relativeUrl.replace(new RegExp(/\\/g), "/");
      return URLRelative;
    } catch (error) {
      return absoluteUrl;
    }
  }

}