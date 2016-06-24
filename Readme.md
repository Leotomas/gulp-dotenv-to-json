#gulp-dotenv-to-json
A dead-simple gulp plugin to write some of your dotenv into a json file that can be then used by your front-end application. Very handy if, for instance, you need to pass the server's env to your json but want to hide very secret credentials such as api keys from your client-served javascript. This plugin was originally made to partially share a dotenv between laravel and vuejs.


##Usage

Npm install the thingy :

    npm install gulp-dotenv-to-json;

Do something like this in your gulpfile.js. Use case : I only want to copy the 'SERVER', key of my dotenv to the json. If you want to copy your whole dotenv you can always put keys : ['*'];

    var dotenvToJson = require ('gulp-dotenv-to-json');
    gulp.task('dotenvToJson', function(){
        dotenvToJson.copy({
            keys : ['SERVER'],
            paths : {
                env : '.env',
                jenv : 'env3.json'
            }
        });
    });

Using elixir ? put the code above in your gulpfile and then :

    elixir(function(mix) {
        mix.task('dotenvToJson');
    }



## Licence

The MIT License (MIT)
Copyright (c) 2016 to Léo TOMAS

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


