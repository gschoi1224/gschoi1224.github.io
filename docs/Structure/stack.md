---
layout: default
nav_order: 2
comments: false 
title: '스택'
has_children: true
parent: '자료구조'
---

# 스택
{: .fw-700 .fs-7 }

> 제한적으로 접근할 수 있는 나열 구조로 접근 방법은 언제나 목록의 끝에서만 일어난다. 한 쪽 끝에서만 자료를 넣거나 뺄 수 있는 선형 구조로 되어 있다. 자료를 밀어 넣는 것을 푸쉬(push), 자료를 꺼내는 팝(pop)이라고 표현한다. **나중에 넣은 값이 먼저 나오는 LIFO 구조**이다.

## JavaScript의 스택

```js
class Stack {
    constructor () {
        this.arr = [];
    }
    push(el) {
        this.arr.push(el);
    }
    pop() {
        if (this.empty()) {
            return 'underflow'
        }
        return this.arr.pop();
    }
    top() {
        if (this.empty()) {
            return 'underflow'
        }
        return this.arr[this.arr.length - 1];
    }
    empty() {
        return !this.arr.length;
    }
}
const boxes = new Stack();
boxes.push('box1'); // ['box1']
boxes.push('box2'); // ['box1', 'box2']
boxes.pop();    // box2
boxes.push('box3'); // ['box1', 'box3']
boxes.top();    // box3
boxes.empty();  // false
```

### 출처

- [wekipedia](https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%83%9D)