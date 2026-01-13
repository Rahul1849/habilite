import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import React from 'react'

// Import all hernia page components
import BestInguinalHerniaSurgeonPage from '@/app/best-inguinal-hernia-surgeon-in-delhi/page'
import BestFemoralHerniaSurgeonPage from '@/app/best-femoral-hernia-surgeon-in-delhi/page'
import BestUmbilicalHerniaSurgeonPage from '@/app/best-umbilical-hernia-surgeon-in-delhi/page'
import BestEpigastricHerniaSurgeonPage from '@/app/best-epigastric-hernia-surgeon-in-delhi/page'

type Props = {
  params: Promise<{ type: string }>
}

// Map URL types to page components
const herniaTypeMap: Record<string, React.ComponentType> = {
  'inguinal-hernia-surgery': BestInguinalHerniaSurgeonPage,
  'femoral-hernia-surgery': BestFemoralHerniaSurgeonPage,
  'umbilical-hernia-surgery': BestUmbilicalHerniaSurgeonPage,
  'epigastric-hernia-surgery': BestEpigastricHerniaSurgeonPage,
}

// Map types to metadata
const metadataMap: Record<string, Metadata> = {
  'inguinal-hernia-surgery': {
    title: 'Best Inguinal Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
    description: 'Dr. Kapil Agrawal is the best inguinal hernia surgeon in Delhi with 23+ years of experience. Expert in laparoscopic and robotic inguinal hernia repair with high-quality mesh, painless surgery, and 24-hour discharge.',
    alternates: {
      canonical: 'https://www.habiliteclinics.com/best-hernia-surgeon-in-delhi/inguinal-hernia-surgery',
    },
  },
  'femoral-hernia-surgery': {
    title: 'Best Femoral Hernia Treatment in Delhi NCR - Dr. Kapil Agrawal',
    description: 'Dr. Kapil Agrawal is the best femoral hernia surgeon in Delhi with 23+ years of experience. Expert in laparoscopic and robotic femoral hernia repair with high-quality mesh, painless surgery, and 24-hour discharge.',
    alternates: {
      canonical: 'https://www.habiliteclinics.com/best-hernia-surgeon-in-delhi/femoral-hernia-surgery',
    },
  },
  'umbilical-hernia-surgery': {
    title: 'Best Umbilical Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
    description: 'Dr. Kapil Agrawal is the best umbilical hernia surgeon in Delhi with 23+ years of experience. Expert in laparoscopic and robotic umbilical hernia repair with high-quality mesh, painless surgery, and 24-hour discharge.',
    alternates: {
      canonical: 'https://www.habiliteclinics.com/best-hernia-surgeon-in-delhi/umbilical-hernia-surgery',
    },
  },
  'epigastric-hernia-surgery': {
    title: 'Best Epigastric Hernia Surgeon in Delhi - Dr. Kapil Agrawal',
    description: 'Dr. Kapil Agrawal is the best epigastric hernia surgeon in Delhi with 23+ years of experience. Expert in laparoscopic and robotic epigastric hernia repair with high-quality mesh, painless surgery, and 24-hour discharge.',
    alternates: {
      canonical: 'https://www.habiliteclinics.com/best-hernia-surgeon-in-delhi/epigastric-hernia-surgery',
    },
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params
  const metadata = metadataMap[type]
  
  if (!metadata) {
    return {
      title: 'Hernia Surgery - Dr. Kapil Agrawal',
      description: 'Expert hernia surgery by Dr. Kapil Agrawal in Delhi',
    }
  }
  
  return metadata
}

export default async function HerniaTypePage({ params }: Props) {
  const { type } = await params
  const PageComponent = herniaTypeMap[type]
  
  if (!PageComponent) {
    notFound()
  }
  
  return <PageComponent />
}
