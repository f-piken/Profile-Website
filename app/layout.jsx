import "./globals.css";
import InteractiveBackground from "@/components/InteractiveBackground";

export const metadata = {
  title: "Creative Engineer | Portfolio",
  description:
    "Portfolio Creative Engineer — product design, frontend engineering, motion, 3D, and modern digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <InteractiveBackground />
        {children}
      </body>
    </html>
  );
}
