import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "سنتر ايكون التعليمي | Icon Center",
  description: "الموقع الرسمي لسنتر ايكون التعليمي - جدول الحصص، المدرسين، والمتابعة الذكية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
