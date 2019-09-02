module.exports = {
  presets: [
    // Responsável por prover funcionalidades javascripts que o browser ainda não entende
    "@babel/preset-env",
    // Responsável por prover as funcionalidades do react que o browser ainda não entende
    "@babel/preset-react"
  ],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
