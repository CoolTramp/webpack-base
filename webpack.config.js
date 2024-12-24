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
      template: "./src/index.html", // Шаблон для index.html
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"), // Папка для статических файлов
    port: 5500, // Порт для сервера
    hot: true, // Включение горячей перезагрузки
    open: true, // Открытие браузера
    watchFiles: ["src/**/*.html", "src/**/*.ts"], // Отслеживание изменений в HTML и TS файлах
    liveReload: true, // Включение автоматической перезагрузки
    historyApiFallback: true, // Поддержка SPA
    client: {
      overlay: true, // Показывать ошибки в браузере
    },
  },
};
