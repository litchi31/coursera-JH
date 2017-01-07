// var a = "test"
// console.log(a);
// function f(){
// 	console.log(a);
// }
// f();
// console.log("asfassa")

// var company = new Object();
// company.name = "Schneider";
// console.log(company.name)

// var facebook = {
// 	name:"facebook",
// 	CEO:{
// 		firstname: "Mark",
// 		favColor: "blue"
// 	}
// };

// console.log(facebook);

// function Class (name) {
// 	console.log(name);
// 	this.name = name;
// }
// Class.prototype.bark = function () {
// 	// var self = this; 
// 	console.log("my name is " + this.name)
// }

// bear = new Class ("bear");
// bear.bark();
// dog = new Class ("dog");
// dog.bark();
// // console.log

var list = ['yaakov', 'ryan'];



list.greeings = "Hi!";

console.log(list);

for (var name in list) {
	console.log("hello " + list[name]);
}

