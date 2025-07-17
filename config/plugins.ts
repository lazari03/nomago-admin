export default () => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
          region: process.env.S3_REGION || 'us-east-1', // Can be any region for S3-compatible storage
          endpoint: process.env.S3_ENDPOINT, // Your Coolify S3 endpoint
          forcePathStyle: true, // Important for S3-compatible storage
        },
        actionOptions: {
          upload: {
            Bucket: process.env.S3_BUCKET,
          },
          uploadStream: {
            Bucket: process.env.S3_BUCKET,
          },
          delete: {
            Bucket: process.env.S3_BUCKET,
          },
        },
      },
    },
  },
});
