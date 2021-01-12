/**
 * 解析 UTF16 编码的字符串
 *
 * references:
 * - https://stackoverflow.com/a/37585756/8335317
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_notation
 *
 * @param escaped UTF16 编码的字符串
 */
export function unescapeUTF16(escaped: string) {
  return escaped.replace(/\\u([0-9a-fA-F]{4})/g, (_, cc) => {
    return String.fromCharCode(Number('0x' + cc));
  });
}
