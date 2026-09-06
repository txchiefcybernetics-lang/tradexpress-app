export interface TXTheme {
  id: string;
  name: string;
  author?: string;
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
  metadata?: {
    description?: string;
    previewImage?: string;
  };
}
