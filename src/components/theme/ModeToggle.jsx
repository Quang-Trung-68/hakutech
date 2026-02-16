import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a placeholder
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative focus:outline-none"
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {/* Light Mode Icon (Visible in Light Mode) */}
      <span className={`material-icons text-xl text-amber-500 transition-all ${theme === 'dark' ? 'hidden' : 'block'}`}>
        light_mode
      </span>
      
      {/* Dark Mode Icon (Visible in Dark Mode) */}
      <span className={`material-icons text-xl text-blue-300 transition-all ${theme === 'dark' ? 'block' : 'hidden'}`}>
        dark_mode
      </span>
    </button>
  );
}
