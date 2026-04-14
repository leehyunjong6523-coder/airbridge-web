-- ═══════════════════════════════════════════════════
-- (주) 에어브리지 — Supabase 테이블 설정
-- Supabase → SQL Editor → New Query → 붙여넣기 → Run
-- ═══════════════════════════════════════════════════

-- 1. 공지사항 테이블
create table if not exists public.notices (
  id         bigserial primary key,
  title      text        not null,
  content    text        not null,
  pinned     boolean     default false,
  views      integer     default 0,
  created_at timestamptz default now()
);

-- 2. 문의 게시판 테이블
create table if not exists public.inquiries (
  id         bigserial primary key,
  name       text        not null,
  tel        text        not null,
  email      text,
  type       text,
  message    text        not null,
  password   text        not null,
  answered   boolean     default false,
  answer     text,
  created_at timestamptz default now()
);

-- 3. Row Level Security (RLS) 활성화
alter table public.notices    enable row level security;
alter table public.inquiries  enable row level security;

-- 4. 정책 설정 (anon key로 모든 작업 허용 — 프론트에서 인증 처리)
create policy "notices_all"   on public.notices   for all using (true) with check (true);
create policy "inquiries_all" on public.inquiries  for all using (true) with check (true);

-- 5. 샘플 공지 (선택사항)
insert into public.notices (title, content, pinned) values
  ('홈페이지 오픈 안내', '(주) 에어브리지 공식 홈페이지가 오픈되었습니다.' || chr(10) || chr(10) ||
   'DHL·FedEx·UPS 실시간 운임 계산기를 통해 편리하게 국제특송 운임을 조회하실 수 있습니다.' || chr(10) || chr(10) ||
   '문의사항은 고객센터(032-502-1880) 또는 cs@airos.co.kr로 연락해 주세요.', true);

-- ──────────────────────────────────────
-- 3. 운임계산기 사용 이력 테이블 (추가)
-- ──────────────────────────────────────
create table if not exists public.calc_logs (
  id         bigserial primary key,
  country    text,
  mode       text,
  ua         text,
  created_at timestamptz default now()
);
alter table public.calc_logs enable row level security;
create policy "calc_logs_all" on public.calc_logs for all using (true) with check (true);
