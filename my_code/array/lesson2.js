// LeetCode
// 914.卡牌分组
// 给定一副牌，每张牌上都写着一个整数。
// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
// 每组都有X张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的X>= 2时返回true。

export default (arr) => {
  // 存储每张卡牌的总数
  // 修改排序的方式修改为直接统计每个相同字符的数量，思路不变（LeetCode测试用例）
  let group = []
  let tmp = {}
  arr.forEach(item => {
    tmp[item] = tmp[item] ? tmp[item] + 1 : 1
  })
  for (let v of Object.values(tmp)) {
    group.push(v)
  }
  // 此时group已经存放的是每张牌的总数了（数组只遍历一遍，避免了排序和正则的耗时）
  // 求两个数的最大公约数
  let gcd = (a, b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
  while (group.length > 1) {
    let a = group.shift()
    let b = group.shift()
    let v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      group.unshift(v)
    }
  }
  return group.length ? group[0] > 1 : false
}
