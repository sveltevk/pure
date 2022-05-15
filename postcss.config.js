module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-dropunusedvars"),
    // require("postcss-variable-compress"),
    require("postcss-csso"),
  ],
};
