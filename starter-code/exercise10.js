//10.1.1

var sayHello = function(name){
	return "Hello " + name + ".";
}

var areBothEven = function(a, b){
	return a%2 === 0 && b%2 === 0;
}

var hotOrNot = function(temp){
	if (temp>75){
		return "Hot";
	} else {
		return "not hot";
	}
}

var threeIfNull = function(num){
	if (num===null) {
		return 3;
	} else {
		return num;
	}
}

var greatest =function(a, b, c, d){
	greatest = a
	if (greatest < b){
		greatest = b;
	}
	if (greatest <c ){
		greatest = c;
	}
		if (greatest <d ){
		greatest = d;
	}
	return greatest;
}

//10.2.1

var fizzbuzz = function(num) {
	for (var i = 1; i <= num; i++) {
		if (num % 3 === 0 && num % 5 === 0){
			result = "fizzbuzz";
		} else if (num % 5 === 0) {
			result = "buzz";
		} else if (num % 3 === 0) {
			result = "fizz";
		} else result = num
	console.log(result);
	}
}