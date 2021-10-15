---
layout: default
nav_order: 1
comments: false 
title: '정렬'
has_children: true
parent: '알고리즘'
# grand_parent: 'CS'
---

# 정렬
{: .fw-700 .fs-7 }

## 복잡도

| 이름                   | 최적            | 평균                 | 최악                | 메모리     | 동일값 순서유지    | 비고       |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :--------------: | :-------- |
| [**거품 정렬**](./bubble.md)          | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes              |           |
| [**삽입 정렬**](./insertion.md)          | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes              |           |
| [**선택 정렬**](./selection.md)          | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No               |           |
| **힙 정렬**            | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No               |           |
| **병합 정렬**          | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes              |           |
| **퀵 정렬**            | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No               | 퀵 정렬은 보통 제자리(in-place)로 O(log(n)) 스택공간으로 수행됩니다. |
| **셸 정렬**            | n&nbsp;log(n)   | 간격 순서에 영향을 받습니다.   | n&nbsp;(log(n))<sup>2</sup>  | 1         | No         |           |
| **계수 정렬**          | n + r           | n + r               | n + r               | n + r     | Yes              | r - 배열내 가장 큰 수 |
| **기수 정렬**          | n * k           | n * k               | n * k               | n + k     | Yes              | k - 키값의 최대 길이 |

## 출처
- [wikipedia](https://ko.wikipedia.org/wiki/%EC%A0%95%EB%A0%AC_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)