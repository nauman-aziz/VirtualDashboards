module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust the path according to your project structure
    // if you have HTML files where you're using Tailwind, include them as well
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "radial-gradient":
          "radial-gradient(circle, rgba(19,51,81,1) 0%, rgba(37,99,155,1) 100%)",
        // Adjust the color values above to match the gradient in your image.
      }),
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [],
};
