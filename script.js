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
		sortedArr.sort((a,b)=>a-b);
	}
	return cost;
// return the min cost
  
}

module.exports=mincost;
