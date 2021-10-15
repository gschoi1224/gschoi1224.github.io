function bubbleSorting(arr) {
    for (let i = 0 ; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];    // 스왑
            }
            console.log(i, j, arr[j], arr[j - 1], arr);
        }
    }
    return arr;
}

console.log(bubbleSorting([5,3,4,2,1])); 