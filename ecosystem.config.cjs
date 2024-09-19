module.exports = {
    apps: [
      {
        name: 'vendure-front',
        script: 'npm',
        args: 'run start:cf',
        env: {
          NODE_ENV: 'production',
          // VENDURESHOPAPI
          VENDURE_API_URL: 'https://discobabes.store/shop-api',
          // COOKIESECRET
          COOKIE_SECRET: 'awdbhbjahdbaw',
        },
        autorestart: true
      },

    ],
  };