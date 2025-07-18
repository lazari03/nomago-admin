export default () => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: process.env.AWS_REGION || 'us-east-1',
          endpoint: process.env.AWS_ENDPOINT,
          s3ForcePathStyle: true,
          params: {
            Bucket: process.env.AWS_BUCKET,
          },
        },
        baseUrl: process.env.AWS_ENDPOINT + '/' + process.env.AWS_BUCKET, // Add this line if supported
      },
    },
  },
});