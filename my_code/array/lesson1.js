// LeetCode
// 17. 电话号码的字母组合
// 给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合。
//
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 示例:
//   输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

export default (digits) => {
  // 如果字符串为空，返回空数组
  if (!digits) {
    return []
  }
  // 做一个映射
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 把传入的字符串分割成数组
  let num = digits.split('')
  let code = []
  // 得到映射后的数组
  num.forEach(item => {
    code.push(map[parseInt(item)])
  })
  // 数组长度为1时，直接返回数组第一个元素--字符串的分割--变成单个字符的数组
  if (code.length === 1) {
    return code[0].split('')
  }
  let letterCombination = (arr) => {
    let tmp = []
    // 对数组的前两个字符串进行组合
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        tmp.push(`${arr[0][i]} + ${arr[1][j]}`)
      }
    }
    // 组合后的字符串插入到数组中，并删除刚才的两个数组
    arr.splice(0, 2, tmp)
    // 判断数组长度大于1.如果大于1.继续进行组合
    if (arr.length > 1) {
      letterCombination(arr)
    }
    return arr[0]
  }
  return letterCombination(code)
}
