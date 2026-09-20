import { z } from 'zod'

export const projectTypes = [
  'SaaS platform',
  'Marketplace',
  'Web application',
  'Mobile app (iOS)',
  'Mobile app (Android)',
  'Mobile app (iOS + Android)',
  'AI product / LLM feature',
  'E-commerce store',
  'Blockchain / Web3',
  'Game / interactive',
  'Other',
] as const

export const budgets = [
  'Under $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
  'Not sure yet',
] as const

export const timelines = ['ASAP', '1–3 months', '3–6 months', '6+ months', 'Flexible'] as const

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(120),
  email: z.string().trim().email('Please enter a valid email address.').max(200),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  // errorMap rather than required_error: an untouched <select> submits '', which
  // is an invalid enum value rather than a missing one, and would otherwise show
  // Zod's raw "Invalid enum value. Expected ..." text to the user.
  projectType: z.enum(projectTypes, {
    errorMap: () => ({ message: 'Please choose what you are building.' }),
  }),
  budget: z.enum(budgets, { errorMap: () => ({ message: 'Please choose a budget range.' }) }),
  timeline: z.enum(timelines, { errorMap: () => ({ message: 'Please choose a timeline.' }) }),
  message: z
    .string()
    .trim()
    .min(20, 'A couple of sentences helps us give a useful answer.')
    .max(4000, 'Please keep it under 4000 characters.'),
  // Honeypot: real users never fill this in.
  website: z.string().max(0).optional().or(z.literal('')),
})

export type ContactInput = z.infer<typeof contactSchema>

export type ContactFieldErrors = Partial<Record<keyof ContactInput, string>>
