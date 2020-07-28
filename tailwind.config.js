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
            "theme-green": "#00b140"
        }
    },
  },
  variants: {},
  plugins: [
	require('@tailwindcss/ui'),
  ],
}
