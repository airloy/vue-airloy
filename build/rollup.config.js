/**
 * Created by Layman <anysome@gmail.com> (http://github.com/anysome) on 16/10/18.
 */

const version = process.env.VERSION || require('../package.json').version;

module.exports = {
  entry: 'src/index.js',
  dest: 'plugin.js',
  format: 'umd',
  moduleName: 'vue_airloy',
  plugins: [],
  banner:
    `/**
 * vue_airloy v${version}
 * (c) ${new Date().getFullYear()} Layman
 * @license MIT
 */`
};
