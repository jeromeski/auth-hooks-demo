const { createProxyMiddleware } = require("http-proxy-middleware");

const proxy = createProxyMiddleware;

module.exports = function (app) {
  app.use(
    proxy("/**", { target: "https://auth-backend-playground.herokuapp.com" })
  );
};
