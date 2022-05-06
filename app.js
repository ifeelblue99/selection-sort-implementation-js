const data = [555, 4, 33, 2, 10]


function selectionSort(arr) {
  if(arr.length < 2) return arr
  
  sorted = []
  while (arr.length) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
      min = Math.min(arr[i], min)
    }
    const temp = arr[0]
    const indexOfMin = arr.indexOf(min)
    
    arr[0] = arr[indexOfMin]
    arr[indexOfMin] = temp
    
    sorted.push(arr.shift())
  }
  return sorted
}

console.log("sorted.", selectionSort(data));
