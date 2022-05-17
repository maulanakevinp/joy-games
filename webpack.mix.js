const mix = require('laravel-mix');

mix.js('src/js/min.js', 'assets/js')
    .sass('src/sass/min.scss', 'assets/css');