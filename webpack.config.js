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
      // Для SCSS файлов
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
    static: path.resolve(__dirname, "dist"), // Указываем каталог для статических файлов
    port: 5500, // или любой другой порт, который вам нравится
    hot: true, // включить горячую перезагрузку
    open: true, // автоматически откроет браузер
    historyApiFallback: true, // поддержка "Single Page Applications"
  },
};
