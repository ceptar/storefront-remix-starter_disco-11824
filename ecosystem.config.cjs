module.exports = {
    apps: [
      {
        name: 'vendure-front',
        script: 'npm',
        args: 'run start:cf',
        env: {
          NODE_ENV: 'production',
          // VENDURESHOPAPI
          VENDURE_API_URL: 'https://romantic-goldberg.212-132-115-241.plesk.page/shop-api',
          // COOKIESECRET
          COOKIE_SECRET: '473l3u03zkc',
        },
        autorestart: true
      },

    ],
  };