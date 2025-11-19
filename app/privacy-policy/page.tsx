import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Habilite Clinics',
  description:
    'Understand how Habilite Clinics collects, uses, stores, and protects your personal information when you visit our website or request healthcare services.',
  alternates: {
    canonical: 'https://www.habiliteclinics.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16 pb-20">
      <div className="bg-gradient-primary py-14 text-center">
        <div className="container-custom">
          <p className="uppercase tracking-[0.4em] text-xs text-white/70 mb-3">Privacy Policy</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            We are committed to safeguarding your personal information and maintaining transparency in how we use it.
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
          <section>
            <p className="text-sm font-semibold text-[#0891b2] mb-2">Last Updated: November 2025</p>
            <p>
              Habilite Clinics (“we”, “our”, “us”) is dedicated to protecting your personal information and ensuring it is handled safely. This Privacy
              Policy explains how we collect, use, store, and protect your information when you use our website or contact us for healthcare services. By
              using our website, you agree to the terms described below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1.1 Personal Information</h3>
                <p>
                  When you fill forms or contact us, we may collect your name, email address, phone number, symptoms or message you share, and any
                  appointment-related details.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1.2 Automatically Collected Information</h3>
                <p>
                  When you visit our website, we automatically collect your IP address, device type, browser type, pages visited, time spent on the
                  website, and referring URLs. This helps us improve performance and user experience.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1.3 Cookies</h3>
                <p>
                  We use essential cookies for basic site functionality, performance, and security. We do not use advertising or tracking cookies.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p>
              We use your information to respond to appointment requests, improve website performance, enhance user experience, provide medical-related
              information, and ensure website security. We do not sell or trade your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing of Information</h2>
            <p>
              We may share your information with our internal medical team, trusted service providers (such as hosting or analytics), or law enforcement
              if legally required. All third-party providers follow strict privacy and security standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage & Security</h2>
            <p>
              We use industry-standard security practices to protect your data from unauthorized access, loss, or misuse. However, no online system is
              completely secure, and we cannot guarantee absolute protection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p>
              You may request to access, update, correct, or delete your personal information. You may also withdraw consent at any time. To submit a
              request, email us at <a href="mailto:contact@habiliteclinics.com" className="text-[#0891b2] font-semibold">contact@habiliteclinics.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children’s Privacy</h2>
            <p>
              Our website is not intended for children under 13. We do not knowingly collect data from children. If you believe a child has provided
              information, contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links</h2>
            <p>
              Our website may link to external websites. We are not responsible for their content or privacy practices. Please review their policies
              before sharing any information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy occasionally. When we do, we will update the “Last Updated” date at the top of this page. We encourage you
              to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p>If you have any privacy-related questions or requests, contact:</p>
            <div className="mt-4 space-y-1 text-gray-900 font-semibold">
              <p>Habilite Clinics</p>
              <p>Delhi, India</p>
              <p>
                Email:{' '}
                <a href="mailto:contact@habiliteclinics.com" className="text-[#0891b2] font-bold">
                  contact@habiliteclinics.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

