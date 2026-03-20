/**
 * @filename: lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "*.ts": ["eslint", "prettier --list-different"],
};

export default config;
