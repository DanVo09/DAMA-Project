const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "damaCms"),
      user: env("DATABASE_USERNAME", "damaCms"),
      password: env("DATABASE_PASSWORD", "Fs3DYTwT2rz6dP9"),
    },
    useNullAsDefault: true,
  },
});
