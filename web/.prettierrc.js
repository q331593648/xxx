//优先级高于本地格式化插件
module.exports = {
  printWidth: 120,
  singleQuote: true, // 强制使用单引号
  vueIndentScriptAndStyle: true, // vue文件的script标签和Style标签下的内容需要缩进
  semi: false, // 语句末尾不使用分号
  quoteProps: 'consistent' // 如果对象中至少有一个属性需要用引号引起来，就把所有属性用引号引起来
}
