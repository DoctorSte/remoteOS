module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  env: { SENDGRID_API_KEY: process.env.SENDGRID_API_KEY },
};
