import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ThemeRegistry from "@/components/theme-registry/theme.registry";
import NextAuthWrapper from "@/lib/nextAuthProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NextAuthWrapper>
            <Header />
            {children}
            <Footer />
          </NextAuthWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
