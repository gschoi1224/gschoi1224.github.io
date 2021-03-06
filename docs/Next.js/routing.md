---
layout: default
nav_order: 3
comments: true 
title: '라우팅'
parent: 'Next.js'
---

# Next.js 라우팅
{: .fw-700 .fs-7 }

## Next.js의 라우팅 방법
> 넥스트는 pages 폴더에 파일을 만들면 파일의 경로에 따라 경로가 설정이 됨

## Link 컴포넌트

- DOM을 가지진 않지만 자식인 a 태그를 클릭하면 페이지 전체를 새로 불러오지 않고 주소 이동을 함
- History API를 지원해 뒤로 가기를 할 때 이전에 렌더링된 페이지를 가져옴
- Link 컴포넌트를 이용하지 않고 a 태그만 이용하면 전체 페이지를 새로 불러옴
- Link 컴포넌트 속에 a 태그가 없다면 라우팅이 되지 않음
- Link 컴포넌트의 속성
    ```ts
        Link {
            href:string,        // 이동할 경로(URL)
            as?:string,         // 브라우저의 URL에 표시될 값
            replace?:boolean,   // 브라우저의 history 스택에 url 추가할지
            scroll?:boolean = true,    // 스크롤을 맨 위로 이동할지
            shallow?:boolean = false,   // 서버에서 데이터를 불러오는 작업(getStaticProps, getServerSideProps or getInitialProps)을 스킵할지
            passHref?:boolean,  // 자식에게 href를 전달할지
            prefetch?:boolean = true,  // 백그라운드에서 페이지를 미리 가져올지
        }
    ```
## 정적 페이지 라우팅
> 사전에 지정된 주소로 이동하는 방법으로 넥스트에서는 **Link** 컴포넌트를 사용
```jsx
import Link from 'next/link';

const App = () => {
    return (
        <div>
            <Link href="/something">
                <a>Move to static page /something</a>
            </Link>
        </div>
    )
}
```

## 동적 페이지 라우팅
> 정해지지 않은 주소로 이동하는 방법  
> 파일 이름을 대괄호로 감싸서 만들면 동적 페이지임을 의미함  

![dynamic](/assets/images/next/dynamic.PNG)
**pages/index.js**
```jsx
import Link from 'next/link';

const App = () => {
    return (
        <div>
            <Link href='/dynamic/something'>    
            /* Next.js 9.5.3버전 이하에선 <Link href='/dynamic/[key]' as='dynamic/something'> */
                <a>Move to dynamic page /dynamic/something</a>
            </Link>
        </div>
    )
}
```
**pages/dynamic/[key].js**
```jsx
import Link from 'next/link';
import { useRouter } from 'next/router';

const key = () => {
    const router = useRouter();
    return (
        <div>
            <p>value는 {router.query.key}입니다.</p>
        </div>
    )
}
```
## useRouter 객체 이용하기
**pages/index.js**
```js
import { useState } from 'react';
import { useRouter } from 'next/router';

const App = () => {
    const [value, setValue] = useState('');
    const router = useRouter();
    return (
        <div>
            <button onClick={() => router.push('/static')}>
                정적 라우팅
            </button>
            <label for="key">이름</label><input type='text' value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={() => router.push(`/dynamic/${value}`)}>
                동적 라우팅
            </button>
        </div>
    )
}
```

## 정적 파일
> 프로젝트 루트 경로의 public 폴더를 사용해 정적 파일을 제공할 수 있음
```
+-- ..
|-- (Root)
|
|-- public
|   |-- image.png
|-- pages
|   |-- index.js
```
**pages/index.js**

```js
const App = () => {
    return (
        <div>
            <img src='/image.png' alt='이미지'>
        </div>
    )
};
export default App;
```