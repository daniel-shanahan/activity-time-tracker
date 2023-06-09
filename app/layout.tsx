import "./globals.css";

export const metadata = {
  title: "Activity Time Tracker",
  description: "Timers for repeated activities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
