require("dotenv").config();

module.exports = {
  apps: [
    {
      name: "crontab-ui",
      script: "crontab-ui",
      error_file: "./err.log",
      out_file: "./out.log",
      log_file: "./combined.log",
      time: true,
      env: {
        BASIC_AUTH_USER: process.env.BASIC_AUTH_USER,
        BASIC_AUTH_PWD: process.env.BASIC_AUTH_PWD,
        HOST: process.env.HOST,
        PORT: process.env.PORT
      }
    }
  ]
};
