export function Footer() {
  return (
    <footer className="mx-auto mt-16 w-[92%] max-w-6xl border-t border-[rgba(201,168,76,0.18)] py-8 text-sm text-text-secondary">
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <p>© {new Date().getFullYear()} MetaboliQ OS. All rights reserved.</p>
        <p>Built for precision metabolic performance.</p>
      </div>
    </footer>
  );
}
