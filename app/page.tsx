import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const STYLES = [
  {
    name: 'basic-style',
    displayName: 'Basic Style',
    description: 'Clean, minimal design with burgundy and cream palette',
    substyles: ['basic', 'elegant', 'warm', 'crisp'],
    color: 'bg-gradient-to-br from-[#5C0E0E] to-[#7A1A1A]',
    accentColor: 'text-[#5C0E0E]',
    hoverColor: 'hover:from-[#6B1515] hover:to-[#8A2525]',
  },
  {
    name: 'urban-concrete',
    displayName: 'Urban Concrete',
    description: 'Industrial aesthetic with concrete and steel tones',
    substyles: ['basic', 'weathered', 'polished', 'raw'],
    color: 'bg-gradient-to-br from-[#4A5568] to-[#2D3748]',
    accentColor: 'text-[#4A5568]',
    hoverColor: 'hover:from-[#5A6578] hover:to-[#3D4758]',
  },
  {
    name: 'biophilic-nature',
    displayName: 'Biophilic Nature',
    description: 'Organic forms with earthy and botanical tones',
    substyles: ['basic', 'forest', 'meadow', 'earth'],
    color: 'bg-gradient-to-br from-[#6B8E23] to-[#556B2F]',
    accentColor: 'text-[#6B8E23]',
    hoverColor: 'hover:from-[#7B9E33] hover:to-[#657B3F]',
  },
  {
    name: 'digital-tech',
    displayName: 'Digital Tech',
    description: 'Futuristic aesthetic with neon accents',
    substyles: ['basic', 'cyberpunk', 'holographic', 'matrix'],
    color: 'bg-gradient-to-br from-[#00FF88] to-[#00CC6A]',
    accentColor: 'text-[#00FF88]',
    hoverColor: 'hover:from-[#10FF98] hover:to-[#10DC7A]',
  },
  {
    name: 'classical-symmetry',
    displayName: 'Classical Symmetry',
    description: 'Timeless principles with refined color palette',
    substyles: ['basic', 'greek', 'roman', 'neoclassical'],
    color: 'bg-gradient-to-br from-[#708090] to-[#556B7A]',
    accentColor: 'text-[#708090]',
    hoverColor: 'hover:from-[#8090A0] hover:to-[#657B8A]',
  },
  {
    name: 'contemporary-geometric',
    displayName: 'Contemporary Geometric',
    description: 'Bold geometric forms with vibrant colors',
    substyles: ['basic', 'vibrant', 'minimal-geometric', 'gradient'],
    color: 'bg-gradient-to-br from-[#FF006E] to-[#CC0058]',
    accentColor: 'text-[#FF006E]',
    hoverColor: 'hover:from-[#FF107E] hover:to-[#DC1068]',
  },
];

export default function HomePage() {
  return (
    <div className={`${poppins.variable} min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-50`}>
      {/* Hero Section - No duplicate header since Navigation is in layout */}
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-4 pt-8">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 shadow-sm mb-4">
            <span className="text-xs font-medium text-slate-600 uppercase tracking-wider">
              Design System Showcase
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-slate-900 tracking-tight">
            Design Style Gallery
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Each style offers multiple substyles, showcasing all sections of the application.
            <br className="hidden sm:block" />
            Click on any substyle to view the complete section showcase.
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {STYLES.map((style) => (
            <div
              key={style.name}
              className="group bg-white rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Style Header */}
              <div className={`${style.color} ${style.hoverColor} p-8 text-white relative overflow-hidden transition-all duration-500`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-display font-light mb-3 tracking-tight">
                    {style.displayName}
                  </h3>
                  <p className="text-white/95 text-sm sm:text-base font-light leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </div>

              {/* Substyles */}
              <div className="p-6 sm:p-8 bg-gradient-to-b from-white to-slate-50/50">
                <div className="mb-4">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
                    Substyles
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {style.substyles.map((substyle) => (
                    <Link
                      key={substyle}
                      href={`/styles/${style.name}/${substyle}`}
                      className="group/substyle relative overflow-hidden bg-white rounded-2xl p-5 border border-slate-200/60 hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50"
                    >
                      <div className="relative z-10">
                        <div className={`text-lg sm:text-xl font-display font-medium ${style.accentColor} mb-2 transition-colors duration-300`}>
                          {substyle.charAt(0).toUpperCase() + substyle.slice(1).replace(/-/g, ' ')}
                        </div>
                        <div className="text-xs text-slate-500 font-light">
                          View Sections →
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-100/50 opacity-0 group-hover/substyle:opacity-100 transition-opacity duration-300" />
                      <div className={`absolute bottom-0 left-0 right-0 h-1 ${style.color} transform scale-x-0 group-hover/substyle:scale-x-100 transition-transform duration-300 origin-left`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-slate-200/60 shadow-sm">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-display font-light text-slate-900 mb-2">
              About This App
            </h3>
            <p className="text-slate-600 font-light">
              A comprehensive design system showcase powered by Markdown-driven component generation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#5C0E0E]/10 to-[#5C0E0E]/5 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-7 h-7 text-[#5C0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2 text-lg">24 Style Combinations</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Explore 6 unique styles, each with 4 distinct substyles for comprehensive design exploration
              </p>
            </div>
            <div className="group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#5C0E0E]/10 to-[#5C0E0E]/5 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-7 h-7 text-[#5C0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2 text-lg">9 Complete Sections</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Each page displays all sections with consistent styling and comprehensive component coverage
              </p>
            </div>
            <div className="group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#5C0E0E]/10 to-[#5C0E0E]/5 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-7 h-7 text-[#5C0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2 text-lg">Markdown-Driven</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                All components generated from Markdown specifications for maintainable and scalable design systems
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-white/60 backdrop-blur-md mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-slate-500 font-light">
            ESSACA Style App - Generated from Markdown files
          </p>
        </div>
      </footer>
    </div>
  );
}
