'use client'

import { useState } from 'react'
import { UploadCloud, FileText, CheckCircle2, RefreshCcw } from 'lucide-react'

type Step = 'initial' | 'uploaded' | 'otpSent' | 'verified'

export default function UploadReportCard() {
  const [fileName, setFileName] = useState('')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<Step>('initial')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      setStep('uploaded')
    }
  }

  const handleSendOtp = (event: React.FormEvent) => {
    event.preventDefault()
    if (!phone.trim()) return
    setStep('otpSent')
  }

  const handleVerifyOtp = (event: React.FormEvent) => {
    event.preventDefault()
    if (!otp.trim()) return
    setStep('verified')
  }

  const resetForm = () => {
    setFileName('')
    setPhone('')
    setOtp('')
    setStep('initial')
  }

  return (
    <div className="rounded-3xl bg-white shadow-xl border border-gray-100 p-6 sm:p-8 flex flex-col gap-6">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-[#ecfeff] flex items-center justify-center text-[#0891b2]">
          <UploadCloud size={26} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Upload Your Health Report for Personalised Coaching</h3>
          <p className="text-gray-600 mt-2">
            PDF / JPG / PNG (max 5 MB). Share recent lab tests, DEXA scans, or body composition analyses for a tailored weight plan.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-[#0891b2]/40 bg-[#f8fbff] px-4 py-6 flex flex-col gap-4">
        <label className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl border border-[#0891b2] text-[#0891b2] font-semibold cursor-pointer hover:bg-white transition-colors">
          <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={handleFileChange} className="hidden" />
          <FileText size={18} />
          {fileName ? 'Upload another report' : 'Choose file to upload'}
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
            Report received. Verify your phone so our metabolic coach can share insights.
          </div>
        )}
        {step === 'verified' && (
          <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 text-emerald-800 px-4 py-3 text-sm font-semibold">
            <CheckCircle2 size={18} />
            Thank you! Your report is queued for analysis. Expect a call within 24 hours.
          </div>
        )}
      </div>

      <div className="space-y-4">
        {step === 'initial' && (
          <p className="text-sm text-gray-500">Need help uploading? WhatsApp your report to +91 99994 56455.</p>
        )}

        {step === 'uploaded' && (
          <form onSubmit={handleSendOtp} className="space-y-3">
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
              className="w-full rounded-2xl bg-[#0891b2] text-white font-semibold py-3 hover:bg-[#06b6d4] transition"
            >
              Send OTP
            </button>
          </form>
        )}

        {step === 'otpSent' && (
          <form onSubmit={handleVerifyOtp} className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 size={16} className="text-emerald-500" />
              OTP sent to {phone}. Enter it below to confirm.
            </div>
            <input
              type="text"
              required
              maxLength={6}
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-center tracking-[0.5em] text-lg font-semibold focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/30 transition"
            />
            <button
              type="submit"
              className="w-full rounded-2xl bg-[#0891b2] text-white font-semibold py-3 hover:bg-[#06b6d4] transition"
            >
              Verify & Confirm Submission
            </button>
          </form>
        )}

        {step === 'verified' && (
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


