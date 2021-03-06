/**
 * @type { import("snowpack").SnowpackUserConfig }
 */
module.exports = {
  buildOptions: {
    out: '../../conf/theme/login/resources/',
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  mount: {
    src: '/dist',
  },
  optimize: {
    bundle: true,
    entrypoints: ['./src/index.js'],
    minify: true,
    target: 'es2017',
  },
  plugins: ['@snowpack/plugin-postcss'],
};
