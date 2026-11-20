export type ThemeMode = "light" | "dark";

export interface ThemeTokens {
  background: string;
  foreground: string;
  accent: string;
}

export interface TXTheme {
  id: string;
  name: string;
  author: string;
  version: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    accent: string;
    danger: string;
    success: string;
  };
}

export interface ThemeDefinition {
  id: string;
  name: string;
  mode: ThemeMode;
  tokens: ThemeTokens;
}
