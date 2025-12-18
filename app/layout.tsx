import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ESSACA Style App',
  description: 'Application generated from Markdown files',
};

const STYLES = [
  {
    name: 'basic-style',
    displayName: 'Basic Style',
    substyles: ['basic', 'elegant', 'warm', 'crisp'],
  },
  {
    name: 'urban-concrete',
    displayName: 'Urban Concrete',
    substyles: ['basic', 'weathered', 'polished', 'raw'],
  },
  {
    name: 'biophilic-nature',
    displayName: 'Biophilic Nature',
    substyles: ['basic', 'forest', 'meadow', 'earth'],
  },
  {
    name: 'digital-tech',
    displayName: 'Digital Tech',
    substyles: ['basic', 'cyberpunk', 'holographic', 'matrix'],
  },
  {
    name: 'classical-symmetry',
    displayName: 'Classical Symmetry',
    substyles: ['basic', 'greek', 'roman', 'neoclassical'],
  },
  {
    name: 'contemporary-geometric',
    displayName: 'Contemporary Geometric',
    substyles: ['basic', 'vibrant', 'minimal-geometric', 'gradient'],
  },
];

function Navigation() {
  return (
    <nav className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl sm:text-2xl font-display font-light text-slate-900">
              <span className="italic font-normal bg-gradient-to-r from-[#5C0E0E] to-[#7A1A1A] bg-clip-text text-transparent">
                ESSACA
              </span>{' '}
              <span className="font-light">Style App</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center">
                Styles
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2 max-h-96 overflow-y-auto">
                  {STYLES.map((style) => (
                    <div key={style.name} className="mb-2 last:mb-0">
                      <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {style.displayName}
                      </div>
                      {style.substyles.map((substyle) => (
                        <Link
                          key={substyle}
                          href={`/styles/${style.name}/${substyle}`}
                          className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                        >
                          {substyle.charAt(0).toUpperCase() + substyle.slice(1).replace(/-/g, ' ')}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-body antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

