# Formspree Setup Instructions

## Recipients
- auntielusbakery@gmail.com (Lyndsi)
- Joey@airfreshmarketing.com (Joey)

## Steps to Create Form
1. Go to https://formspree.io
2. Sign up / Log in
3. Click "New Form"
4. Name it "Auntie Lu Contact Form"
5. Add BOTH email addresses as recipients
6. Copy the form ID (looks like: xrgwkpyz)
7. Update src/components/ContactForm.tsx - replace PLACEHOLDER_ID with the real ID

## Form Fields Configured
- Name (required)
- Email (required)
- Phone (required)
- Event Type (dropdown)
- Event Date
- Number of Guests
- Message

## After Setup
Deploy again: vercel --prod
