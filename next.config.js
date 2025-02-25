const { join } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [join(__dirname, "src/sass")],
      },
}

module.exports = nextConfig
