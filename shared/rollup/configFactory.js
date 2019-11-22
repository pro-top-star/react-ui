const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const postcss = require('rollup-plugin-postcss');
const path = require('path');
const fs = require('fs');
const PATHS = require('../../config/paths');
const { highlightLog } = require('../utils');
const { asyncCopyTo } = require('../../scripts/utils');

const rollupConfigFactory = (pkgName, externals = []) => {
  const LIB_BASE_PATH = path.resolve(PATHS.packages, pkgName, 'src', 'lib');

  const allLibFiles = fs.readdirSync(LIB_BASE_PATH).filter((file) => fs.statSync(`${LIB_BASE_PATH}/${file}`).isFile());

  const plugins = [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    }),
    babel({
      presets: ['babel-preset-react-app/prod'],
      plugins: ['@babel/plugin-proposal-nullish-coalescing-operator'],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    postcss()
  ];

  const pkg = require(path.resolve(PATHS.packages, pkgName, 'package.json'));
  const EXTERNAL_MODULE_REGEX = new RegExp(
    `${Object.keys(pkg.dependencies)
      .concat(externals)
      .concat(pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : [])
      .map((item) => item.replace('/', '/'))
      .join('|')}|react$|react-jss|react-dom$`
  );

  highlightLog(`Build lib folder for ${pkgName}`);

  console.info('Copy index file');
  asyncCopyTo(
    path.resolve(PATHS.packages, pkgName, 'src', 'index.ts'),
    path.resolve(PATHS.build, 'node_modules', pkgName, `index.esm.js`)
  );

  return allLibFiles.map((file) => ({
    input: `${LIB_BASE_PATH}/${file}`,
    external: (id) => EXTERNAL_MODULE_REGEX.test(id),
    output: [
      {
        file: path.resolve(PATHS.build, 'node_modules', pkgName, 'lib', file.replace(/\.ts$/, '.js')),
        format: 'es',
        sourcemap: true
      }
    ],
    plugins
  }));
};

module.exports = rollupConfigFactory;
