# 에어브리지 국제특송 — airbridge.kr
## Cloudflare Pages 배포 가이드

---

## 📁 파일 구조
```
airbridge-site/
├── index.html          ← 메인 홈
├── about.html          ← 회사소개
├── services.html       ← 서비스 안내
├── calculator.html     ← 운임 계산기
├── contact.html        ← 문의/오시는길
├── style.css           ← 공통 스타일
├── common.js           ← 공통 네비/푸터 JS
├── _redirects          ← URL 리다이렉트 규칙
├── _headers            ← HTTP 헤더 설정
└── README.md
```

---

## 🚀 Cloudflare Pages 배포 방법

### Step 1 — GitHub 저장소 생성
1. GitHub에서 새 저장소 생성 (예: `airbridge-site`)
2. 위 파일들을 모두 업로드

### Step 2 — Cloudflare Pages 연결
1. [Cloudflare Dashboard](https://dash.cloudflare.com) 로그인
2. **Workers & Pages** → **Create application** → **Pages** 탭
3. **Connect to Git** → GitHub 저장소 선택
4. 빌드 설정:
   - **Framework preset**: `None`
   - **Build command**: (비워두기)
   - **Build output directory**: `/` (루트)
5. **Save and Deploy** 클릭

### Step 3 — 커스텀 도메인 연결 (airbridge.kr)
1. Cloudflare Pages 프로젝트 → **Custom domains** 탭
2. **Set up a custom domain** → `airbridge.kr` 입력
3. Cloudflare가 자동으로 DNS 설정 안내

### Step 4 — 네임서버 변경 (도메인 등록업체에서)
Cloudflare가 제공하는 네임서버 2개를 도메인 등록업체에서 설정:
```
예시:
ns1.cloudflare.com
ns2.cloudflare.com
```
(실제 값은 Cloudflare Dashboard에서 확인)

### Step 5 — SSL 자동 적용
네임서버 변경 후 24~48시간 내 자동으로 HTTPS 적용됨

---

## ✏️ 콘텐츠 수정 방법

| 수정 항목 | 파일 |
|-----------|------|
| 메인 홈 내용 | `index.html` |
| 회사소개 | `about.html` |
| 서비스 안내 | `services.html` |
| 운임 계산기 | `calculator.html` |
| 문의/오시는길 | `contact.html` |
| 메뉴/푸터 | `common.js` |
| 전체 색상/폰트 | `style.css` |

### 유류할증료 업데이트
`calculator.html` 파일 상단 `const FUEL = { dhl: 39.0, fedex: 46.25, ups: 46.25 };` 수정

### 연락처 수정
`common.js` 파일의 FOOTER_HTML 섹션 수정

---

## 📞 연락처
- 전화: 032-502-1880
- 이메일: cs@airos.co.kr
- 대표: 호영준
