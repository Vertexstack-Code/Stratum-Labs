'use client'

import { useState, type FormEvent } from 'react'
import { site } from '@/content/site'
import {
  budgets,
  contactSchema,
  projectTypes,
  timelines,
  type ContactFieldErrors,
  type ContactInput,
} from '@/lib/contact-schema'
import { ArrowRightIcon, CheckIcon } from '@/components/ui/Icons'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const emptyForm: ContactInput = {
  name: '',
  email: '',
  company: '',
  phone: '',
  projectType: '' as ContactInput['projectType'],
  budget: '' as ContactInput['budget'],
  timeline: '' as ContactInput['timeline'],
  message: '',
  website: '',
}

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(emptyForm)
  const [errors, setErrors] = useState<ContactFieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [formError, setFormError] = useState<string | null>(null)

  function update<K extends keyof ContactInput>(key: K, value: ContactInput[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev))
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormError(null)

    const parsed = contactSchema.safeParse(values)
    if (!parsed.success) {
      const fieldErrors: ContactFieldErrors = {}
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactInput
        if (!fieldErrors[key]) fieldErrors[key] = issue.message
      }
      setErrors(fieldErrors)
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(body?.error ?? 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setValues(emptyForm)
    } catch (error) {
      setStatus('error')
      setFormError(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="card flex flex-col items-center p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="heading-4 mt-5">Message sent.</h3>
        <p className="mt-2 max-w-sm text-slate-600">
          Thanks — we have your brief. {site.replyPromise} If it is urgent, email us directly at{' '}
          <a className="font-medium text-brand-600 hover:text-brand-700" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
        <button type="button" className="btn-secondary mt-7" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card relative p-7 sm:p-9">
      {/* Honeypot field — hidden from users, catches naive bots. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update('website', e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="field"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="field"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>

        <Field label="Company" htmlFor="company" hint="Optional" error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="field"
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
          />
        </Field>

        <Field label="Phone" htmlFor="phone" hint="Optional" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="field"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
        </Field>

        <Field label="What are you building?" htmlFor="projectType" error={errors.projectType} required>
          <select
            id="projectType"
            name="projectType"
            className="field"
            value={values.projectType}
            onChange={(e) => update('projectType', e.target.value as ContactInput['projectType'])}
            aria-invalid={Boolean(errors.projectType)}
          >
            <option value="">Select one…</option>
            {projectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Budget" htmlFor="budget" error={errors.budget} required>
          <select
            id="budget"
            name="budget"
            className="field"
            value={values.budget}
            onChange={(e) => update('budget', e.target.value as ContactInput['budget'])}
            aria-invalid={Boolean(errors.budget)}
          >
            <option value="">Select one…</option>
            {budgets.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Timeline" htmlFor="timeline" error={errors.timeline} required className="sm:col-span-2">
          <select
            id="timeline"
            name="timeline"
            className="field"
            value={values.timeline}
            onChange={(e) => update('timeline', e.target.value as ContactInput['timeline'])}
            aria-invalid={Boolean(errors.timeline)}
          >
            <option value="">Select one…</option>
            {timelines.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Tell us about the project"
          htmlFor="message"
          error={errors.message}
          required
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            rows={6}
            className="field resize-y"
            placeholder="What are you building, who is it for, and what does success look like?"
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            aria-invalid={Boolean(errors.message)}
          />
        </Field>
      </div>

      {formError ? (
        <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {formError}
        </p>
      ) : null}

      <div className="mt-7 flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-500">{site.replyPromise}</p>
        <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
          {status === 'submitting' ? null : <ArrowRightIcon className="h-4 w-4" />}
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  className = '',
  children,
}: {
  label: string
  htmlFor: string
  hint?: string
  error?: string
  required?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="field-label">
        {label}
        {required ? <span className="text-brand-600"> *</span> : null}
        {hint ? <span className="ml-1.5 font-normal text-slate-400">{hint}</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  )
}
