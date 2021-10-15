---
layout: default
nav_order: 4
comments: true 
title: 'interface와 type'
parent: 'Typescript'
---

# interface와 type
## interface
- 변수, 함수, 클래스에 사용할 수 있음
- ES6는 지원하지 않지만 Typescript는 지원함
- 변수의 타입으로 사용할 수 있음
```ts
interface IPerson {
    age : number;
    name: string;
}
const person: IPerson = { age : 20, name: 'gildong' }
```
- 함수의 파라미터의 타입을 선언할 수 있음
```ts
interface IPerson {
    age : number;
    name: string;
}
let persons : IPerson[] = [];
function setPerson(person: IPerson[]) {
    persons = person;
}
```
- 함수의 타입으로 사용할 수 있음
```ts
interface IMultiply = {
    (height : number, width : number) : number;
}
function multiply:IMultiply = (height: number, width: number) {
    return height * width;
}
console.log(multiply(5, 2))   // 10
```
- 클래스에서 implements 뒤에 인터페이스를 선언한다면 지정된 인터페이스를 반드시 구현하여야 함
```ts
interface IPerson {
    age : number;
    name: string;
    introduce() : string;
}
class Person implements IPerson {
    constructor (
        public age : number,
        public name : string,
    ) {
        this.age = age;
        this.name = name;
    }
    introduce() {
        return `제 이름은 ${this.name}이고 나이는 ${this.age}입니다!`;
    }
}
const person = new Person (20, 'gildong');
```
- 프로퍼티명 뒤에 ?를 붙이면 선택적 프로퍼티(optional)가 되며 생략하여도 에러가 발생하지 않음
```ts
interface IPerson {
    name: string;
    age : number;
    email? : string;
}
const person: IPerson = {
    name: 'gildong',
    age: 20,
}
```

- extends 키워드를 사용해 인터페이스 또는 클래스를 상속받을 수 있음
```ts
interface IPerson {
    name: string;
    age: number;
}
interface IUser extends IPerson {
    id: number;
}

const user: IUser = {
    name: 'gildong',
    age : 20,
    id : 1,
}
```

## type
- 인터페이스와 비슷하게 사용할 수 있음
```ts
type personType = {
    name: string,
    age: number,
}
```
- 원시값, 유니온 타입, 튜플 등도 타입으로 지정할 수 있음
```ts
// 유니온 타입 지정
type Union = string | undefined;

// 리터럴로 타입 지정
type String = 'str1' | 'str2';
type Number = 1 | 2 | 3 | 4 | 5;
type Object = {foo: 'bar'} | {bar : 'foo'}
type Func = (num: number) => string | (str: string) => void

type Tuple = [number, string, boolean];
const tuple: Tuple = [1, 'str', false];
```

## 차이점
- 인터페이스는 extends 또는 implements 될 수 있지만 타입은 될 수 없음
- 상속을 통해 확장이 필요하다면 타입 보다는 인터페이스가 유리
- 인터페이스로 표현할 수 없거나 유니온 또는 튜플을 사용해야 한다면 타입이 유리