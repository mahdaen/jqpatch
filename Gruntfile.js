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

        concat: {
            core: {
                files: {
                    'dist/jqpatch.js': [
                        /* Externals */
                        'node_modules/native-js/dist/nativejs.clean.js',
                        'source/ext.polyfill.js',

                        /* Cores Patches */
                        'source/ptc.core.js',

                        /* Core Plugins */
                        'source/plg.core.js',
                        'source/plg.checker.js',
                        'source/plg.style.js',

                        /* Extensions */
                        'source/ext.switch.js',
                        'source/ext.animation.js',
                        'source/ext.notification.js',
                    ]
                }
            },
        },

        /* Uglifying Scripts */
        uglify: {
            build: {
                options: {
                    mangle: true,
                    sourceMap: true,
                    sourceMapName: 'dist/jqpatch.min.map'
                },
                files: {
                    'dist/jqpatch.min.js': 'dist/jqpatch.js'
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
                tasks: ['concat', 'apidoc']
            }
        }
    });

    /* Loading Tasks */
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-apidoc');

    /* Registering Tasks */
    grunt.registerTask('devel', ['concat', 'apidoc', 'watch']);
    grunt.registerTask('build', ['concat', 'apidoc', 'uglify']);

    grunt.registerTask('docs', ['apidoc']);
}
