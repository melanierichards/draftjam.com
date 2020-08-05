const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function(eleventyConfig) {

  // MARKDOWN EXTENSIONS
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: 'c-heading-anchor',
    permalinkSymbol: '#',
    permalinkAttrs: (slug) => ({
      "aria-label": "Permalink for " + slug,
      "title": "permalink"
    })
  });

  eleventyConfig.setLibrary('md', markdownLibrary);

};