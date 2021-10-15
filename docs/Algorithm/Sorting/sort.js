function selectionSort(arr) {
    for (let i = 0 ; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1 ; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        console.log(i, minIndex, arr);
    }
    return arr;
}

selectionSort([5, 3, 2, 4, 1]);