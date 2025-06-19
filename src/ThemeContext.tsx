import React, { createContext, useState, useEffect } from 'react';

export const themes = ['light', 'dark', 'matrix'] as const;
export type Theme = typeof themes[number];

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
});

const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
};

const setCookie = (name: string, value: string, days = 365) => {
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark');

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);

    if (newTheme === 'dark') {
      document.body.className = '';
    } else {
      document.body.className = `theme-${newTheme}`;
    }

    setCookie('theme', newTheme);
  };

  useEffect(() => {
    const cookieTheme = getCookie('theme') as Theme | null;
    if (cookieTheme && themes.includes(cookieTheme)) {
      setTheme(cookieTheme);
    } else {
      setTheme('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
