function insertionSort(arr) {
    for (let i = 1 ; i < arr.length; i++) {
        let j = i - 1;
        key = arr[i];
        while (arr[j] > key && j >= 0) {
            arr[j + 1] = arr[j]
            j--;
        }
        console.log(`arr : ${arr}, key : ${key}, arr[${j+1}]=${arr[j + 1]}`);
        arr[j + 1] = key;
    }
    return arr;
}

insertionSort([5, 3, 2, 4, 1]);