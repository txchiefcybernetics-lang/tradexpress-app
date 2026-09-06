export interface Tip {
  id: string;
  title: string;
  message: string;
}

export const WelcomeTip: Tip = {
  id: "welcome",
  title: "Welcome to TradExpress",
  message: "Start trading now!"
};
