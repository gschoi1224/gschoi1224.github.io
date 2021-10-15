---
layout: default
nav_order: 5
comments: true 
title: 'Redux'
parent: 'React'
---

# Redux
{: .fw-700 .fs-7 }

> 프로그램의 규모가 커지면서 관리해야 할 상태들이 늘어나고 복잡도도 커지면서 부모 <-> 자식으로 상태들을 전달해 사용하기에는 너무 복잡해 전역으로 상태관리를 할 수 있게 도와주는 라이브러리  

## Flux 구조
> MVC(Model-View-Controller)의 단점을 보완할 목적으로 개발된 **단방향 데이터 흐름**의 구조

## Redux 기본 개념
### store(스토어)
> 앱의 상태를 보관하는 **단 하나**의 객체

### Action(액션)
> 상태 변화에 대해 알려주는 객체로 액션의 행위를 나타내는 문자열인 **type**을 필수로 가지고 있어야 함

### Reducer(리듀서)
> 상태와 액션을 가지고 함수를 실행하는 역할로 첫 번째 인자로 이전 상태의 정보, 두 번째 인자로 액션 객체를 받으며 액션에 대한 함수를 정의하고, 함수를 실행해서 상태를 업데이트하는 순수 함수
```js
(state, action) => state 
```
### Dispatch(디스패치)
> 액션을 실행시키는 역할을 하며 액션을 인자로 받음    
```js
store.dispatch({ type : '${action}' });
```

**액션을 dispatch를 통하여 실행하면 액션 생성자가 파라미터를 받아 객체 형태로 만들어 주며 생성된 객체를 리듀서로 가고 리듀서는 이전 상태와 액션 객체를 파라미터로 받아 새로운 상태를 만들어 반환함 리듀서는 새로운 상태를 스토어로 업데이트하며 컴포넌트들은 스토어를 구독하고 있음**


## Redux가 필요할 때
- 계속 바뀌는 상당한 양의 데이터가 있다
- 상태를 위한 단 하나의 근원이 필요하다
- 최상위 컴포넌트가 모든 상태를 가지고 있는 것은 더 이상 적적하지 않다

## Redux의 원칙
- 응용 프로그램의 전역상태는 단일 저장소 내의 트리에 저장됨
- 상태는 읽기 전용임
- 순수 함수에 의해서 변경되어야 함

## 설치
```
> yarn add redux react-redux next-redux-wrapper redux-devtools-extension
> yarn add @types/react-redux -D
```

## Ducks 패턴

### 규칙
1. 항상 reducer란 이름의 함수를 export default 해야 함
2. 항상 모듈의 action 생성자들은 함수 형태로 export 해야 함
3. 항상 npm-module-or-app/reducer/ACTION_TYPE 형태의 action 타입을 가져야 함
4. 외부 reducer가 해당 action들이 발생하는지 계속 기다리거나 재사용할 수 있는 라이브러리로 퍼블리싱할 경우 action 타입들을 UPPER_SNAKE_CASE로 export 할 수 있음 

