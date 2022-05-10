/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  cacheDirectory: './node_modules/.cache/remix',
  devServerBroadcastDelay: 1000,
  publicPath: '/build/',
  serverBuildDirectory: 'build',
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral'
};
