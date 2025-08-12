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
        // Ensure no double slashes and protocol is present
        baseUrl: `${process.env.AWS_ENDPOINT?.replace(/\/$/, '')}/${process.env.AWS_BUCKET}`,
      },
    },
  },
});