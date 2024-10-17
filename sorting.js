function bubbleSort(arr) {
  // outer loop through array
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    // inner loop for each item
    for (let j = 0; j < arr.length; j++) {
      // if current index value is higher than next value - swap the values
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    // if no swapping occurs - stop code from execution
    if (!swapped) break;
  }
  // return sorted array
  return arr;
}

function merge(arr1, arr2) {
  // out array
  const result = [];
  // looping of first array (arr1)
  let i = 0;
  // looping of second array (arr2)
  let j = 0;
  // comparison of values from both arrays, if value from arr1 is less than value from  arr2 - push the value into out array
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

// recursive function
function mergeSort(arr) {
  // if there is no values or 1 in array - return that array
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2); // find middle of array
  const left = mergeSort(arr.slice(0, mid)); // split the values from the middle to the left side into one array
  const right = mergeSort(arr.slice(mid)); // put remaining values from the middle to the right into another array
  return merge(left, right); // helper function which put together two sorted arrays
}

module.exports = { bubbleSort, merge, mergeSort };
