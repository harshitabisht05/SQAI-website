import "./globals.css";
import Header from "./components/Header";


// Site metadata (can keep as plain object)
export const metadata = {
  title: "Sentienta",
  description: "A clean and modern site inspired by Anduril",
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
