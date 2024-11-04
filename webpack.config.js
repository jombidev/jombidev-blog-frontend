export const config = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"], // load project styles via style-loader
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["to-string-loader", "css-loader"], // use to-string-loader for 3rd party css
                include: /node_modules/,
            },
        ]
    }
}