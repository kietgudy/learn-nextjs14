import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ThemeRegistry from "@/components/theme-registry/theme.registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer/>
        </ThemeRegistry>
      </body>
    </html>
  );
}
