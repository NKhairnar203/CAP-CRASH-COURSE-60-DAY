// Write a custom function that has the same behavior of inbuilt Array Includes Function

// Write a custom function that has the same behavior of inbuilt Array Includes Function

	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	function arrIncludes(num) {
			for (let i = 0; i < arr.length; i++) {
					if (arr[i] === num) {
							return true
					}
			}
			return false
	}

	let ans = arrIncludes(10);
	console.log(ans)