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