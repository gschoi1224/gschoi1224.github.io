---
layout: default
nav_order: 1
comments: false 
title: '배열'
has_children: true
parent: '자료구조'
---

# 배열
{: .fw-700 .fs-7 }

> 배열은 번호(인덱스)와 번호에 대응하는 데이터들로 이루어진 자료 구조를 나타낸다. 

## JavaScript의 배열(Array)

> 프로토타입으로 탐색과 변형 작업을 수행하는 메서드를 갖는 리스트와 비슷한 객체로 배열의 길이와 요소의 자료형은 고정되어 있지 않음.

### 배열 만들기

```js
const arr1 = ['a', 'b', 'c'];
const arr2 = new Array('a', 'b', 'c');
const arr3 = new Array(3);
console.log(arr3);  // [Empty, Empty, Empty]
arr3[0] = 'a';
arr3[1] = 'b';
arr3[2] = 'c';
console.log(arr3);  // ['a', 'b', 'c']
arr3[3] = 'd';
console.log(arr3);  // ['a', 'b', 'c', 'd']
```

### 배열의 요소에 접근하기

```js
const a = arr1[0];
console.log(a); // 'a'
const b = arr1.at(1);
console.log(b); // 'b'
```

### 배열의 항목들을 순회하며 처리하기

```js
arr1.forEach((item, index, array) => {
    console.log(item);  // 현재 순회하는 요소의 값
    console.log(index); // 현재 순회하는 요소의 인덱스 
    console.log(array); // 원본 객체 ['a', 'b', 'c']
});
```

### 배열에 항목 삽입/삭제하기

```js
// 배열의 맨 끝에 값 삽입
arr1.push('d');
console.log(arr1);  // ['a', 'b', 'c', 'd']
// 맨 끝 값 삭제
const d = arr1.pop();
console.log(d, arr1);   // 'd', ['a', 'b', 'c']
// 배열의 맨 앞에 값 삽입
arr1.unshift('z');
console.log(arr1);  // ['z', 'a', 'b', 'c']
// 맨 처음 값 삭제
const z = arr1.shift();
console.log(z, arr1);   // 'z', ['a', 'b', 'c']
```

### 배열 안 항목의 인덱스 찾기

```js
const aIndex = arr1.indexOf('a');
console.log(aIndex) // 0
```

### 배열 자르기

```js
const slicedArr1 = arr1.slice(1, 2)   // 1번째 인덱스 값부터 2번째 인덱스 값까지 자름(포함X)
console.log(slicedArr1, arr1);  // ['b'],  ['a', 'b', 'c']  원본 배열은 건드리지 않음
// slice는 인자를 아무것도 넣지 않으면 배열 사본을 만들 수 있음!
const copyArr1 = arr1.slice();
console.log(copyArr1, arr1);    // ['a', 'b', 'c'], ['a', 'b', 'c']
const splicedArr1 = copyArr1.splice(1, 2)   // 1번째 인덱스 값부터 2개 요소 삭제
console.log(splicedArr1, copyArr1); // ['b', 'c'], ['a'] 원본 객체에 영향을 줌!
```

### 매치 결과를 이용한 배열 생성

```js
const regExp = /[a-z]/gi;
const regArr = 'a0B3F15DZ3'.match(regExp);
console.log(regArr);    //  ['a', 'B', 'F', 'D', 'Z']
```

### Array.from(arrayLike[, mapFn])

> 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 객체를 만든다.

```js
console.log(Array.from('abc')); //  ['a', 'b', 'c']
console.log(Array.from([1, 2, 3], (x, i) => x + i));    // [1, 3, 5];
```

### Array.of(element0 [, element1[, elementN]])

```js
Array.of(1) // [1]
Array.of(1,3,5) // [1, 3, 5]
```


### 출처

- [wekipedia](https://ko.wikipedia.org/wiki/배열)
- [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)