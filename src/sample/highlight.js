/**
 * 代码高亮插件函数
 * @param {object} hljs 高亮插件
 * @param {string} str 文本内容
 * @param {string} lang 语言类型
 * @returns 处理后的代码块html字符串
 */
function highlight(hljs, str, lang) {
    try {
        const hljsCode = hljs.highlightAuto(str);
    } catch (err) {
        return '';
    }
}

module.exports = highlight;