create table if not exists knowledge_documents (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    category text,
    source text,
    content text not null,
    created_at timestamptz default now()
);
