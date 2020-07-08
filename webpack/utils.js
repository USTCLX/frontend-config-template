const { resolve, join } = require('path');
const { readdirSync, statSync, existsSync } = require('fs');

const getEntries = () => {
    const srcPath = resolve(__dirname, '../src');
    const files = readdirSync(srcPath, { encoding: 'utf-8' });
    return files.reduce((entries, file) => {
        const entryPath = join(srcPath, file, 'index.tsx');
        if (existsSync(entryPath) && statSync(entryPath).isFile()) {
            entries[`${file}/index`] = entryPath;
        }
        return entries;
    }, {});
};

const getHtmlWebpackPluginConfigs = () => {
    const entryNames = Object.keys(getEntries());
    return entryNames.map(entryName => {
        const filename = `${entryName.split('/')[0]}/index.html`;
        return {
            template: resolve(__dirname, '../template/index.html'),
            title: filename,
            filename,
            chunks: [entryName],
        };
    });
};

module.exports = { getEntries, getHtmlWebpackPluginConfigs };
