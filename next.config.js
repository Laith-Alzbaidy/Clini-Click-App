/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    BASE_URL: "https://mashserver2.com/",
  },
  images: {
    domains: ["mashserver2.com", "t4.ftcdn.net", "www.cdc.gov"],
  },
};

module.exports = nextConfig;