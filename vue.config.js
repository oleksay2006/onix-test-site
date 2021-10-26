// module.exports = {
//     publicPath: '/vue3-internatur/',
//   };
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue3-internatur/'
      : '/'
  }