import "./globals.css";

export const metadata = {
  title: "Laddu Gopal Collection",
  description: "Premium Dresses & Accessories for Laddu Gopal",
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
