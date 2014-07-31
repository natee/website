/* jshint node: true */

module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
                ' * <%= pkg.name %> v<%= pkg.version %> - <%= pkg.homepage %>\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
                ' * Licensed under the <%= pkg.license %> license\n' +
                ' */\n',

        jshint: {
            files: ['*.js'],
            options: {
                'browser': true,
                'node': false,
                'camelcase': true,
                'curly': true,
                'eqeqeq': true,
                'eqnull': true,
                'forin': true,
                'immed': true,
                'indent': 4,
                'laxbreak': true,
                'laxcomma': true,
                'lastsemic': true,
                'loopfunc': true,
                'noarg': true,
                'noempty': true,
                'newcap': true,
                'plusplus': false,
                'quotmark': 'single',
                'shadow': true,
                'smarttabs': false,
                'strict': false,
                'sub': true,
                'trailing': true,
                'undef': true,
                'unused': true,
                ignores: ['bower_components', 'node_modules']
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>',
                compress: true,
                mangle: true,
                preserveComments: false,
                report: 'gzip'
            },
            dist: {
                files: {
                    'dist/rainyday.min.js': ['rainyday.js']
                }
            }
        }
    });


    // load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify']);
    grunt.registerTask('dist', ['uglify']);
    grunt.registerTask('test', ['jshint']);
};
