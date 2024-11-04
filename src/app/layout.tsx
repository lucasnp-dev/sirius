import type { Metadata } from 'next'
import localFont from 'next/font/local'
import React from 'react'

const inter = localFont({
  src: '../fonts/Inter-VariableFont_opsz,wght.ttf',
  variable: '--font-inter-sans',
  weight: '100 900',
})

const sourceCodePro = localFont({
  src: '../fonts/SourceCodePro-Light.ttf',
  variable: '--font-source-code-pro',
  weight: '300',
})

export const metadata: Metadata = {
  title: 'Sirius Ui',
  description: 'Library of UI components to build fast.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sourceCodePro.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>

          <footer className="py-2">
            <p className="text-center text-sm text-muted-foreground">
              Made by Lucas Nunes.
            </p>
          </footer>
        </div>
      </body>
    </html>
  )
}
