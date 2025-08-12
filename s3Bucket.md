
# 📦 Strapi + MinIO (Coolify) Media Storage Setup

This guide documents how to:

* Connect Strapi to a **self-hosted MinIO S3-compatible bucket** (Coolify)
* Allow public access to uploaded media (for use in frontend image carousels)
* Deploy-ready ✅

---

## ✅ 1. Environment Setup

Add the following to your `.env` file (for both development and production environments):

```env
# S3 Storage (Coolify MinIO)
AWS_ACCESS_KEY_ID=nomago-s3-key
AWS_SECRET_ACCESS_KEY=nomago-s3-secret-2025!
AWS_BUCKET=nomago-uploads
AWS_ENDPOINT=http://168.231.78.121:9000
AWS_REGION=us-east-1
```

---

## 🧩 2. Install the Strapi Upload Provider Plugin

In your Strapi project folder, install the S3 provider:

```bash
npm install @strapi/provider-upload-aws-s3
```

---

## ⚙️ 3. Configure the Upload Plugin in `config/plugins.js`

Create or edit this file:

```js
// path: config/plugins.js

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
        endpoint: env('AWS_ENDPOINT'), // required for MinIO
        s3ForcePathStyle: true,        // needed for MinIO compatibility
        signatureVersion: 'v4',
      },
    },
  },
});
```

---

## 🌐 4. Make the Bucket Public (Read-Only)

> Run these commands from your **VPS terminal** where MinIO is hosted.

### Install the `mc` CLI (MinIO Client)

```bash
curl -O https://dl.min.io/client/mc/release/linux-amd64/mc
chmod +x mc
mv mc /usr/local/bin/
```

### Connect to MinIO

```bash
mc alias set local http://168.231.78.121:9000 nomago-s3-key nomago-s3-secret-2025!
```

### Make the Bucket Public

```bash
mc anonymous set download local/nomago-uploads
```

✅ Now, files in the bucket can be accessed directly via public URLs.

---

## 🔍 5. Example Access URL


After uploading an image in Strapi, you can directly view it at:

```
http://168.231.78.121:9000/nomago-uploads/<filename>
```

**Important:** Do NOT use the bucket name as a subdomain (e.g., `http://nomago-uploads.168.231.78.121:9000/<filename>`). This will NOT work with MinIO and will result in broken URLs. Always use the format above, with the bucket name as a path segment.

Example:

```
http://168.231.78.121:9000/nomago-uploads/property1_kitchen.png
```

---

## 🛡️ Security Notes

* Uploads are still protected (users can't upload without proper roles)
* Public **read-only** access means **only downloads are allowed**
* If you need private access, you can use **presigned URLs** or proxy through Strapi

---

## 📦 Deployment Tip

When deploying to Coolify:

* Make sure the `.env` values are added to your app container in Coolify
* Your Strapi media library will automatically use S3 instead of local storage

---

