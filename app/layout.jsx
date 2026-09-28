import "./globals.css";
import InteractiveBackground from "@/components/InteractiveBackground";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata = {
  title: "Creative Engineer | Portfolio",
  description: "Portfolio Creative Engineer — product design, frontend engineering, motion, 3D, and modern digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <body>
        <LoadingScreen />
        <InteractiveBackground />
        {children}
      </body>
    </html>
  );
}
