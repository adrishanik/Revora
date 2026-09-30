import "./globals.css";

export const metadata = {
  title: "Revora — Revenue Recovery Intelligence",
  description:
    "Find and recover revenue your agency is about to lose.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  );
}
