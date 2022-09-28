const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')
const nanoid = require('nanoid').nanoid

module.exports = () => {
    const plugins = []

    plugins.push(
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(__dirname, 'src', 'index.template.html'),
            entry: path.resolve(__dirname, 'build', 'index.html')
        })
    )
    
    plugins.push(new HtmlReplaceWebpackPlugin(
        [
           {
              pattern: '_BUILD_',
              replacement: nanoid(8)
           }
        ]
     ))

    return {
        mode: 'production',
        entry: [
            path.resolve(__dirname, 'src', 'index.tsx')
        ],
        output: {
            publicPath: '',
            path: path.resolve(__dirname, 'build'),
            filename: 'app.js'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            strictExportPresence: true,
            rules: [
                {
                    test: /\.ts|\.tsx$/,
                    loader: 'ts-loader',
                    exclude: [
                        /node_modules/
                    ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: './styles',
                                name: '[name].min.css'
                            }
                        },
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins
    }
}