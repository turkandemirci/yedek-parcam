import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kayıt",
  description: "",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
