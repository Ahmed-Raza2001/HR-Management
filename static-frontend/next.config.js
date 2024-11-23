// next.config.js
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  },
  webpack: (config, { isServer }) => {
    config.externals.push({
      sharp: 'commonjs sharp',
      canvas: 'commonjs canvas',
    });

    // Additional configuration for client-side image handling (if necessary)
    if (!isServer) {
      // Only if you have client-side image imports that need processing
      config.module.rules.push({
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/image/[name].[hash].[ext]',
            },
          },
        ],
      });
    }

    return config;
  },
};
