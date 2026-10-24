export function EmptyState({
  title,
  body,
}: {
  title: string;
  body?: string;
}) {
  return (
    <div className="rounded-lg border border-dashed border-[var(--border)] px-6 py-16 text-center">
      <h2 className="font-[family-name:var(--font-display)] text-2xl">{title}</h2>
      {body ? <p className="mt-2 text-[var(--muted)]">{body}</p> : null}
    </div>
  );
}
