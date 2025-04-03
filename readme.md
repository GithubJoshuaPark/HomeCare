# 따뜻한 손길 방문요양센터 창업 가이드

![방문요양센터 로고](jinwoo_ghibli.jpeg)

## 프로젝트 소개

본 웹사이트는 IT 분야에서 사회복지 분야로 경력을 전환하여 방문요양센터를 창업하기 위한 종합적인 정보를 제공합니다. 시니어 개발자가 자신의 IT 경력을 활용하여 사회복지 분야에서 새로운 도전을 시작하는 과정을 담았습니다.

### 주요 내용

- **창업 체크리스트**: 방문요양센터 창업을 위한 필수 준비사항 및 단계별 체크리스트
- **시설 요건**: 방문요양센터 설립에 필요한 시설 기준 및 요건
- **인허가 절차**: 방문요양센터 설립을 위한 행정 절차 및 필요 서류
- **IT 전략**: IT 경력을 활용한 방문요양센터 운영 차별화 전략
- **센터 레이아웃**: 효율적인 방문요양센터 공간 구성 방안
- **재정 분석**: 초기 투자 비용, 운영 비용, 수익 구조 분석
- **로드맵**: 창업부터 안정화까지의 단계별 로드맵
- **자격 요건**: 방문요양센터 운영을 위한 자격증 및 교육 정보

## 기술 스택

- HTML5
- CSS3
- JavaScript (ES6+)
- 반응형 웹 디자인
- 다크 모드 지원

## 배포 방법

### 로컬 환경에서 실행하기

1. 저장소 클론하기

   ```bash
   git clone https://github.com/GithubJoshuaPark/HomeCare.git
   cd HomeCare
   ```

2. 로컬 서버 실행하기

   ```bash
   # Python을 사용한 간단한 HTTP 서버 실행
   python -m http.server 5500
   ```

3. 브라우저에서 접속하기

   ```text
   http://localhost:5500
   ```

### Firebase로 배포하기

1. Firebase CLI 설치

   ```bash
   npm install -g firebase-tools
   ```

2. Firebase에 로그인

   ```bash
   firebase login
   ```

3. 프로젝트 초기화

   ```bash
   firebase init
   # Hosting 옵션 선택
   # public 디렉토리로 현재 디렉토리(.) 선택
   # 단일 페이지 앱 여부 질문에 'No' 선택
   ```

4. 배포하기

   ```bash
   firebase deploy
   ```

5. 배포 URL 확인

   ```text
   https://homecare-b12c6.web.app/
   ```

## 라이센스

© 2025 All Rights Reserved

## 연락처

- 이메일: soromiso@gmail.com
- 포트폴리오: [개발자 포트폴리오](https://my-portfolio-six-ecru-21.vercel.app/)