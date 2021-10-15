---
layout: default
nav_order: 3
comments: false 
title: '큐'
parent: '자료구조'
seo_title : '자바스크립트_자료구조_큐'
seo_description : '큐의 개념과 자바스크립트로 구현하는 큐 자료구조'
seo_keywords : '자바스크립트,큐,js,queue'
---

# 큐
{: .fw-700 .fs-7 }

> **먼저 집어 넣은 데이터가 먼저 나오는 FIFO(First In First Out) 구조** 로 저장하는 형식을 말한다. 먼저 줄을 선 사람이 먼저 나갈 수 있는 상황을 연상하면 된다. [스택](./stack.md)과 반대되는 개념.

## 선형 vs 환형 큐

- 선형 큐: 막대 모양으로 된 큐로 크기가 제한되어 있고 빈 공간을 사용하려면 모든 자료를 꺼내거나 자료를 한 칸씩 옮겨야 한다는 단점이 있다.
- 환(원)형 큐: 선행 큐의 문제점(배열로 큐를 선언할 시 마지막 배열에 도달 후 실제로는 데이터 공간이 남아있지만 오버플로우가 발생)을 보완한 것으로 front가 큐의 끝에 닿으면 큐의 맨 앞으로 자료를 보내 원형으로 연결하는 방식
- 링크드 큐: 링크드 리스트로 구현한 큐로 환형으로 만들지 않아도 삽입과 삭제가 자유로움

## JavaScript의 Queue

```js
class Queue {
    constructor () {
        this.arr = [];
        this.front = 0;
        this.rear = 0;
    }
    put(el) {
        this.arr.push(el);
        this.rear++;
    }
    get() {
        this.rear--;
        return this.arr.shift();
    }
}

const myQueue = new Queue();
myQueue.put(1); // [1]
myQueue.put(2); // [1, 2]
myQueue.get();  // 1
myQueue.put(3); // [2, 3]
myQueue.rear;   // 데이터를 put할 수 있는 위치 2
myQueue.front;  // 데이터를 get할 수 있는 위치 0
```

### 출처

- [wikipedia](https://ko.wikipedia.org/wiki/%ED%81%90_(%EC%9E%90%EB%A3%8C_%EA%B5%AC%EC%A1%B0))