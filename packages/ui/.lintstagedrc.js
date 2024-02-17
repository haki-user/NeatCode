module.exports = {
  "**/*.ts?(x)": (filenames) =>
    `eslint --fix ${filenames.join(" ")}`,
};