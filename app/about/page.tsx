import { redirect } from 'next/navigation'

export { metadata } from '../habilite-clinic/page'

export default function AboutPage() {
  redirect('/habilite-clinic')
}

