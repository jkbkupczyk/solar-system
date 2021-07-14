const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  variants: {
    extend: {
      padding: ['hover'],
    }
  },
  plugins: [],
  darkMode: "media",
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: !production
  },
};