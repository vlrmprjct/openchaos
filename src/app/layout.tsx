import type { Metadata } from "next";
import "./globals.css";
import "./retro.css";

export const metadata: Metadata = {
  title: "OpenChaos.dev",
  description: "A self-evolving open source project. Vote on PRs. Winner gets merged every Sunday.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <svg
            aria-hidden
            width='0'
            height='0'
            className='absolute'
        >
            <filter id='posterize-256'>
                <feComponentTransfer>
                    <feFuncR type='discrete' tableValues='0 0.25 0.5 0.75 1' />
                    <feFuncG type='discrete' tableValues='0 0.25 0.5 0.75 1' />
                    <feFuncB type='discrete' tableValues='0 0.25 0.5 0.75 1' />
                </feComponentTransfer>
            </filter>
        </svg>
        <div id='app-root' className='nineties'>
            {children}
        </div>
      </body>
    </html>
  );
}
