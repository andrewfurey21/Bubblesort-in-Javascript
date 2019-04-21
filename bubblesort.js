//Code: Andrew Furey


//Algorithm
function BubbleSort(arr){
	let swap = 1;
	while (swap != 0){
		swap = 0;
		for (let i = 0; i < arr.length - 1; i++){
			if (arr[i] > arr[i+1]){
				let temp = arr[i]
				arr[i] = arr[i+1]
				arr[i+1] = temp;
				swap++;
        	}
    	}
    }

}

//Random array 
let a = [73, 288, 196, 4, 56, 12, 10, 1]
console.log(a);
BubbleSort(a);
console.log(a)
