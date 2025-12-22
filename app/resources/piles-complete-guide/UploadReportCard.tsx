'use client'

import { useState } from 'react'
import { UploadCloud, FileText, CheckCircle2, RefreshCcw, Loader2 } from 'lucide-react'
import { toast } from '@/lib/utils/toast'
import { redirectToWhatsApp } from '@/lib/utils/whatsapp'

type Step = 'initial' | 'uploaded' | 'submitted'

export default function UploadReportCard() {
  const [fileName, setFileName] = useState('')
  const [phone, setPhone] = useState('')
  const [step, setStep] = useState<Step>('initial')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      setStep('uploaded')
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!phone.trim()) {
      toast.error('Please enter your phone number')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          name: 'Report Upload',
          phone: phone.trim(),
          subject: 'Report Upload - Piles Treatment',
          message: `Report/Image uploaded for review: ${fileName || 'File uploaded'}. Please contact the patient at ${phone.trim()} to discuss next steps.`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStep('submitted')
        toast.success(result.message || 'Your report has been submitted successfully!')
        
        // Redirect to WhatsApp with form details
        setTimeout(() => {
          redirectToWhatsApp({
            formType: 'contact',
            name: 'Report Upload',
            phone: phone.trim(),
            subject: 'Report Upload - Piles Treatment',
            message: `Report/Image uploaded for review: ${fileName || 'File uploaded'}. Please contact me to discuss next steps.`,
          })
        }, 1000) // Small delay to show success message
      } else {
        toast.error(result.error || 'Failed to submit report. Please try again.')
      }
    } catch (error) {
      console.error('Report upload submission error:', error)
      toast.error('An unexpected error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFileName('')
    setPhone('')
    setStep('initial')
  }

  return (
    <div className="rounded-3xl bg-white shadow-xl border border-gray-100 p-6 sm:p-8 flex flex-col gap-6">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-[#ecfeff] flex items-center justify-center text-[#0891b2]">
          <UploadCloud size={26} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Upload Reports or Images for Review</h3>
          <p className="text-gray-600 mt-2">
            Share colonoscopy, ultrasonography, MRI fistulograms, or photos (kept confidential) so Dr. Kapil can plan the safest piles treatment.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-[#0891b2]/40 bg-[#f8fbff] px-4 py-6 flex flex-col gap-4">
        <label className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl border border-[#0891b2] text-[#0891b2] font-semibold cursor-pointer hover:bg-white transition-colors">
          <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={handleFileChange} className="hidden" />
          <FileText size={18} />
          {fileName ? 'Upload another file' : 'Choose file to upload'}
        </label>
        {fileName && (
          <div className="text-sm text-gray-500 text-center">
            Selected file:{' '}
            <span className="font-semibold text-gray-800 truncate inline-block max-w-full align-bottom">{fileName}</span>
          </div>
        )}
        {step === 'uploaded' && (
          <div className="flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-4 py-3 text-sm font-medium shadow">
            <CheckCircle2 size={18} className="text-emerald-300" />
            File received. Verify your phone so our colorectal nurse can reach out.
          </div>
        )}
        {step === 'submitted' && (
          <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 text-emerald-800 px-4 py-3 text-sm font-semibold">
            <CheckCircle2 size={18} />
            Thank you! Expect a callback within a few hours to discuss next steps.
          </div>
        )}
      </div>

      <div className="space-y-4">
        {step === 'initial' && (
          <p className="text-sm text-gray-500">Need help? WhatsApp your report/photo to +91 99994 56455.</p>
        )}

        {step === 'uploaded' && (
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700">Confirm contact number for updates</label>
            <input
              type="tel"
              required
              placeholder="+91 9XXXXXXXXX"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/30 transition"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-[#0891b2] text-white font-semibold py-3 hover:bg-[#06b6d4] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  <span>Submitting...</span>
                </>
              ) : (
                'Submit Report'
              )}
            </button>
          </form>
        )}

        {step === 'submitted' && (
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0891b2] hover:text-[#06b6d4] transition"
          >
            <RefreshCcw size={16} />
            Upload another report
          </button>
        )}
      </div>
    </div>
  )
}


