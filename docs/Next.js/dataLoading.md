---
layout: default
nav_order: 4
comments: true 
title: '데이터 불러오기'
parent: 'Next.js'
---
# 서버에서 데이터 불러오기
{: .fw-700 .fs-7 }

## 정적 생성
> 빌드 시에 페이지를 HTML로 만들어 요청 시 제공  
> 외부 데이터를 필요로 하지 않을 때

## 서버 사이드 렌더링
> 페이지 요청 시 서버 사이드 렌더링을 통해 HTML을 제공  
> 외부 데이터를 필요로 할 때

서버에서 데이터를 패치하기 위해 **isomorphic-unfetch** 또는 **axios** 설치
{: .fs-2}

### **getServerSideProps**
- 서버 측에서 props를 받아오는 기능  
- 페이지를 요청시마다 실행이 되며 getServerSideProps에서 페이지로 전달해 준 데이터를 서버에서 렌더링 함 

pages/dynamic/[key].js

```jsx
import fetch from 'isomorphic-unfetch';

const App = ({ obj }) => {
    const value = obj?.key;
    return <div>{value}</div>
}

export const getServerSideProps = async ({ query }) => {
    const value = query.key;
    try {
        const result = await fetch(`[api]?key=${value}`);
        if (result.status === 200) {
            const obj = await result.json();
            return {props : {obj}};
        }
        return {props : {}};
    } catch (e) {
        console.error(e);
        return {props : {}};
    }
}

export default App;
```

- 리턴한 props 값들이 페이지의 props로 전달되게 됨
- 파일명의 [key]값은 매개변수 값인 query로 받아올 수 있음


### **getStaticProps**
- 빌드 시에 데이터를 불러와 결과를 json으로 저장하여 사용 -> 일관된 데이터
- 정적 페이지에서 사용

pages/static.js

```jsx
const Static = ({ time }) => {
    return <div>{time}</div>
}
export const getStaticProps = async () => {
    return {props : {time : new Date()}, revalidate : 5};
    // revalidate 값을 전달해 주면 정해진 시간마다 요청이 들어오면 데이터를 갱신(초 단위)
}
```
- 동적 페이지에서 사용

pages/dynamic/[key].js

```jsx
const fetch from 'isomorphic-unfetch';

const App = ({ obj, time }) => {
    const value = user?.key;
    return (
        <div>
        {value}, {time}
        </div>
    )
}

export const getStaticProps = async ({ params }) => {
    try {
        const result = await fetch(`[api]?key=${value}`);
        if (result.status === 200) {
            const obj = await result.json();
            return { props : {obj, time: new Date()} };
        }
        return { props : {time: new Date()} };
    }
    catch (e) {
        console.error(e);
        return { props : {time: new Date()} };
    }
}
// 페이지의 경로가 외부 데이터에 의존할 때 사용
export async function getStaticPaths() {
    return {
        paths: [{params : {key : 'something'}}],
        fallback : true,    // false 이면 param 지정값 이외 값은 404
    }
}

export default App;
```

### **getInitialProps**
- 넥스트 9.3버전 이전부터 사용되던 함수로 9.3 이상의 버전에서는 getServerSideProps와 getStaticProps를 사용하는 것을 권장

```jsx
import fetch from 'isomorphic-unfetch';

const App = ({ obj }) => {
    const value = obj?.key;
    return <div>{value}</div>
}

App.getInitialProps = async ({ query }) => {
    const { value } = query.key;
    try {
        const result = await fetch(`[api]?key=${value}`);
        if (result.status === 200) {
            const obj = result.json();
            return {props : {obj}};
        }
        return {props : {}}
    }
    catch (e) {
        console.error(e);
        return {props : {}};
    }
}
export default App;
```
- 초기 렌더링 시에는 서버에서 데이터를 불러오지만 클라이언트측 내비게이션을 사용하게 되면 클라이언트 측에서 데이터를 불러옴
