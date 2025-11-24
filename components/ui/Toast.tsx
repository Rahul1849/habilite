'use client'

import { useEffect, useState } from 'react'
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { subscribeToToasts, removeToast, type Toast } from '@/lib/utils/toast'

export default function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const unsubscribe = subscribeToToasts(setToasts)
    return unsubscribe
  }, [])

  if (toasts.length === 0) return null

  const getIcon = (type: Toast['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="text-green-600" size={20} />
      case 'error':
        return <AlertCircle className="text-red-600" size={20} />
      case 'warning':
        return <AlertTriangle className="text-yellow-600" size={20} />
      default:
        return <Info className="text-blue-600" size={20} />
    }
  }

  const getBgColor = (type: Toast['type']) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200'
      case 'error':
        return 'bg-red-50 border-red-200'
      case 'warning':
        return 'bg-yellow-50 border-yellow-200'
      default:
        return 'bg-blue-50 border-blue-200'
    }
  }

  return (
    <div className="fixed top-4 right-4 z-[9999] space-y-2 max-w-md w-full sm:w-auto">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`${getBgColor(toast.type)} border rounded-lg shadow-lg p-4 flex items-start gap-3 animate-in slide-in-from-right`}
        >
          <div className="flex-shrink-0 mt-0.5">{getIcon(toast.type)}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">{toast.message}</p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close notification"
          >
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  )
}

