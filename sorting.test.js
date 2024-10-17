const { bubbleSort, merge, mergeSort } = require("./sorting");

describe("bubbleSort", () => {
  test("sorts [4, 20, 12, 10, 7, 9] to [4, 7, 9, 10, 12, 20]", () => {
    expect(bubbleSort([4, 20, 12, 10, 7, 9])).toEqual([4, 7, 9, 10, 12, 20]);
  });

  test("sorts [0, -10, 7, 4] to [-10, 0, 4, 7]", () => {
    expect(bubbleSort([0, -10, 7, 4])).toEqual([-10, 0, 4, 7]);
  });

  test("sorts an already sorted array [1, 2, 3]", () => {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("returns an empty array when input is []", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  test("sorts a larger array of numbers correctly", () => {
    let nums = [
      4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
      4342, 32,
    ];
    let expected = [
      2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453,
      546, 4342,
    ];
    expect(bubbleSort(nums)).toEqual(expected);
  });
});

describe("merge", () => {
  test("merges [1,3,4,5] and [2,4,6,8] to [1,2,3,4,4,5,6,8]", () => {
    const arr1 = [1, 3, 4, 5];
    const arr2 = [2, 4, 6, 8];
    expect(merge(arr1, arr2)).toEqual([1, 2, 3, 4, 4, 5, 6, 8]);
    expect(arr1).toEqual([1, 3, 4, 5]);
    expect(arr2).toEqual([2, 4, 6, 8]);
  });

  test("merges [-2,-1,0,4,5,6] and [-3,-2,-1,2,3,5,7,8]", () => {
    const arr3 = [-2, -1, 0, 4, 5, 6];
    const arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
    expect(merge(arr3, arr4)).toEqual([
      -3, -2, -2, -1, -1, 0, 2, 3, 4, 5, 5, 6, 7, 8,
    ]);
  });

  test("merges [3,4,5] and [1,2] to [1,2,3,4,5]", () => {
    const arr5 = [3, 4, 5];
    const arr6 = [1, 2];
    expect(merge(arr5, arr6)).toEqual([1, 2, 3, 4, 5]);
  });

  test("merging an empty array with a non-empty one returns the non-empty array", () => {
    expect(merge([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(merge([4, 5, 6], [])).toEqual([4, 5, 6]);
  });

  test("merging two empty arrays returns an empty array", () => {
    expect(merge([], [])).toEqual([]);
  });
});

describe("mergeSort", () => {
  test("sorts [4, 20, 12, 10, 7, 9] to [4, 7, 9, 10, 12, 20]", () => {
    expect(mergeSort([4, 20, 12, 10, 7, 9])).toEqual([4, 7, 9, 10, 12, 20]);
  });

  test("sorts [0, -10, 7, 4] to [-10, 0, 4, 7]", () => {
    expect(mergeSort([0, -10, 7, 4])).toEqual([-10, 0, 4, 7]);
  });

  test("returns the same array when it is already sorted", () => {
    expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("returns an empty array when input is []", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("sorts a large array correctly", () => {
    let nums = [
      4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
      4342, 32,
    ];
    let expected = [
      2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453,
      546, 4342,
    ];
    expect(mergeSort(nums)).toEqual(expected);
  });

  test("handles arrays with a single element", () => {
    expect(mergeSort([1])).toEqual([1]);
  });
});
