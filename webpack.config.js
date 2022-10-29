const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", "css", "less"],
    },
    mode: NODE_ENV ? NODE_ENV : "development",
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js',
        publicPath: '/',
    },
    module: {
        rules: [{
                test: /\.(tsx|ts)$/,
                use: ["ts-loader"],
                exclude: [/node_modules/]
            },

            {

                test: /\.(css|less)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {

                            modules: {

                                mode: "local",
                                localIdentName: "[name]__[local]--[hash:base64:5]",
                            }
                        }

                    },
                    "less-loader",
                ],
                exclude: GLOBAL_CSS_REGEXP,


            },
            {
                test: /\.svg$/,
                use: [
                    '@svgr/webpack'
                ],
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ["style-loader", 'css-loader']
            }
        ]
    },

    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src/index.html") })],
    devServer: {
        port: 3000,
        hot: IS_DEV,
    }


}