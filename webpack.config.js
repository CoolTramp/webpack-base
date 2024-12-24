const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts", // Точка входа для TypeScript
  output: {
    filename: "bundle.js", // Название скомпилированного JavaScript файла
    path: path.resolve(__dirname, "dist"), // Папка для итоговых файлов
  },
  module: {
    rules: [
      // Для TypeScript файлов
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // Для CSS файлов
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Если хотите использовать SCSS/SASS, добавьте это правило
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // Для разрешения расширений файлов
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Указываем путь к шаблону HTML
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
