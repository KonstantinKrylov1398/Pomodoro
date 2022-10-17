const path = require("path");
const { HotModuleReplacementPlugin, DefinePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const DEV_PLUGIN = [new CleanWebpackPlugin, new HotModuleReplacementPlugin()]
const COMMON_PLUGINS = [new DefinePlugin({
    "process.env.CLIENT_ID": `'${process.env.CLIENT_ID}'`,
    "process.env.REDIRECT_URI": `'${process.env.REDIRECT_URI}'`,
})]
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";

function setupdevtool() {
    if (IS_DEV) return "evail";
    if (IS_PROD) return false;
}

function getEntry() {
    if (IS_PROD) return path.resolve(__dirname, "../src/client/index.tsx");
    return [
        path.resolve(__dirname, "../src/client/index.tsx"),
        "webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr"
    ]
}
module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", "css", "less"],
        alias: {
            "react-dom": IS_DEV ? "@hot-loader/react-dom" : "react-dom",
        }
    },
    mode: NODE_ENV ? NODE_ENV : "development",
    entry: getEntry(),
    output: {
        path: path.resolve(__dirname, "../dist/client"),
        filename: "client.js",
        publicPath: "/static/"
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
                test: GLOBAL_CSS_REGEXP,
                use: ["style-loader", 'css-loader']
            }
        ]
    },


    devtool: setupdevtool(),
    plugins: IS_DEV ? DEV_PLUGIN.concat(COMMON_PLUGINS) : COMMON_PLUGINS,


}