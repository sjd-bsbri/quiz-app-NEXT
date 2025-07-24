import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "آزمون آنلاین | Quiz App",
  description: "وب اپلیکیشن کوئیز فارسی با طراحی زیبا و کاربرپسند",
  keywords: "آزمون، کوئیز، سوال، امتحان، آنلاین، فارسی",
  authors: [{ name: "Quiz App Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-vazirmatn antialiased">
        {children}
      </body>
    </html>
  );
}