module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b75ca79e7817a7900e5648151bfeeb25'),
  },
});
