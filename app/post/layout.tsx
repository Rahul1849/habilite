import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Health Articles & Surgical Insights',
  description: 'Read our latest articles about laparoscopic surgery, recovery tips, and surgical innovations.',
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

