# PayU Payment Gateway - Testing Checklist

## ✅ Pre-Testing Checklist

### 1. Environment Variables in Vercel

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

#### Required Variables:

| Variable Name | Value | Environment | Status |
|--------------|-------|-------------|--------|
| `PAYU_MERCHANT_KEY` | Your PayU merchant key | Production, Preview, Development | ⬜ |
| `PAYU_MERCHANT_SALT` | Your PayU merchant salt | Production, Preview, Development | ⬜ |
| `PAYU_BASE_URL` | `https://test.payu.in` (test) or `https://secure.payu.in` (prod) | Production, Preview, Development | ⬜ |
| `NEXT_PUBLIC_BASE_URL` | `https://habilite-6qce.vercel.app` | Production, Preview, Development | ⬜ |
| `RESEND_API_KEY` | Your Resend API key | Production, Preview, Development | ⬜ |
| `RESEND_FROM_EMAIL` | Your sender email | Production, Preview, Development | ⬜ |
| `RESEND_TO_EMAIL` | Your recipient email | Production, Preview, Development | ⬜ |

**Important:** 
- ✅ Add to **all three environments** (Production, Preview, Development)
- ✅ After adding, **redeploy** your application

### 2. PayU Account Setup

- [ ] PayU merchant account created
- [ ] Merchant Key obtained from PayU dashboard
- [ ] Merchant Salt obtained from PayU dashboard
- [ ] Test credentials configured (for testing)
- [ ] Production credentials ready (for go-live)

### 3. Deployment Verification

- [ ] Code deployed to Vercel
- [ ] Environment variables added
- [ ] Application redeployed after adding env vars
- [ ] No build errors in Vercel logs

### 4. Testing Steps

#### Test 1: Appointment Booking Payment
1. [ ] Navigate to `/appointment`
2. [ ] Fill in appointment form (Name, Phone, Email, Date)
3. [ ] Click "Continue to Booking"
4. [ ] Click "Pay Online" button
5. [ ] Verify redirect to PayU payment page
6. [ ] Complete payment with test credentials
7. [ ] Verify redirect to `/payment/success`
8. [ ] Check email for payment confirmation

#### Test 2: Video Consultation Payment
1. [ ] Navigate to `/video-consultation`
2. [ ] Fill in consultation form (Name, Phone, Email, Date)
3. [ ] Click "Continue to Payment"
4. [ ] Click "Pay Online" button
5. [ ] Verify redirect to PayU payment page
6. [ ] Complete payment with test credentials
7. [ ] Verify redirect to `/payment/success`
8. [ ] Check email for payment confirmation

#### Test 3: Payment Failure
1. [ ] Initiate a payment
2. [ ] Cancel or fail the payment on PayU page
3. [ ] Verify redirect to `/payment/failure`
4. [ ] Verify error message is displayed

### 5. Common Issues & Solutions

#### Issue: "Payment gateway configuration error"
- **Solution:** Check that `PAYU_MERCHANT_KEY` and `PAYU_MERCHANT_SALT` are set in Vercel

#### Issue: "Base URL not configured"
- **Solution:** Ensure `NEXT_PUBLIC_BASE_URL` is set to your Vercel URL

#### Issue: Payment page not loading
- **Solution:** Check `PAYU_BASE_URL` is set correctly (`https://test.payu.in` for testing)

#### Issue: Email not received after payment
- **Solution:** Verify `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `RESEND_TO_EMAIL` are configured

#### Issue: Hash verification failed
- **Solution:** Double-check `PAYU_MERCHANT_KEY` and `PAYU_MERCHANT_SALT` match your PayU dashboard

### 6. PayU Test Credentials

For testing, use PayU test mode:
- **Test URL:** `https://test.payu.in`
- **Test Cards:** Use PayU test card numbers from their documentation
- **Test UPI:** Use PayU test UPI IDs

### 7. Production Checklist (Before Going Live)

- [ ] All tests passed in test mode
- [ ] `PAYU_BASE_URL` changed to `https://secure.payu.in`
- [ ] Production PayU credentials configured
- [ ] `NEXT_PUBLIC_BASE_URL` set to production domain
- [ ] Email notifications working
- [ ] Payment success/failure pages working correctly

## 🚀 Ready to Test?

Once all checkboxes above are marked, you're ready to test!

**First Test:**
1. Go to: `https://habilite-6qce.vercel.app/appointment`
2. Fill the form and try making a test payment
3. Check Vercel function logs if anything fails

**Check Logs:**
- Vercel Dashboard → Your Project → **Functions** tab
- Look for `/api/payu/generate-hash` and `/api/payu/verify` logs

