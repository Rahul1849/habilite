/**
 * Reusable dynamic imports for service pages
 * These optimizations improve FCP, LCP, and TBT by deferring heavy components
 */

import dynamic from 'next/dynamic'

export const getOptimizedComponents = () => ({
  ConsultationForm: dynamic(
    () => import('@/components/forms/ConsultationForm'),
    {
      ssr: true,
      loading: () => (
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 min-h-[400px] animate-pulse" />
      ),
    }
  ),

  CallUsButton: dynamic(
    () => import('@/components/lead-generation/CallUsButton'),
    {
      ssr: true,
    }
  ),

  CostCalculator: dynamic(
    () => import('@/components/lead-generation/CostCalculator'),
    {
      ssr: true,
      loading: () => (
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 min-h-[300px] animate-pulse" />
      ),
    }
  ),

  PostOperativeCare: dynamic(
    () => import('@/components/lead-generation/PostOperativeCare'),
    {
      ssr: true,
    }
  ),

  WhatsAppExpertChat: dynamic(
    () => import('@/components/lead-generation/WhatsAppExpertChat'),
    {
      ssr: false,
    }
  ),

  RecoveryTimeline: dynamic(
    () =>
      import('@/components/services/RecoveryTimeline').then((mod) => ({
        default: mod.RecoveryTimeline,
      })),
    {
      ssr: true,
    }
  ),

  RelatedBlogs: dynamic(
    () => import('@/components/services/RelatedBlogs'),
    {
      ssr: true,
    }
  ),
})

