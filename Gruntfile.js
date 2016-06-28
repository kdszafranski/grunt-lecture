module.exports = function(grunt) {
    // configure the grunt object
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // aka Minification
        uglify: {
            options: {
                // Adds a comment line at the top of the generated minified file
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            app: {
                src: 'client/scripts/*.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            // Combining source files into one destination files
            // Cannot guarantee order
            controllers: {
                // * is a wildcard for everything. Here, all JavaScript files.
                src: 'client/scripts/controllers/*.js',
                dest: 'server/public/assets/scripts/controllers.min.js'
            }
        },
        // Copy files around for deployment
        copy: {
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/css/', // "current working directory"
                src: [
                    "bootstrap.min.css",
                    "bootstrap.min.css.map"
                ],
                "dest": "server/public/vendors/"
            },
            angular: {
                expand: true,
                cwd: 'node_modules/angular',
                src: [
                    "angular.min.js",
                    "angular.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            angularRoute: {
                expand: true,
                cwd: 'node_modules/angular-route',
                src: [
                    "angular-route.min.js",
                    "angular-route.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            html: {
                expand: true,
                cwd: 'client/views/',
                // More wildcard usage. The second is to include sub-folders within cwd
                src: [
                    "*",
                    "*/*"
                ],
                "dest": "server/public/assets/views/"
            },
            style: {
                expand: true,
                cwd: 'client/styles/',
                src: [
                    "style.css"
                ],
                "dest": "server/public/assets/styles/"
            }
        }
    });

    // Specify the plugins used (notice the NPM reference)
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Set which tasks to run when we run 'grunt'
    grunt.registerTask('default', ['copy', 'uglify']);
};
