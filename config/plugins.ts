export default () => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        region: process.env.S3_REGION || 'us-east-1',
        endpoint: process.env.S3_ENDPOINT,
        s3ForcePathStyle: true,
        params: {
          Bucket: process.env.S3_BUCKET,
        },
      },
    },
  },
});
