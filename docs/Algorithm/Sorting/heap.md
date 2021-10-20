---
layout: default
nav_order: 4
comments: false 
title: '힙정렬'
has_children: true
parent: '정렬'
grand_parent: '알고리즘'
---

# 힙 정렬
{: .fw-700 .fs-7 }

![heap](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif)
> [최대 힙](../../Structure/heap.md) 트리나 최소 힙 트리를 구성해 정렬을 하는 방법, 이진 트리를 최대 힙으로 만들기 위해 재구성하는 과정이 트리의 깊이만큼 이루어지므로 O(log n)의 수행시간이 걸리며 일반적인 경우 힙 정렬은 O(n log n)의 시간복잡도를 가진다.

## 알고리즘

1. 완전 이진 트리를 구성한다.
2. 내림차순 정렬을 위해서는 최대 힙, 오름차순 정렬을 위해서는 최소 힙을 구성한다.
3. 가장 큰 수(루트)를 가장 작은 수와 교환한다.
4. 2, 3을 반복한다.


### 출처
- [wikipedia](https://ko.wikipedia.org/wiki/힙_정렬)