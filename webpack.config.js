const path = require("path");

module.exports = {
    entry: {
        homepage: "./index.js",
        convention: "./convention/index.js"
    },
    output: {
        path: path.resolve(__dirname, "public/javascripts"),
        filename:"[name].bundle.js"
    },
    mode: "development",
    target: "web",
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             include: [
    //                 path.resolve(__dirname, "index.js"),
    //                 path.resolve(__dirname, "convention")
    //             ],
    //             loader: "babel-loader"
    //         }
    //     ]
    // }
}