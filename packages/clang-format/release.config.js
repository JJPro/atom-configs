/* eslint-disable */

module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/apm',
    ['@semantic-release/git', { message: 'chore(release): ${nextRelease.version} [skip ci]' }],
  ],
};
