import './globals.css';
import 'aos/dist/aos.css';

import AOSProvider from '@/components/AOSProvider';

export const metadata = {
  title: 'news',
  description: 'news migrated into a simple Next.js app'
};

const cssFiles = [
  '/assets/css/bootstrap.min.css',
  '/assets/css/owl.carousel.min.css',
  '/assets/css/ticker-style.css',
  '/assets/css/flaticon.css',
  '/assets/css/slicknav.css',
  '/assets/css/animate.min.css',
  '/assets/css/magnific-popup.css',
  '/assets/css/fontawesome-all.min.css',
  '/assets/css/themify-icons.css',
  '/assets/css/slick.css',
  '/assets/css/nice-select.css',
  '/assets/css/style.css',
  '/assets/css/responsive.css'
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/favicon.ico" />
        {cssFiles.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
