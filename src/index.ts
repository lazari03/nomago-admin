// import type { Core } from '@strapi/strapi';

console.log('S3_ACCESS_KEY_ID:', process.env.S3_ACCESS_KEY_ID);
console.log('S3_SECRET_ACCESS_KEY:', process.env.S3_SECRET_ACCESS_KEY);
console.log('S3_BUCKET:', process.env.S3_BUCKET);
console.log('S3_ENDPOINT:', process.env.S3_ENDPOINT);
console.log('S3_REGION:', process.env.S3_REGION);

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
