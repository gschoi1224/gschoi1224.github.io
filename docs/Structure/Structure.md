---
layout: default
nav_order: 6
comments: false 
title: '자료구조'
has_children: true
---

# 자료구조
{: .fw-700 .fs-7 }


## 자료 구조 작업별 복잡도

| 자료 구조                 | 접근       | 검색      | 삽입       | 삭제      | 비고       |
| ------------------------ | :-------: | :-------: | :-------: | :-------: | :-------- |
| [**배열**](./array.md)                  | 1         | n         | n         | n         |           |
| [**스택** ](./stack.md)                 | n         | n         | 1         | 1         |           |
| [**큐** ](./queue.md)                   | n         | n         | 1         | 1         |           |
| **연결 리스트**            | n         | n         | 1         | 1         |           |
| **해시 테이블**            | -         | n         | n         | n         | 완벽한 해시 함수의 경우 O(1) |
| **이진 탐색 트리**          | n         | n         | n         | n         | 균형 트리의 경우 O(log(n)) |
| **B-트리**                | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black 트리**        | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL 트리**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**          | -         | 1         | 1         | -         | 거짓 양성이 탐색 중 발생 가능 |

### 출처

- [wekipedia](https://ko.wikipedia.org/wiki/%EC%9E%90%EB%A3%8C_%EA%B5%AC%EC%A1%B0)