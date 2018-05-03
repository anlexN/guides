import json from "rollup-plugin-json";
import uglify from 'rollup-plugin-uglify';

export default [
    {
        input: "index.js",
        output: {
            file: "public/javascripts/homepage.js",
            format: "es",
        },
        // plugins: [
        //     uglify()
        // ]
    },
    {
        input: "convention/index.js",
        output: {
            file: "public/javascripts/convention.js",
            format: "es",
        },
        // plugins: [
        //     uglify()
        // ]
    }
]