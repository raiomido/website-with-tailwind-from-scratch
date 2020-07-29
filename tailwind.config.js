module.exports = {
  purge: [
	'./*.html',
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter var'],
            poppins: ['Poppins', 'sans-serif'],
        },
        colors : {
            "theme-green": "#00b140",
            "theme-blue-base": "#172a45",
            "theme-blue-deep": "#0a192f",
            "theme-gray-light": "#ccd6f6",
            "theme-gray-deep": "#8892b0",
            "theme-aquamarine": "#44dbb2",
        }
    },
  },
  variants: {},
  plugins: [
	require('@tailwindcss/ui'),
  ],
}
