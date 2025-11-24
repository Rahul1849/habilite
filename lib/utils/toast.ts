/**
 * Simple toast notification utility
 * Can be replaced with a toast library like react-hot-toast or sonner
 */

export type ToastType = 'success' | 'error' | 'info' | 'warning'

export interface Toast {
  id: string
  type: ToastType
  message: string
  duration?: number
}

let toastListeners: Array<(toasts: Toast[]) => void> = []
let toasts: Toast[] = []

function notifyListeners() {
  toastListeners.forEach((listener) => listener([...toasts]))
}

export function showToast(
  message: string,
  type: ToastType = 'info',
  duration: number = 5000
): string {
  const id = Math.random().toString(36).substring(2, 9)
  const toast: Toast = { id, type, message, duration }

  toasts.push(toast)
  notifyListeners()

  // Auto-remove after duration
  if (duration > 0) {
    setTimeout(() => {
      removeToast(id)
    }, duration)
  }

  return id
}

export function removeToast(id: string) {
  toasts = toasts.filter((t) => t.id !== id)
  notifyListeners()
}

export function clearToasts() {
  toasts = []
  notifyListeners()
}

export function subscribeToToasts(callback: (toasts: Toast[]) => void) {
  toastListeners.push(callback)
  // Immediately call with current toasts
  callback([...toasts])

  // Return unsubscribe function
  return () => {
    toastListeners = toastListeners.filter((listener) => listener !== callback)
  }
}

// Convenience functions
export const toast = {
  success: (message: string, duration?: number) => showToast(message, 'success', duration),
  error: (message: string, duration?: number) => showToast(message, 'error', duration || 7000),
  info: (message: string, duration?: number) => showToast(message, 'info', duration),
  warning: (message: string, duration?: number) => showToast(message, 'warning', duration),
}

