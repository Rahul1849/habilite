import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Habilite Clinics',
  description:
    'Review the Terms & Conditions for using the Habilite Clinics website, including usage guidelines, disclaimers, intellectual property, and legal rights.',
  alternates: {
    canonical: 'https://www.habiliteclinics.com/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="pt-16 pb-20">
      <div className="bg-gradient-primary py-14 text-center">
        <div className="container-custom">
          <p className="uppercase tracking-[0.4em] text-xs text-white/70 mb-3">Terms &amp; Conditions</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            Please read these Terms &amp; Conditions carefully before using our website or booking a consultation with Habilite Clinics.
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
          <section>
            <p className="text-sm font-semibold text-[#0891b2] mb-2">Last Updated: November 2025</p>
            <p>
              By accessing or using the official website of Habilite Clinics (“we”, “our”, “us”), you agree to comply with the Terms &amp; Conditions
              outlined below. If you do not agree with any part of these terms, please discontinue use of the website immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of the Website</h2>
            <p>
              You agree to use the website for lawful purposes only. You must not post, transmit, or upload any harmful, offensive, illegal, or
              unauthorized content. You also agree not to interfere with the proper functioning of the site, attempt hacking, or upload malicious files.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Information Disclaimer</h2>
            <p>
              All content on this website—including articles, videos, graphics, and advice—is for general informational purposes only. It is not a
              substitute for professional medical consultation, diagnosis, or treatment. Always consult Dr. Kapil Agrawal or a qualified healthcare
              professional for medical concerns. Do not rely solely on website content for medical decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointments and Services</h2>
            <p>
              Booking an appointment through the website does not guarantee availability. We reserve the right to confirm, modify, or cancel appointments
              based on doctor schedules, medical priorities, or other operational considerations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy of Information</h2>
            <p>
              We aim to keep all information accurate and current. However, we do not guarantee the completeness, reliability, or accuracy of the content.
              Habilite Clinics will not be liable for any losses or damages arising from reliance on the information provided on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p>
              Our website may include links to external websites for additional resources. We are not responsible for the content, accuracy, or practices
              of third-party sites. Accessing external links is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
            <p>
              All website content—including text, images, graphics, videos, logos, and design elements—is the property of Habilite Clinics and protected
              under copyright laws. You may not copy, reproduce, distribute, or modify any content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Do not attempt to hack, damage, or disrupt the website.</li>
              <li>Do not upload harmful files such as viruses, malware, or scripts.</li>
              <li>Do not scrape or collect data without authorization.</li>
              <li>Do not misrepresent yourself when contacting us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p>
              Habilite Clinics is not responsible for any direct or indirect damages arising from website use, technical issues, downtime, data loss,
              errors, or inaccuracies. Your use of the website is entirely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
            <p>
              We may update these Terms &amp; Conditions at any time. Changes are effective immediately upon posting. Continued use of the website
              indicates your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p>
              These Terms &amp; Conditions are governed by the laws of India. Any disputes will be resolved exclusively in the courts of Delhi, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p>If you have questions regarding these Terms &amp; Conditions, contact:</p>
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

