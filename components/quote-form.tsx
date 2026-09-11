"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Field, SelectInput, TextArea, TextInput } from "@/components/ui/field"
import { propertyTypes, serviceTypes } from "@/lib/site"

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setStatus("sending")
    window.setTimeout(() => setStatus("sent"), 700)
  }

  if (status === "sent") {
    return (
      <div className="rounded-[var(--radius-image)] border border-hairline bg-white px-6 py-10">
        <p className="t-eyebrow">Request received</p>
        <h2 className="t-h3 mt-4">Thank you. We’ll come back with a clear scope.</h2>
        <p className="t-body mt-3 max-w-[36ch]">
          A member of the Dawn Cleaners team will reply by email or phone with
          availability and next steps.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <TextInput id="name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Phone number" htmlFor="phone">
          <TextInput
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
          />
        </Field>
      </div>
      <Field label="Email" htmlFor="email">
        <TextInput
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Service type" htmlFor="service">
          <SelectInput id="service" name="service" required defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Property type" htmlFor="property">
          <SelectInput id="property" name="property" required defaultValue="">
            <option value="" disabled>
              Select a property
            </option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </SelectInput>
        </Field>
      </div>
      <Field label="Preferred date" htmlFor="date">
        <TextInput id="date" name="date" type="date" />
      </Field>
      <Field
        label="Message"
        htmlFor="message"
        hint="Tell us the size of the space, how often you need us, and any check in times."
      >
        <TextArea id="message" name="message" required />
      </Field>
      <Button type="submit" disabled={status === "sending"} className="w-fit">
        {status === "sending" ? "Sending…" : "Request a Quote"}
      </Button>
    </form>
  )
}
