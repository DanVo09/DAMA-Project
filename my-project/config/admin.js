module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fd21dfa5798b3503b09f27da13fa3320'),
  },
});
