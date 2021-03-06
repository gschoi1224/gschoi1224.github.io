---
layout: default
nav_order: 2
comments: true 
title: '설치방법'
parent: 'Next.js'
---


# Next.js 설치방법
{: .fw-700 .fs-7 }

1. CNA(Create-React-App) 명령어 사용해서 프로젝트 만들기

```powershell
npx create-next-app [프로젝트명]
```
- npx: npm 5.2.0 버전부터 추기된 일회성으로 원하는 패키지를 npm 레지스트리에 접근해 실행시키는 도구

2. package.json 살펴보기

```json
{
  "name": "01-first-app",   // 필수
  "version": "0.1.0",       // 필수
  "private": true,
  "scripts": {
    "dev": "next dev",      // 개발 환경 실행
    "build": "next build",  // 번들 만들기
    "start": "next start",  // 빌드된 app 실행
    "lint": "next lint"
  },
  "dependencies": {
    "next": "11.1.2",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "eslint": "7.32.0",
    "eslint-config-next": "11.1.2"
  }
}
```

3. 터미널에서 실행하기

```powershell
npm run dev
yarn dev
```

4. cmd 창에 뜬 포트 번호로 접속
![cmd](/assets/images/next/cmd.PNG)
![localhost](/assets/images/next/localhost.PNG)