module.exports = ({ env }) => ({
  upload: {
      config: {
          provider: 'aws-s3',
          providerOptions: {
              accessKeyId: env('AKIAQOOEY3D4HAE4XKH3'),
              secretAccessKey: env('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'),
              region: env('us-west-2'),
              params: {
                  Bucket: env('dama-edmonton-cms'),
              },
          },
      },
  }
});