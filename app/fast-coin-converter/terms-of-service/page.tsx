import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Fast Coin Converter",
  description: "Terms of Service for Fast Coin Converter app. Read about our app usage, data storage, and ad policies.",
};

const SECTIONS = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "description", title: "2. Description of Service" },
  { id: "local-data", title: "3. Local Data Storage & No Auth" },
  { id: "monetization", title: "4. Monetization & Advertisements" },
  { id: "intellectual-property", title: "5. Intellectual Property" },
  { id: "disclaimer", title: "6. Disclaimer of Warranties" },
  { id: "limitation", title: "7. Limitation of Liability" },
  { id: "changes", title: "8. Changes to Terms" },
  { id: "contact", title: "9. Contact Information" },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Decorative Border */}
      <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-indigo-600 to-purple-600" />

      {/* Header */}
      <header className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/fast-coin-converter/privacy" className="group flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/10 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text">
                Fast Coin Converter
              </span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400 font-medium">Legal Agreements</span>
            </div>
          </Link>
          <nav className="flex items-center gap-1.5 p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium">
            <Link
              href="/fast-coin-converter/terms-of-service"
              className="px-4 py-1.5 rounded-md bg-white dark:bg-zinc-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/fast-coin-converter/privacy"
              className="px-4 py-1.5 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 border-b border-zinc-100 dark:border-zinc-900">
        <div className="absolute inset-0 bg-grid-zinc-900/[0.02] dark:bg-grid-white/[0.02] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl rounded-full -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Last Updated: May 30, 2026
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using the Fast Coin Converter mobile application. By accessing or using our services, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Sticky Navigation Sidebar */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 px-3">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block px-3 py-2 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-150 font-medium"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Contact Card Widget */}
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
                <h4 className="font-bold text-sm mb-1">Need help?</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                  Have questions about these terms or the application?
                </p>
                <a
                  href="mailto:augusto.dev@proton.me"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  augusto.dev@proton.me
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </aside>

          {/* Legal Text Area */}
          <article className="lg:col-span-3 bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl p-6 sm:p-10 shadow-sm backdrop-blur-sm space-y-10 prose prose-zinc dark:prose-invert max-w-none">
            
            <section id="acceptance" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">1.</span> Acceptance of Terms
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  By installing, downloading, or using the <strong>Fast Coin Converter</strong> mobile application (hereinafter referred to as the &quot;App&quot; or &quot;Service&quot;), you agree to comply with and be bound by these Terms of Service.
                </p>
                <p>
                  If you do not agree with any part of these terms, you must not download, install, or use the App, and you should delete it from your mobile device immediately.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="description" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">2.</span> Description of Service
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Fast Coin Converter is a utility application designed to facilitate currency and coin conversion calculations. The Service provides users with currency exchange rate lookups, offline conversion tools, and calculation saving features.
                </p>
                <p>
                  The App is provided for personal, non-commercial informational use only. The developer reserves the right to modify, suspend, or discontinue any aspect of the App at any time without notice.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="local-data" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">3.</span> Local Data Storage & No Auth
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Fast Coin Converter is designed to respect user privacy and operate with minimal complexity:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>No Account Required:</strong> You do not need to create an account, register, or authenticate to use the App.</li>
                  <li><strong>Local Storage:</strong> All of your application settings, favorited coins, and historical calculation logs are stored locally on your mobile device (using device storage mechanisms). We do not host or transfer this data to any remote servers.</li>
                  <li><strong>Data Risk:</strong> Since your settings and configurations are stored directly on your physical device, uninstalling the App or clearing its local storage will permanently delete this information. We cannot recover lost local configuration data for you.</li>
                </ul>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="monetization" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">4.</span> Monetization & Advertisements
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-4">
                <p>
                  To keep the App available free of charge, it is monetized through advertisements. 
                </p>
                
                {/* Visual Highlight Block */}
                <div className="p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/40 bg-indigo-50/30 dark:bg-indigo-950/10 text-sm">
                  <p className="font-semibold text-indigo-700 dark:text-indigo-400 mb-1 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Advertisement Notice
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Third-party advertising networks (such as Google AdMob) may serve ads within the App. These services may access and use device identifiers (like Apple IDFA or Google GAID) and network details to deliver relevant advertisements. Please refer to our <Link href="/fast-coin-converter/privacy" className="text-indigo-600 dark:text-indigo-400 underline font-medium hover:text-indigo-800">Privacy Policy</Link> for details.
                  </p>
                </div>

                <p>
                  By using this App, you consent to the display of advertisements. You agree that the developer is not responsible for the content of any advertisements displayed, nor for the products or services offered by third-party advertisers.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="intellectual-property" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">5.</span> Intellectual Property
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  The App, including but not limited to its layout, design, graphics, source code, logos, and features, is the intellectual property of <strong>Carlos Vieira</strong> and is protected by copyright, trademark, and other applicable laws.
                </p>
                <p>
                  You are granted a limited, non-exclusive, non-transferable, revocable license to download, install, and use a copy of the App on a mobile device for personal use only. You may not copy, reverse engineer, modify, distribute, or create derivative works based on the App.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="disclaimer" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-red-500 dark:text-red-400">6.</span> Disclaimer of Warranties
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-4">
                
                {/* Warning Alert Banner */}
                <div className="p-4 rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/10 text-sm">
                  <p className="font-semibold text-amber-700 dark:text-amber-400 mb-1 flex items-center gap-1.5">
                    <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Rates and Financial Disclaimer
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    The exchange rates and conversion information provided in the App are for general informational purposes only. Currency rates fluctuate constantly and may contain errors or delays. You should not rely on the information provided in the App for financial, trading, commercial, or investment decisions.
                  </p>
                </div>

                <p>
                  THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE DEVELOPER DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, ACCURATE, OR ERROR-FREE.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="limitation" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-red-500 dark:text-red-400">7.</span> Limitation of Liability
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  IN NO EVENT SHALL THE DEVELOPER (CARLOS VIEIRA) BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, INCURRED BY YOU OR ANY THIRD PARTY, WHETHER IN AN ACTION IN CONTRACT, TORT, OR OTHERWISE, ARISING FROM YOUR ACCESS TO OR USE OF THE APP, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p>
                  YOUR SOLE REMEDY FOR DISSATISFACTION WITH THE APP IS TO STOP USING THE APP AND UNINSTALL IT FROM YOUR MOBILE DEVICE.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="changes" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">8.</span> Changes to Terms
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  The developer reserves the right to revise these Terms of Service at any time. When we make updates, we will revise the &quot;Last Updated&quot; date at the top of this document.
                </p>
                <p>
                  Your continued use of the App following the posting of changes to these terms signifies your acceptance of those changes. We recommend checking this page periodically to stay informed.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="contact" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">9.</span> Contact Information
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  If you have any questions or feedback regarding these Terms of Service, please contact the developer:
                </p>
                <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 mt-4 space-y-2">
                  <p className="font-semibold text-zinc-900 dark:text-white">Carlos Vieira</p>
                  <p className="text-sm">
                    Email: <a href="mailto:augusto.dev@proton.me" className="text-indigo-600 dark:text-indigo-400 hover:underline">augusto.dev@proton.me</a>
                  </p>
                </div>
              </div>
            </section>

          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-900 py-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
        <div className="max-w-6xl mx-auto px-6 space-y-2">
          <p>© {new Date().getFullYear()} Carlos Vieira. All rights reserved.</p>
          <p className="flex justify-center gap-3 text-zinc-400 dark:text-zinc-500">
            <Link href="/fast-coin-converter/terms-of-service" className="hover:text-indigo-500 dark:hover:text-indigo-400 hover:underline">Terms of Service</Link>
            <span>•</span>
            <Link href="/fast-coin-converter/privacy" className="hover:text-indigo-500 dark:hover:text-indigo-400 hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
