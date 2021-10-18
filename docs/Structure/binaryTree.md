---
layout: default
nav_order: 6
comments: false 
title: '이진 탐색 트리'
parent: '자료구조'
---

# 이진 탐색 트리(BST: Binary Search Tree)
{: .fw-700 .fs-7 }

> 각각의 노드가 최대 두 개의 자식 노드를 가지는 트리 자료 구조로 값들은 전순서가 있으며 왼쪽 서브트리에는 노드보다 작은 값들이 오른쪽 서브트리에는 노드보다 큰 값들로 이루어져 있다. 이진 탐색의 빠른 탐색 시간(O(logN))과 삽입, 삭제는 불가능한 점 + 연결 리스트의 빠른 삽입 삭제(O(1))과 느린 탐색 시간의 장점을 모두 얻기 위해 고안된 것

## 검색

1. 검색하고자 하는 값을 루트 노드와 비교해 일치하면 루트노드 리턴
2. 불일치하고 루트노드의 값보다 작을 경우 왼쪽 서브트리에서 재귀적으로 검색
3. 불일치하고 루트노드의 값보다 클 경우 오른쪽 서브트리에서 재귀적으로 검색

## 삽입

1. 삽입하기 전 검색부터 수행
2. 일치하는 노드가 없으면 마지막 노드에서 키와 노드의 크기를 비교해 오른쪽이나 왼쪽에 새로운 노드 삽입

## 삭제

1. 자식노드가 없는 노드라면 그냥 삭제
2. 자식노드가 한개라면 해당 노드를 삭제하고 그 자식 노드를 해당 노드의 위치에 대입
3. 자식노드가 두개라면 삭제하고자 하는 노드의 값을 해당 노드의 왼쪽 서브트리에서 가장 큰값으로 변경하거나 오른쪽 서브트리에서 가장 작은 값으로 변경한 뒤 삭제

## 순회 방법

- 전위 순회(Pre Order): 루트 - 왼쪽 - 오른쪽
- 중위 순회(In Order): 왼쪽 - 루트 - 오른쪽
- 후위 순회(Post Order): 왼쪽 - 오른쪽 - 루트

## JavaScript의 이진 트리

```js
class Node {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinaryTree {
    constructor() {
        this.rootNode = null;
    }

    // 새로운 노드 삽입
    addNode(data) {
        const node = new Node(data);
        if (!this.rootNode) {
            this.rootNode = node;
        } else {
            let head = this.rootNode;
            while (head) {
                if (head.data > data) {
                    if (!head.leftChild) {
                        head.leftChild = node;
                        break;
                    } else {
                        head = head.leftChild;
                    }
                } else {
                    if (!head.rightChild) {
                        head.rightChild = node;
                        break;
                    } else {
                        head = head.rightChild;
                    }
                }
            }
        }
    }

    // 삭제
    removeNode(data) {
        let targetNode = this.rootNode;
        let parentOfTargetNode = null;
        while (targetNode.data !== data) {
            parentOfTargetNode = targetNode;
            if (targetNode.data > data) {
                targetNode = targetNode.left;
            } else {
                targetNode = targetNod.right;
            }
            if (!targetNode) {
                return false;
            }
        }
        // 1. 자식노드가 없는 노드라면 그냥 삭제
        if (!targetNode.leftChild && !targetNode.rightChild) {
            if (targetNode == this.rootNode) {
                this.rootNode = null;
            }
            else if (targetNode == parentOfTargetNode.rightChild) {
                parentOfTargetNode.rightChild = null;
            } else {
                parentOfTargetNode.leftChild = null;
            }
        }
        // 2. 자식노드가 한개라면 해당 노드를 삭제하고 그 자식 노드를 해당 노드의 위치에 대입
        else if (!targetNode.leftChild) {
            if (targetNode == this.rootNode) {
                this.rootNode = targetNode.rightChild;
            }
            else if (targetNode == parentOfTargetNode.rightChild) {
                parentOfTargetNode.rightChild = targetNode.rightChild;
            } else {
                parentOfTargetNode.leftChild = targetNode.leftChild;
            }
        }
        else if (!targetNode.rightChild) {
            if (targetNode == this.rootNode) {
                this.rootNode = targetNode.leftChild;
            } else if (targetNode == parentOfTargetNode.rightChild) {
                parentOfTargetNode.rightChild = targetNode.rightChild;
            } else {
                parentOfTargetNode.leftChild = targetNode.leftChild;
            }
        }

        // 3. 자식노드가 두개라면 삭제하고자 하는 노드의 값을 해당 노드의 왼쪽 서브트리에서 가장 큰값으로 변경하거나 오른쪽 서브트리에서 가장 작은 값으로 변경한 뒤 삭제
        else {
            let parentOfReplaceNode = targetNode;
            let replaceNode = parentOfReplaceNode.rightChild;

            while (replaceNode.leftChild) {
                parentOfReplaceNode = replaceNode;
                replaceNode = replaceNode.leftChild;
            }
            if (replaceNode !== targetNode.leftChild) {
                parentOfReplaceNode.leftChild = replaceNode.rightChild;
                replaceNode.rightChild = targetNode.rightChild;
            }

            if (targetNode == this.rootNode) {
                this.rootNode = replaceNode;
            }
            else if (targetNode == parentOfTargetNode.rightChild) {
                parentOfTargetNode.rightChild = replaceNode;
            }
            else {
                parentOfTargetNode.leftChild = replaceNode;
            }
            replaceNode.leftChild = targetNode.leftChild;
        }
    }
    // 전위 순회(Pre Order): 루트 - 왼쪽 - 오른쪽
    preOrder(root, depth, prefix = '') {
        if (root) {
            let str = '';
            for (let i = 0 ; i < depth; i++) {
                str += '+';
            }
            console.log(str + prefix, root.data);
            this.preOrder(root.leftChild, depth + 1, '왼');
            this.preOrder(root.rightChild, depth + 1, '오');
        }
    }
    // 중위 순회(In Order): 왼쪽 - 루트 - 오른쪽
    inOrder(root, depth, prefix='') {
        if (root) {
            this.inOrder(root.leftChild, depth + 1, '왼');
            let str = '';
            for (let i = 0 ; i < depth; i++) {
                str += '+';
            }
            console.log(str + prefix, root.data);
            this.inOrder(root.rightChild, depth + 1, '오');
        }
    }
    // 후위 순회(Post Order): 왼쪽 - 오른쪽 - 루트
    postOrder(root, depth, prefix='') {
        if (root) {
            this.inOrder(root.leftChild, depth + 1, '왼');
            this.inOrder(root.rightChild, depth + 1, '오');
            let str = '';
            for (let i = 0 ; i < depth; i++) {
                str += '+';
            }
            console.log(str + prefix, root.data);
        }
    }
}

const tree = new BinaryTree();
tree.addNode(5);    // 5
tree.addNode(2);    
//          5
//      2
tree.addNode(1);
//          5
//      2
//  1
tree.addNode(7);
//              5
//      2               7
//  1
tree.addNode(4);
//              5
//      2               7
//  1       4
tree.addNode(6);
//              5
//      2               7
//  1       4       6
tree.addNode(3);
//              5
//      2               7
//  1       4       6
//        3
console.log('~~ 전위 순회(Pre Order): 루트 - 왼쪽 - 오른쪽 ~~');
tree.preOrder(tree.rootNode, 0);    // 5 - 2 - 1 - 4 - 3 - 7 - 6
console.log('~~ 중위 순회(In Order): 왼쪽 - 루트 - 오른쪽 ~~');
tree.inOrder(tree.rootNode, 0); // 1 - 2 - 3 - 4 - 6 - 7 - 5
console.log('~~ 후위 순회(Post Order): 왼쪽 - 오른쪽 - 루트 ~~')
tree.postOrder(tree.rootNode, 0);   // 1 - 2 - 3 - 4 - 5 - 6 - 7
```

### 출처

- [wekipedia](https://ko.wikipedia.org/wiki/이진_탐색_트리)