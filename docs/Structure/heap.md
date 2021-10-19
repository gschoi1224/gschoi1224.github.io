---
layout: default
nav_order: 8
comments: false 
title: '힙'
parent: '자료구조'
---

# 힙(Heap)
{: .fw-700 .fs-7 }

![heap](/assets/images/Max-Heap.svg.png){: width="200"}

- 힙은 최댓값 및 최솟값을 찾아내는 연산을 빠르게 하기 위해 고안된 완전이진트리를 기본으로 한 자료구조
- A가 B의 부모 노드이면, A의 키값과 B의 키값 사이에는 대소관계가 성립한다.  
- 부모노드의 키값이 자식노드의 키값보다 항상 큰 힙을 **최대 힙**, 부모노드의 키값이 자식노드의 키값보다 항상 작은 힙을 **최소 힙**이라고 부른다.
- 키값의 대소관계는 오로지 부모노드와 자식노드 간에만 성립하며, 특히 형재 사이에는 대소관계가 정해지지 않는다.
- 가장 높은(혹은 가장 낮은) 우선순위를 가지는 노드가 항상 뿌리노드에 오게 되는 특징이 있다.

## JavaScript의 힙

- 배열로 구현(특정 인덱스에 바로 접근하기 용이해서)
- 각 노드는 대응되는 배열의 인덱스가 정해져 있다.
- 왼쪽 자식은 부모 노드 인덱스의 x2, 오른쪽 자식 인덱스는 부모 노드 인덱스의 x2 + 1

```js
class MinHeap {
    constructor () {
        this.array = [];
    }
    getLeftChildIndex(index) {
        return index * 2;
    }
    getRightChildIndex(index) {
        return index * 2 + 1;
    }
    getParentIndex(index) {
        return Math.floor(index / 2);
    }
    insertNode(value) {
        // 부모 노드와 삽입 노드를 재귀적으로 비교해 부모 노드가 삽입 노드보다 작을 때까지 위치를 바꿔준다
        if (this.array.length === 0) {
            this.array[1] = value;
        } else {
            this.array.push(value);
            this.shiftUp();
        }
    }
    shiftUp(index = this.array.length - 1) {
        const parentNodeIndex = this.getParentIndex(index);
        const myValue = this.array[index];
        const parentValue = this.array[parentNodeIndex];
        if (parentNodeIndex !== index && myValue < parentValue) {
            [this.array[parentNodeIndex], this.array[index]] = [myValue, parentValue];
            this.shiftUp(parentNodeIndex);
        }
    }
    popNode() {
        const myValue = this.array[1];
        const lastIndex = this.array.length - 1;
        if (lastIndex === 1) {
            this.array = [];
        }
        else if (lastIndex === 0) {
            return null;
        }
        else {
            this.array[1] = this.array.pop();
            this.shiftDown();
        }
        return myValue;
    }
    shiftDown(index = 1) {
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
        const myValue = this.array[index];
        let targetIndex;
        let targetValue;
        if (this.array[leftChildIndex] < this.array[rightChildIndex]) {
            targetValue = this.array[leftChildIndex]
            targetIndex = leftChildIndex;
        } else {
            targetValue = this.array[rightChildIndex];
            targetIndex = rightChildIndex;
        }

        if (targetValue < myValue) {
            [this.array[index], this.array[targetIndex]] = [targetValue, myValue];
            this.shiftDown(targetIndex);
        }
    }
}
const heap = new MinHeap();
heap.insertNode(5);
console.log(heap);  
//          5
heap.insertNode(1);
console.log(heap);  
//          1
//      5
heap.insertNode(2);
console.log(heap);  
//          1
//      5       2
heap.insertNode(4);
console.log(heap);  // 1, 4, 2, 5
//          1
//      4       2
//  5
heap.insertNode(3);
console.log(heap);  
//          1
//      4       2
//    5   3
console.log(heap.popNode());    // 1
console.log(heap);  
//          2
//      4       3
//  5
heap.insertNode(0);
console.log(heap);
console.log(heap.popNode());    // 0
//          2
//      3       4
//  5
console.log(heap);
console.log(heap.popNode());    // 2
console.log(heap.popNode());    // 3
```


### 출처

- [wekipedia](https://ko.wikipedia.org/wiki/힙_(자료_구조))