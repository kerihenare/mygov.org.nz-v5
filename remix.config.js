/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['.*'],
  publicPath: '/build/',
  serverBuildDirectory: 'build',
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral'
};
