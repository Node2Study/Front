# 프로젝트 프론트엔드 설정

이 프로젝트는 **Vite**로 설치되었으며, Node.js와 npm의 버전 정보입니다

- Node.js: `v20.12.0`
- npm: `v10.5.0`

## 기술 스택 및 설정

- **Vite**: 빠른 빌드와 개발을 위한 모듈 번들러
- **모듈 SCSS**: 컴포넌트 단위로 스타일을 적용하기 위해 SCSS 모듈 사용
- **상태 관리**: 상태 관리를 위해 Zustand를 사용

## 폴더 및 파일 구조

- **폴더 구조**
  - `components`: 개별 UI 컴포넌트 폴더. 공통 컴포넌트는 `components/common` 폴더에 배치
  - `Layout`: 공통 레이아웃 관련 컴포넌트를 모아 놓은 폴더
  - `pages`: 페이지 단위의 컴포넌트를 관리하는 폴더
  - `routes`: 라우팅 관련 파일을 관리하는 폴더
  - `stores`: Zustand 관련 상태 관리 파일을 모아둔 폴더
  - `styles`: 전체 프로젝트에서 공통으로 사용하는 스타일 파일을 저장
  - `utils`: 유틸리티 함수와 공통 로직을 모아둔 폴더

```
src/
├── components/          # 개별 UI 컴포넌트 폴더
│   ├── common/          # 공통 컴포넌트 모음
│   └── [각 컴포넌트별 폴더]  # 컴포넌트별 개별 폴더 구성
├── Layout/              # 공통 레이아웃 컴포넌트
├── pages/               # 페이지 단위의 컴포넌트
├── routes/              # 라우팅 설정 관련 폴더
├── stores/              # Zustand 상태 관리 폴더
├── styles/              # 공통 스타일 파일
└── utils/               # 유틸리티 함수 모음

```

## 환경 변수 설정

Vite에서는 CRA(create-react-app)와는 다르게 `.env` 파일 내에서 환경 변수를 `import.meta.env` 형식으로 불러옵니다. <br/> **각자 `.env` 파일을 생성**하여 아래와 같은 방식으로 환경 변수를 정의해 주세요. <br/>변수명은 프로젝트 내에서 통일해서 사용합니다.(팀내 설정예정)

```plaintext
# 예시: .env 파일
VITE_API_BASE_URL=https://api.example.com
VITE_SOME_OTHER_VARIABLE=value
```

주의: VITE*로 시작하는 변수명만 Vite에서 인식합니다. 변수명을 사용할 때는 반드시 VITE* 접두사를 붙여야 합니다.!!

## 프로젝트 설정 및 실행

### 의존성 설치

```
npm install
```

### 개발서버 실행

```
npm run dev
```

### 빌드

```
npm run build
```
