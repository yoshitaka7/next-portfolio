module.exports = {
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({
      test:/\.md$/,
      use:"rawloader",
    })
    return config
  },
}
