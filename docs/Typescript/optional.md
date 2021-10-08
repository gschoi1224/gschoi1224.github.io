---
layout: default
nav_order: 1
comments: true 
title: 'optional'
parent: 'Typescript'
---

# 타입스크립트 객체의 일부 속성을 optional로 만드는 방법
```ts
interface IUser = {
    name: string;
    password : string:
    id: string;
    email: string;
}

const user:IUser = {
    name : '홍길동'
    password : '1234',
    id : 'gildong',
    email : 'gildong@gmail.com',
}
```
- delete를 사용하여 객체의 속성을 제거하려 하면 해당 객체의 제거될 속성은 optional이어야 한다는 타입 에러가 발생
```ts
delete user.password;
```

- Partial을 통해 일부 속성을 optional로 만들어 제거하자
```ts
const deletePasswordUser : Partial<Pick<IUser, 'password'>> = user;
delete user.password;   // 성공!
```


