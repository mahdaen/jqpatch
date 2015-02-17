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
                        'source/header.js',

                        /* Externals */
                        'node_modules/native-js/dist/nativejs.clean.js',
                        'source/extensions/ext.polyfill.js',

                        /* Cores Patches */
                        'source/patches/ptc.core.js',
                        'source/patches/ptc.style.js',

                        /* Core Plugins */
                        'source/plugins/plg.core.js',
                        'source/plugins/plg.checker.js',
                        'source/plugins/plg.style.js',

                        /* Extensions */
                        'source/extensions/ext.switch.js',
                        'source/extensions/ext.animation.js',
                        'source/extensions/ext.events.js',
                        'source/extensions/ext.notification.js',
                        'source/extensions/ext.dataicon.js',
                        'source/extensions/ext.background.js',

                        'source/footer.js',
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
            },
            clean: {
                options: {
                    mangle: false,
                    beautify: true,
                },
                files: {
                    'dist/jqpatch.clean.js': 'dist/jqpatch.js'
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
            },
            docs: {
                files: ['tags/**/*.js'],
                tasks: ['apidoc']
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
