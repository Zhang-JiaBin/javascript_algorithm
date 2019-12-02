// LeetCode
// 696. 计数二进制子串
// 给定一个字符串s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
// 重复出现的子串要计算它们出现的次数。
// 示例 1 :
// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
// 请注意，一些重复出现的子串要计算它们出现的次数。
// 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。

export default (str) => {
  let number = 0
  // 把字符串切割成['00', '11', '00', '11']这样的数组
  const arr = str.match(/0+|1+/g)

  for (let i = 0, len = arr.length; i < len - 1; i++) {
    // 相邻比较，长度更短的则为这一组的出现次数
    number += Math.min(arr[i].length, arr[i + 1].length)
  }
  return number
}
