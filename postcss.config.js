const purgecss = require('@fullhuman/postcss-purgecss').default;
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer,
    purgecss({
      content: ['./src/**/*.html', './src/**/*.vue'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
