let mix = require('laravel-mix');

mix.postCss('src/css/style.css', 'public/css', [
  require('tailwindcss'),
])
