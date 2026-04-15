/* ═══════════════════════════════════════════════════
   supabase-config.js — AIRBRIDGE DB 설정
   ※ 아래 2개 값만 교체하면 됩니다.
═══════════════════════════════════════════════════ */

// ▼ Supabase 프로젝트 설정 (Project Settings → API)
const SUPABASE_URL = 'https://xyvrvanrzbxazuctcryp.supabase.co'; // ← 교체
const SUPABASE_KEY = 'sb_publishable_ozAReVDzPdN6BO-BlhdEnA_h43nv0Ql';                // ← 교체

// ── DB 헬퍼 ──────────────────────────────────────
const DB = {
  h: {
    'apikey':        SUPABASE_KEY,
    'Authorization': 'Bearer ' + SUPABASE_KEY,
    'Content-Type':  'application/json',
    'Prefer':        'return=representation'
  },

  async get(table, qs = '') {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${qs}`, { headers: this.h });
    if (!r.ok) throw new Error(await r.text());
    return r.json();
  },

  async post(table, data) {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: 'POST', headers: this.h, body: JSON.stringify(data)
    });
    if (!r.ok) throw new Error(await r.text());
    return r.json();
  },

  async patch(table, filter, data) {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${filter}`, {
      method: 'PATCH', headers: this.h, body: JSON.stringify(data)
    });
    if (!r.ok) throw new Error(await r.text());
    return r.json();
  },

  async del(table, filter) {
    await fetch(`${SUPABASE_URL}/rest/v1/${table}?${filter}`, {
      method: 'DELETE', headers: this.h
    });
  },

  ready() {
    return SUPABASE_URL !== 'https://YOUR_PROJECT_ID.supabase.co';
  }
};
