import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-148 text-render-optimize antialiased">
        {children}
      </body>
    </html>
  )
}
