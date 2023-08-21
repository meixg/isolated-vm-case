const path = require('path');
const {loadFilesFromDirs} = require('@baidu/isolate-worker/src/bootstrap/file-scanner');
const {getCodeSource} = require('@baidu/isolate-worker/src/bootstrap/code-loader');
const {createSnapshot} = require('@baidu/isolate-worker/src/bootstrap/create-snapshot');

const FILE_DIRS = [
    'node_modules/marked/package.json',
    'node_modules/marked/lib',
    'node_modules/highlight.js/package.json',
    'node_modules/highlight.js/lib',
    'src/sample',
];
const ROOT_PATH = path.resolve(__dirname, '../');

(async () => {
    const files = await loadFilesFromDirs(FILE_DIRS, ROOT_PATH);
    const entry = path.join(ROOT_PATH, 'src/sample/entry.js');
    const filesArr = files.map(filename => ({filename}));
    const codes = await getCodeSource(filesArr, entry);
    const snapshot = await createSnapshot(codes);
})();
