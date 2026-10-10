import "./globals.css";

export const metadata = {
  title: "Johnbosco Nweke | Frontend Developer",
  description:
    "Explore Johnbosco Nweke's frontend projects, learning journey, and web development work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}