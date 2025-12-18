/**
 * PayU Payment Gateway Types
 * Type definitions for PayU integration
 */

export type PaymentType = 'appointment' | 'video-consultation' | 'consultation'

export interface PayUPaymentRequest {
  txnid: string
  amount: number
  firstname: string
  email: string
  phone: string
  productinfo: string
  surl: string // Success URL
  furl: string // Failure URL
  paymentType: PaymentType
  // Additional metadata
  appointmentDate?: string
  category?: string
  query?: string
}

export interface PayUHashRequest {
  txnid: string
  amount: number
  productinfo: string
  firstname: string
  email: string
  phone: string
  surl: string
  furl: string
}

export interface PayUHashResponse {
  hash: string
  key: string
  txnid: string
  amount: string
  productinfo: string
  firstname: string
  email: string
  phone: string
  surl: string
  furl: string
  service_provider: string
}

export interface PayUCallbackData {
  txnid: string
  amount: string
  productinfo: string
  firstname: string
  email: string
  phone: string
  status: string
  hash: string
  // Additional PayU fields
  mihpayid?: string
  mode?: string
  bank_ref_num?: string
  bankcode?: string
  error?: string
  error_Message?: string
  PG_TYPE?: string
  cardnum?: string
  name_on_card?: string
  cardhash?: string
  net_amount_debit?: string
  discount?: string
  addedon?: string
  payment_source?: string
  payment_mode?: string
}

export interface PayUVerificationResponse {
  success: boolean
  verified: boolean
  message: string
  transactionId?: string
  amount?: number
  status?: string
  error?: string
}

