---
layout: default
nav_order: 1
comments: false 
title: '버블정렬'
has_children: true
parent: '정렬'
grand_parent: '알고리즘'
---

# 버블정렬
{: .fw-700 .fs-7 }

> 거품 정렬 또는 버블 정렬은 두 인접한 원소를 검사하여 정렬하는 방법이다. 시간 복잡도가 상당히 느리지만, 코드가 단순하기 때문에 자주 사용된다. 원소의 이동이 거품이 수면으로 올라오는 듯한 모습을 보이기 때문에 지어진 이름이다. 양방향으로 번갈아 수행하면 칵테일 정렬이 된다.

## JavaScript 거품 정렬 구현
```js
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

bubbleSorting([5, 3, 2, 4, 1]);
```


## 동작 순서

|      i      |      j      |     arr[j]     |     j-1     |     arr[j-1]     |         arr         |비고|
|:------------|:------------|:---------------|:------------|:-----------------|:--------------------|:-|
|      0      |      1      |       3        |      0      |        5         | [`3`, `5`, 4, 2, 1] | |
|      0      |      2      |       4        |      1      |        5         | [3, `4`, `5`, 2, 1] | |
|      0      |      3      |       2        |      2      |        5         | [3, 4, `2`, `5`, 1] | |
|      0      |      4      |       2        |      3      |        5         | [3, 4, 2, `1`, `5`] | 제일 큰 수 5 고정 |


### 출처
- [wikipedia](https://ko.wikipedia.org/wiki/%EA%B1%B0%ED%92%88_%EC%A0%95%EB%A0%AC)