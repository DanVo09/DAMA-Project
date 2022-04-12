module.exports = ({ env }) => ({
  upload: {
      config: {
          provider: 'aws-s3',
          providerOptions: {

              region: env('us-west-2d'),
              params: {
                  Bucket: env('dama-edmonton-cms'),
              },
          },
      },
  }
});