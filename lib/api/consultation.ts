/**
 * Frontend API client for consultation form submission
 * Handles API calls, loading states, and error handling
 */

export interface ConsultationFormData {
  name: string
  phone: string
  message: string
}

export interface ConsultationResponse {
  success: boolean
  message?: string
  error?: string
  resetTime?: string
}

/**
 * Submit consultation form to the API
 * @param data - Form data containing name, phone, and message
 * @returns Promise with API response
 */
export async function submitConsultation(
  data: ConsultationFormData
): Promise<ConsultationResponse> {
  try {
    const response = await fetch('/api/consultation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name.trim(),
        phone: data.phone.trim(),
        message: data.message.trim(),
      }),
    })

    const result: ConsultationResponse = await response.json()

    if (!response.ok) {
      // Handle specific error cases
      if (response.status === 429) {
        return {
          success: false,
          error: result.error || 'Too many requests. Please try again later.',
          resetTime: result.resetTime,
        }
      }

      return {
        success: false,
        error: result.error || 'Failed to submit consultation request. Please try again.',
      }
    }

    return result
  } catch (error) {
    // Network errors or other fetch failures
    console.error('[Consultation API] Network error:', error)
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    }
  }
}

