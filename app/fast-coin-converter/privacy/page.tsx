import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Fast Coin Converter",
  description: "Privacy Policy for Fast Coin Converter app. Learn how we handle your data, local storage, and ad personalization.",
};

const SECTIONS = [
  { id: "introduction", title: "1. Introduction" },
  { id: "data-collection", title: "2. Information We Collect" },
  { id: "local-storage", title: "3. Local Data Storage" },
  { id: "advertising", title: "4. Advertising Networks" },
  { id: "data-security", title: "5. Security of Your Data" },
  { id: "childrens-privacy", title: "6. Children's Privacy" },
  { id: "user-control", title: "7. Your Rights and Choices" },
  { id: "changes", title: "8. Policy Changes" },
  { id: "contact", title: "9. Contact Information" },
];

export default function PrivacyPolicy() {
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
              className="px-4 py-1.5 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150"
            >
              Terms of Service
            </Link>
            <Link
              href="/fast-coin-converter/privacy"
              className="px-4 py-1.5 rounded-md bg-white dark:bg-zinc-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Last Updated: May 30, 2026
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Your privacy is highly important to us. This Privacy Policy describes how we handle information in the Fast Coin Converter mobile application.
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
            
            <section id="introduction" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">1.</span> Introduction
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  <strong>Carlos Vieira</strong> (referred to as &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy details our policies and procedures regarding the collection, use, and disclosure of information from users of the **Fast Coin Converter** mobile application (the &quot;App&quot;).
                </p>
                <p>
                  By downloading, installing, or using this App, you consent to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="data-collection" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">2.</span> Information We Collect
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-4">
                <p>
                  We prioritize user data minimization. Our collection policies are as follows:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  {/* Card 1: PII */}
                  <div className="p-5 rounded-xl border border-emerald-100 dark:border-emerald-950/60 bg-emerald-50/10 dark:bg-emerald-950/5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-zinc-950 dark:text-white text-sm mb-1">No Personal Data</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      We do not collect any personal data such as names, email addresses, phone numbers, or account usernames. There is no sign-up or registration required.
                    </p>
                  </div>

                  {/* Card 2: Server Logs */}
                  <div className="p-5 rounded-xl border border-indigo-100 dark:border-indigo-950/60 bg-indigo-50/10 dark:bg-indigo-950/5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-zinc-950 dark:text-white text-sm mb-1">No Remote Servers</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      We do not transmit your local configurations, favorite coins list, or conversion histories to any remote servers. This information remains completely private to you.
                    </p>
                  </div>
                </div>

                <p>
                  If you contact us via email for support, we will only use your email address and any message details you provide to resolve your support inquiry. We will not use this email address for marketing purposes or share it with third parties.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="local-storage" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">3.</span> Local Data Storage
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  To provide you with custom settings, offline conversions, and a smooth user experience, the App stores certain configuration parameters directly on your mobile device.
                </p>
                <p>
                  This local data includes:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Your preferred base and target currencies.</li>
                  <li>Your pinned or favorited coin list.</li>
                  <li>Historical calculation lists (if applicable).</li>
                </ul>
                <p>
                  This data is stored utilizing secure on-device storage tools (such as native key-value storage or SQLite databases). Since this data is stored entirely on your device, deleting the App will clear this data.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="advertising" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">4.</span> Advertising Networks (Third-Party Services)
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  We display advertisements within the App to support the ongoing maintenance and development of the software. These advertisements are served by third-party advertising networks.
                </p>
                <p>
                  These third-party ad networks (for example, Google AdMob) may collect and process device-specific information to serve and personalize advertisements. This information may include:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Device Identifiers:</strong> Advertising IDs (Apple IDFA, Google GAID/AAID).</li>
                  <li><strong>Technical Specs:</strong> IP address, operating system, carrier details, and screen size.</li>
                  <li><strong>Location Data:</strong> Coarse or general location information based on IP address.</li>
                  <li><strong>Interaction Logs:</strong> Details on which advertisements you viewed, clicked, or interacted with inside the App.</li>
                </ul>
                <p>
                  We recommend that you review the privacy policies of the third-party providers we work with:
                </p>
                <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 text-sm mt-3">
                  <span className="font-semibold text-zinc-900 dark:text-white block mb-1">Ad Network Partners:</span>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        Google Play Services / AdMob Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="data-security" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">5.</span> Security of Your Data
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Because your data is stored locally on your device, its security rests largely on the security controls of your physical device (e.g., PINs, biometric authentication, device encryption). We encourage you to keep your mobile operating system updated and secure.
                </p>
                <p>
                  While we do not host your personal data, we take reasonable technical precautions within the App&apos;s source code to ensure local storage mechanisms are safe from cross-application data leaks.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="childrens-privacy" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">6.</span> Children&apos;s Privacy
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Our App is a general utility calculator tool and is safe for users of all ages. We do not knowingly collect, request, or maintain personally identifiable information from children under the age of 13.
                </p>
                <p>
                  If you are a parent or guardian and become aware that your child has provided us with personal information (such as sending us an email containing personal details), please contact us, and we will delete that data immediately.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="user-control" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">7.</span> Your Rights and Choices
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Depending on your jurisdiction (such as the EU under GDPR, or California under CCPA), you have rights regarding privacy and data collection:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <strong>Opt-Out of Personalized Ads:</strong> You can configure your device to limit or disable ad tracking:
                    <ul className="list-circle pl-5 mt-1 space-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                      <li>iOS: Navigate to <em>Settings &gt; Privacy &amp; Security &gt; Tracking</em>.</li>
                      <li>Android: Navigate to <em>Settings &gt; Privacy &gt; Ads &gt; Opt out of Ads Personalization</em>.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Delete Local Data:</strong> You can wipe all preferences and data by navigating to your device settings, choosing the App, and selecting &quot;Clear Data/Storage&quot;, or by uninstalling the App completely.
                  </li>
                </ul>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="changes" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">8.</span> Privacy Policy Changes
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  We may update our Privacy Policy from time to time to reflect operational, legal, or regulatory modifications.
                </p>
                <p>
                  Any updates will be posted to this page with the modified &quot;Last Updated&quot; date. We advise you to review this page periodically for any changes.
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
                  If you have any questions, concerns, or requests regarding this Privacy Policy, please contact the developer:
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
