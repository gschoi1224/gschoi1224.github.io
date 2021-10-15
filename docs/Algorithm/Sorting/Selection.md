---
layout: default
nav_order: 3
comments: true 
title: '선택정렬'
has_children: true
parent: '정렬'
grand_parent: '알고리즘'
---

# 선택 정렬
{: .fw-700 .fs-7 }

> 선택 정렬은 제자리 정렬(정렬의 대상이 되는 데이터 외에 추가적인 공간이 필요하지 않음) 알고리즘의 하나로, 주어진 리스트 중 최솟값을 찾아 그 값을 맨 앞에 위치한 값과 교체하는(패스) 과정을 반복해 정렬하는 알고리즘이다.

## JavaScript 선택 정렬 구현

```js
function selectionSort(arr) {
    for (let i = 0 ; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1 ; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

selectionSort([5, 3, 2, 4, 1]);
```

## 동작 순서

|   i   |     minIndex     |       arr         |
|:------|:------------|:--------------------|
|   0   |      4      |[`1`, 3, 2, 4, `5`] |
|   1   |      2      |[1, `2`, `3`, 4, 5] |
|   2   |      2      |[1, 3, 2, 4, 5] |
|   3   |      3      |[1, 3, 2, 4, 5] |
|   4   |      4      |[1, 3, 2, 4, 5] |

## 특징

- 알고리즘이 단순하며 사용할 수 있는 메모리가 제한적인 경우에 사용시 성능 상의 이점이 있다.
- 무조건 n<sup>2</sup>의 시간복잡도가 걸리므로 구현은 쉽지만 효율적이지는 않다.

## 다른 정렬 알고리즘과의 비교

<dl>
  <dt>거품 정렬</dt>
  <dd>시간복잡도 n<sup>2</sup>인 정렬 알고리즘 중에 선택 정렬은 버블 정렬보다 항상 우수하다</dd>
  <dt>삽입 정렬</dt>
  <dd>k 번째 반복 이후, 첫 번째 k 요소가 정렬된 순서로 온다는 점에서 유사하지만 선택 정렬은 k+1번째 요소를 찾기 위해 나머지 모든 요소들을 탐색하지만 삽입 정렬은 k+1 번째 요소를 배치하는 데 필요한 만큼의 요소만 탐색하기 때문에 훨씬 효율적이다</dd>
  <dt>합병 정렬</dt>
  <dd>같은 분할 정복 알고리즘을 사용하지만 일반적으로 큰 배열보다 작은 배열에서 선택 정렬이 더 빠르다</dd>
</dl>

### 출처
- [wikipedia](https://ko.wikipedia.org/wiki/선택_정렬)