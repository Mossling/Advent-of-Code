md5 = require('js-md5')

var input = "yzbqklnj"
var num = 0
var result = ''

while (!result.startsWith('000000')){
	result = md5(input + ++num)
}

console.log(result)
console.log(num)
