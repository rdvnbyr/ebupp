export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-400 text-white text-center text-2xl font-bold p-4">
        <a href="/">Home</a>
      </header>
      <div className="flex flex-1">
        <aside className="bg-slate-200 w-64 p-4">
          <ul className="space-y-4">
            <li>
              <a href="/dashboard" className="font-bold">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/dashboard/profile">Profile</a>
            </li>
            <li>
              <a href="/dashboard/settings">Settings</a>
            </li>
          </ul>
        </aside>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
