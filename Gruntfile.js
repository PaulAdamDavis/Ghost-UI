/*!
 * Ghost-UI Gruntfile
 * http://ui.ghost.org
 * Copyright 2014 Ghost Foundation.
 * Licensed under MIT (https://github.com/TryGhost/Ghost-UI/blob/master/LICENSE)
 */

 var path = require('path'),
     breakpoint = path.join(__dirname, 'bower_components/breakpoint-sass/stylesheets/'),
     normalize = path.join(__dirname, 'bower_components/normalize-scss/');

module.exports = function (grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    RegExp.quote = function (string) {
        return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    // load all grunt tasks
    require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        clean: {
            dist: ['dist', 'docs/dist']
        },

        copy: {
            fonts: {
                expand: true,
                src: 'fonts/*',
                dest: 'dist/'
            },
            docs: {
                expand: true,
                cwd: './dist',
                src: [
                    '{css,js}/*.min.*',
                    '{css,js}/*.*',
                    'css/*.map',
                    'fonts/*'
                ],
                dest: 'docs/dist'
            }
        },

        // ### config for grunt-sass
        // compile sass to css
        sass: {
            dist: {
                // Adding .min for this task is a lie. It's only because Ghost looks for ghost-ui.min.css
                files: {
                    'dist/css/<%= pkg.name %>.min.css': 'sass/screen.scss',
                    'docs/dist/css/<%= pkg.name %>.min.css': 'sass/screen.scss'
                }
            },
            compress: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/css/<%= pkg.name %>.min.css': 'sass/screen.scss',
                    'docs/dist/css/<%= pkg.name %>.min.css': 'sass/screen.scss'
                }
            }
        },

        autoprefixer: {

            options: {
                browsers: ["last 2 versions", "> 1%", "Explorer 10"]
            },

            // prefix the specified file
            dist: {
                options: {
                    // Target-specific options go here.
                },
                src: 'dist/css/<%= pkg.name %>.min.css',
                dest: 'dist/css/<%= pkg.name %>.min.css'
            },
        },


        // ### config for grunt-shell
        // command line tools
        shell: {
            bower: {
                command: path.resolve(__dirname + '/node_modules/.bin/bower install'),
                options: {
                    stdout: true
                }
            }
        },

        watch: {
            sass: {
                files: '**/**.scss',
                tasks: ['sass:dist', 'autoprefixer', 'copy:docs']
            }
        }
    });

    // JS distribution task.
    // grunt.registerTask('dist-js', ['concat', 'uglify']);

    // CSS distribution task.
    grunt.registerTask('dist-css', ['sass']);

    // Docs distribution task.
    grunt.registerTask('dist-docs', 'copy:docs');

    // Watch/Dev task.
    grunt.registerTask('dev', 'watch');

    // Full distribution task
    grunt.registerTask('dist', ['clean', 'shell', 'dist-css', 'copy:fonts', 'dist-docs']);
    grunt.registerTask('default', 'Build CSS, JS & templates for development', ['dist']);

};
