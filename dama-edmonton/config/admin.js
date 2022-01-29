module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd8fc0f27b9b90964ddc64f0faba4f164'),
  },
});
