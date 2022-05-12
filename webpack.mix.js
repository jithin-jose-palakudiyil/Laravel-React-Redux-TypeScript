const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/* mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');
*/

//frontend mix
mix.js('resources/js/frontend/app.js', 'public/frontend/js')
    .react()
    .sass('resources/sass/frontend/app.scss', 'public/frontend/css');


//backend mix
mix.js('resources/js/backend/app.js', 'public/backend/js')
.react()
.sass('resources/sass/backend/app.scss', 'public/backend/css');
