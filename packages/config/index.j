const path = require('path');

// const eslintPath = path.join(__dirname, 'dist', 'eslintrc');
// const prettierPath = path.join(__dirname, 'dist', 'prettierrc');
const eslintPath = path.join(__dirname, 'src', 'eslintrc');
const prettierPath = path.join(__dirname, 'src', 'prettierrc');

module.exports = {
  eslint: require(eslintPath),
  prettier: require(prettierPath),
};
