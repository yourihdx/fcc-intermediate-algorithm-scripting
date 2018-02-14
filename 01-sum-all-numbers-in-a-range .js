function sumAll(arr) {

	var min = Math.min(...arr);
	var max = Math.max(...arr);
	var new_arr = [min];

	for (var i = 0; i < max-min; i++) {
	 	new_arr[i+1] = new_arr[i] + 1;
	 	}

	console.log("Новый массив: ", new_arr); 

	return new_arr.reduce(function(sum, current){
		return sum + current;
	}, 0);	

}

console.log(sumAll([1, 10]));