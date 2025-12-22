import Image from 'next/image'
import Link from 'next/link'
import { Phone, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react'

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 18}
    height={props.height ?? 18}
    {...props}
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 4.988 3.657 9.127 8.437 9.877-.118-.841-.223-2.13.049-3.048l1.566-6.714c-.296-.568-.47-1.275-.47-2.02 0-1.886 1.094-3.296 2.743-3.296 1.303 0 1.93.978 1.93 2.146 0 1.306-.836 3.263-1.267 5.085-.359 1.513.762 2.743 2.256 2.743 2.717 0 4.785-2.869 4.785-7.014 0-3.668-2.604-6.244-6.311-6.244-4.305 0-6.84 3.196-6.84 6.422 0 1.141.321 1.95.881 2.566.103.11.118.206.087.318l-.283 1.118c-.045.178-.149.229-.341.137-1.275-.594-2.068-2.456-2.068-3.955 0-3.356 2.515-6.428 7.258-6.428 3.827 0 7.024 2.729 7.024 6.386 0 3.92-2.472 7.08-5.907 7.08-1.153 0-2.239-.623-2.602-1.361l-.706 2.688c-.277 1.055-1.004 2.356-1.492 3.146C10.058 23.861 11.01 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Z" />
  </svg>
)

type DoctorInfoCardProps = {
  authorImage: string
  category?: string
}

const laparoscopicServices = [
  { label: 'Gallbladder Surgery', href: '/laparoscopic-surgery/gallbladder-surgery' },
  { label: 'CBD Stones Removal', href: '/cbd-stone-treatment-in-delhi' },
  { label: 'Gallbladder Polyps', href: '/gallbladder-polyps-treatment-in-delhi' },
  { label: 'Hernia Surgery', href: '/laparoscopic-surgery/hernia-surgery' },
  { label: 'Appendix Surgery', href: '/laparoscopic-surgery/appendix-surgery' },
  { label: 'GERD & Hiatus Hernia', href: '/laparoscopic-surgery/gerd-hiatus-hernia' },
  { label: 'Rectal Prolapse Surgery', href: '/laparoscopic-surgery/rectal-prolapse-surgery' },
]

const bariatricServices = [
  { label: 'Bariatric Surgery', href: '/bariatric-surgeon-in-delhi-india' },
  { label: 'Surgery for Diabetes', href: '/surgery-for-diabetes' },
  { label: 'IntraGastric Balloon', href: '/endoscopic-intra-gastric-balloon' },
  { label: 'Medical Weight Loss Program', href: '/medical-weight-loss-program' },
]

const getServiceLinks = (category?: string) => {
  if (!category) return laparoscopicServices
  const normalized = category.toLowerCase()
  if (normalized.includes('bariatric') || normalized.includes('weight') || normalized.includes('obesity')) {
    return bariatricServices
  }
  return laparoscopicServices
}

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/habiliteclinics/', icon: Facebook },
  { label: 'X (Twitter)', href: 'https://x.com/habilitecare', icon: Twitter },
  { label: 'Pinterest', href: 'https://in.pinterest.com/habiliteclinics/', icon: PinterestIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@habiliteclinics', icon: Youtube },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/habiliteclinics', icon: Linkedin },
]

export default function DoctorInfoCard({ authorImage, category }: DoctorInfoCardProps) {
  const serviceLinks = getServiceLinks(category)

  return (
    <div className="my-10 rounded-3xl border border-gray-100 bg-white shadow-sm p-6 md:p-8 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
        <div className="relative w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-primary-50 shadow-md flex-shrink-0">
          <Image src={authorImage} alt="Dr. Kapil Agrawal" fill className="object-cover" sizes="112px" />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <p className="text-xs font-semibold tracking-[0.3em] text-primary-600 uppercase">Consult with</p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Dr. Kapil Agrawal</h3>
          <p className="text-gray-600 mt-2">
            Senior Consultant - Laparoscopic & Robotic Surgeon at Apollo Hospitals, Delhi NCR. 23+ years experience and
            7000+ advanced procedures with enhanced recovery care.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 justify-center lg:justify-start">
            {serviceLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold hover:bg-primary-100 transition-colors"
              >
                {service.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start text-primary-800 font-semibold">
            <a href="tel:+919910024564" className="inline-flex items-center gap-2 hover:text-primary-600 transition-colors">
              <Phone size={16} /> +91-99100-24564
            </a>
            <span className="hidden lg:inline text-gray-300">|</span>
            <a href="tel:+919999456455" className="inline-flex items-center gap-2 hover:text-primary-600 transition-colors">
              <Phone size={16} /> +91-99994-56455
            </a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
            <span className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase">Follow</span>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:text-primary-600 hover:border-primary-200 flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

