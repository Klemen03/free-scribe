import { Open_Sans, Poppins } from 'next/font/google';
import './globals.css';

const opensans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'FreeScribe',
  description: 'A web application for transcription and translation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-r from-blue-50 to-blue-200 text-slate-700 text-sm sm:text-xl ${opensans.className} `}
      >
        {children}
      </body>
    </html>
  );
}
