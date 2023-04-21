import "../../public/antd.min.css";

export const metadata = {
  title: "Boky | Administrator",
  description: "",
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
