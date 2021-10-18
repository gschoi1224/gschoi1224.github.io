---
layout: default
nav_order: 4
comments: false 
title: '링크드 리스트'
parent: '자료구조'
---

# 연결 리스트
{: .fw-700 .fs-7 }

> 연결 리스트, 링크드 리스트(linked list)는 각 노드가 데이터와 포인터를 가지고 한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조이다.

## 특징

- 늘어선 노드의 중간지점에서도 자료의 추가와 삭제가 O(1)의 시간에 가능하다.
- 배열이나 트리 구조와는 달리 특정 위치의 데이터를 검색해 내는데에는 O(n)의 시간이 걸린다.

## 단일 연결 리스트

> 단일 연결 리스트는 각 노드에 자료 공간과 한 개의 포인터 공간이 있고, 각 노드의 포인터는 다음 노드를 가리킨다.

### JavaScript 단일 연결 리스트

```js
class Node {
    constructor(data, pointer) {
        this.data = data;
        this.pointer = pointer;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    addFirst(data) {    // 제일 앞에 원소 삽입
        const node = new Node(data);

        node.pointer = this.head;
        this.head = node;
    }
    addLast(data) { // 제일 뒤에 원소 삽입
        const node = new Node(data);
        let last = this.head;
        while (last.pointer) { // 다음 값이 없는 마지막 노드 주소 알아내기
            last = last.pointer;
        }
        last.pointer = node;
    }
    findNode(data) {
        let node = this.head;
        while (node && node.data !== data) {
            node = node.pointer;
        }
        return node.data === data ? node : null;
    }
    removeFirst() {
        this.head = this.head.pointer;
    }
    removeLast() {
        const node = this.head;
        while(node.pointer.pointer) {
            node = node.pointer;
        }
        node.pointer = null;
    }
    removeNode(data) {
        const findedNode = this.findNode(data);
        // a - b - c 에서 b를 삭제할 때 a의 포인터에 c를 넣어준다
        if (findedNode === this.head) {
            this.head = findedNode.pointer;
        } else if (findedNode) {
            // 바로 전 노드 찾기
            let before = this.head;
            while (before && before.pointer && before.pointer.data !== data) {
                before = before.pointer;
            }
            before.pointer = findedNode.next;
        }
    }
    printNodes() {
        let node = this.head;
        let str = '';
        while(node) {
            str += `${node.data}${node.pointer  ? ' -> ': ''}`;
            node = node.pointer;
        }
        console.log(str);
    }
}
const sll = new SinglyLinkedList();
sll.addFirst(10);
sll.printNodes();   // 10
sll.addLast(30);
sll.printNodes();   // 10 -> 30
sll.addFirst(20);
sll.printNodes();   // 20 -> 10 -> 30
console.log(sll.findNode(10));  // Node { data: 10, pointer: Node { data: 30, pointer: undefined } }
sll.removeNode(20); 
sll.printNodes();   // 10 -> 30
sll.removeNode(30);
sll.printNodes();   // 10
```

## 이중 연결 리스트

> 단일 연결 리스트와 비슷하지만, 포인터 공간이 두 개 있고 각각의 포인터는 앞의 노드와 뒤의 노드를 가리킨다.

### JavaScript 이중 연결 리스트

```js
class Node {
    constructor(data, prev, next) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
    }
    addFirst(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }
    addLast(data) {
        const node = new Node(data);
        let lastNode = this.head;
        if (!lastNode) {
            this.head = node;
        } else {
            while(lastNode.next) {
                lastNode = lastNode.next;
            }
            lastNode.next = node;
            node.prev = lastNode;
        }
    }
    printNodes() {
        let node = this.head;
        let str = '';
        while(node) {
            str += `${node.data}${node.next  ? ' -> ': ''}`;
            node = node.next;
        }
        console.log(str);
    }
    findNode(data) {
        let node = this.head;
        while (node && node.data !== data) {
            node = node.next;
        }
        return node.data === data ? node : null;
    }
    removeFirst() {
        this.head = this.head.next;
    }
    removeLast() {
        let temp = this.head;
        // 마지막 바로 직전 노드 구하기
        while (temp.next.next) {
            temp = temp.next;
        }
        temp.next = null;
    }
    removeNode(data) {
        const findedNode = this.findNode(data);
        // a - b - c 에서 b를 삭제할 때 a의 포인터에 c를 넣어준다
        if (findedNode === this.head) {
            this.head = findedNode.next;
        } else if (findedNode) {
            // 바로 전 노드 찾기
            let before = this.head;
            while (before && before.next && before.next.data !== data) {
                before = before.next;
            }
            before.next = findedNode.next;
            findedNode.prev = before;
        }
    }
}
const dll = new DoublyLinkedList();
dll.addFirst(30);
dll.printNodes();   // 30
dll.addLast(10);
dll.printNodes();   // 30 -> 10
dll.addFirst(20);
dll.addLast(50);
dll.addLast(70);
dll.printNodes();   // 20 -> 30 -> 10 -> 50 -> 70
dll.removeLast();
dll.printNodes();   // 20 -> 30 -> 10 -> 50
dll.removeFirst();
dll.printNodes();   // 30 -> 10 -> 50
dll.removeNode(50);
dll.printNodes();   // 30 -> 10
```


### 출처

- [wekipedia](https://ko.wikipedia.org/wiki/연결_리스트)