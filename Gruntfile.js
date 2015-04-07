/**
 * Keong.
 * Grunt Definitions.
 * Language: Javascript.
 * Created by mahdaen on 12/8/14.
 * License: GNU General Public License v2 or later.
 */

/* Gunt Module */
module.exports = function(grunt) {
    var source = 'source/';
    var libs = 'libraries/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        exports: {
            main: {
                options: {
                    uglify: true,
                    verbose: true,
                    noscript: true
                },
                files: {
                    'dist': 'source/jqpatch.js'
                }
            }
        },

        apidoc: {
            core: {
                src: 'tags/',
                dest: 'docs/'
            }
        },

        /* Watch for File Changes */
        watch: {
            options: {
                livereload: 2084
            },
            core: {
                files: ['source/**/*.js'],
                tasks: ['exports', 'apidoc']
            },
            docs: {
                files: ['tags/**/*.js'],
                tasks: ['apidoc']
            }
        }
    });

    /* Loading Tasks */
    grunt.loadNpmTasks('grunt-export');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-apidoc');

    /* Registering Tasks */
    grunt.registerTask('devel', ['exports', 'apidoc', 'watch']);
    grunt.registerTask('build', ['exports', 'apidoc', 'uglify']);

    grunt.registerTask('docs', ['apidoc']);
}
