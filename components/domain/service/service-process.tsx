export function ServiceProcess({
  steps,
}: {
  steps?: { title: string; body: string }[];
}) {
  if (!steps?.length) return null;
  return (
    <ol className="mt-10 grid gap-6 md:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.title} className="border-t border-[var(--border)] pt-4">
          <p className="font-[family-name:var(--font-display)] text-xl text-[var(--primary)]">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
            {step.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
