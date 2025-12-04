function mincost(arr)
{ 
//write your code here
	let sortedArr = arr.sort();
	let cost = 0;
	while(sortedArr.length>1){
		let firstElement = sortedArr.shift();
		let secondElement = sortedArr.shift();
		let total = firstElement + secondElement;
		cost += total;
		sortedArr.push(total);
		total = 0;
		sortedArr.sort();
	}
	return cost;
// return the min cost
  
}

module.exports=mincost;
