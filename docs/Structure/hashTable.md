---
layout: default
nav_order: 5
comments: false 
title: '해시 테이블'
parent: '자료구조'
---

# 해시 테이블
{: .fw-700 .fs-7 }

> key: value의 구조로 데이터를 저장하는 자료구조이다.   

![hashTable](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/220px-Hash_table_3_1_1_0_1_0_0_SP.svg.png)

## 특징

- O(1)의 빠른 속도로 데이터 검색이 가능하다.
- 작은 메모리 자원으로 많은 데이터를 효율적으로 관리할 수 있다.

## 해시값의 충돌

> 해시는 데이터가 같으면 해시값도 항상 같고 다른 데이터도 동일한 해시값을 가질 수 있어 충돌이 발생한다.

### 분리 연결법(Separate Chaining)

> Key의 index가 가리키는 자료구조를 Linked List로 하는 방식으로 충돌이 발생하면 그 index가 가리키는 LinkedList에 노드를 추가한다.

- Linked List 대신 트리를 사용하면 성능 개선이 가능하다.
- 선형 탐색을 해서 데이터 검색이 느리다.
- 해시 테이블의 확장이 필요없고 손쉽게 삭제가 가능하다.
- 데이터의 수가 많아지면 chaining 되는 데이터가 많아져 효율이 감소한다.

### 개방 주소법(Open Addressing)

> 충돌이 발생하면 해시 함수로 얻은 주소가 아닌 다른 주소 공간에 데이터를 저장하는 방식이다.

#### 종류

- 선형 탐사: 현재 수조에서 고정 크기만큼 다음 주소로 이동해 데이터를 저장 
- 제곱 탐사: 고정 크기만큼 이동하지 않고 제곱수로 이동 크기를 늘려가며 저장
- 이중 해싱: 충돌이 발생하면 한번 더 해시 함수를 적용하는 방식
- 재해싱: 해시 테이블의 크기를 늘린 후 모든 데이터를 다시 해싱하는 방식
- 삭제시 문제가 발생할 수 있다.



### 출처

- [wekipedia](https://ko.wikipedia.org/wiki/해시_테이블)