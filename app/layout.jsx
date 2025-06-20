import "./globals.css";
import Header from "./components/Header";
import CustomCursor from './components/CustomCursor';


// Site metadata (can keep as plain object)
export const metadata = {
  title: "Sentienta",
  description: "A clean and modern site inspired by Anduril",
  icon: "/images/logo.png"
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
         <CustomCursor />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
