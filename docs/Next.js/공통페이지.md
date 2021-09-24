---
layout: default
nav_order: 5
comments: true 
title: 'Next.js 공통 페이지'
parent: 'Next.js'
---
# 공통 페이지
{: .fw-700 .fs-7 }

## _app
- 페이지들의 공통된 레이아웃
- 페이지를 탐색할 때 상태 유지
- 추가 데이터를 페이지에 주입
- 글로벌 CSS 추가

## _document
- html 및 body 태그를 보강하는 데 사용
- title, description, meta 등 정보 제공 HTML 태그 작성 가능

- CSS-in-JS의 서버 사이드 렌더링을 위한 설정을 할 때 사용

```js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class Doc extends Document {
    static async eetInitialProps(ctx:DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp : App => props => sheet.collectStyles(<App {...props} />)
            });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal();
        }
    }
    reunder() {
        return (
            <Html>
                <Head>
                    <meta name='title' content='[title]'>
                    <meta name='description' content='[description]'> 
                    <link href='[font uri]' rel='stylesheet'>
                </Head>
            </Html>
            <body>
                <Main />
                <NextScript />
            </body>
        )
    }
}

export default Doc;
```

## _error
- 빌드 된 프로덕션 환경에서 에러가 발생하면 에러 페이지로 넘어감
- 500 에러 = **pages/_error.js**
- 404 에러 = **pages/404.js**