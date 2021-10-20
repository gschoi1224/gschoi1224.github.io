class MaxHeap {
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
        if (parentNodeIndex !== index && myValue > parentValue) {
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
        if (this.array[leftChildIndex] > this.array[rightChildIndex]) {
            targetValue = this.array[leftChildIndex]
            targetIndex = leftChildIndex;
        } else {
            targetValue = this.array[rightChildIndex];
            targetIndex = rightChildIndex;
        }

        if (targetValue > myValue) {
            [this.array[index], this.array[targetIndex]] = [targetValue, myValue];
            this.shiftDown(targetIndex);
        }
    }
}
const heap = new MaxHeap();
heap.insertNode(6)
heap.insertNode(5)
heap.insertNode(3)
heap.insertNode(1)
heap.insertNode(8)
heap.insertNode(7)
heap.insertNode(2)
heap.insertNode(4)
console.log(heap);  // 8, 6, 7, 4, 5, 3, 2, 1
