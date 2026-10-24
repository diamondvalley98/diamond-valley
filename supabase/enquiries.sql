-- Enquiries table for Diamond Valley / agency sites
-- Run in Supabase SQL editor (or via migration).

create extension if not exists "pgcrypto";

do $$
begin
  if not exists (
    select 1 from pg_type where typname = 'enquiry_status'
  ) then
    create type public.enquiry_status as enum (
      'new',
      'in_progress',
      'closed',
      'spam'
    );
  end if;
end $$;

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  product text,
  collection text,
  service text,
  source text,
  status public.enquiry_status not null default 'new'
);

create index if not exists enquiries_created_at_idx
  on public.enquiries (created_at desc);

create index if not exists enquiries_status_idx
  on public.enquiries (status);

alter table public.enquiries enable row level security;

-- Publishable/anon key inserts from the Next.js API need this.
-- Service role bypasses RLS and does not need it.
-- Re-run this block if you see: "new row violates row-level security policy"
grant usage on schema public to anon, authenticated;
grant insert on table public.enquiries to anon, authenticated;

drop policy if exists "Allow public insert enquiries" on public.enquiries;
create policy "Allow public insert enquiries"
  on public.enquiries
  for insert
  with check (true);

-- No public read/update/delete — manage rows in the Supabase dashboard
-- or later via an authenticated admin role / service role key.
