"use client";

import {
  contactPayloadSchema,
  normalizeContactPayload,
} from "@/lib/contact-schema";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const jobTypes = [
  "Domestic",
  "Commercial",
  "Chimney/Roof",
  "Emergency",
  "Not sure",
] as const;

const jobSizes = [
  "Small (1–2 days)",
  "Medium (3–5 days)",
  "Large (1+ week)",
  "Not sure",
] as const;

type ChatStep = 1 | 2 | 3 | 4 | 5;

type FormValues = {
  location: string;
  name: string;
  phone: string;
  email?: string;
};

function BotBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="relative mt-1 h-9 w-9 shrink-0 overflow-hidden rounded-full border border-gold/20 bg-surface">
        <Image
          src="/owen-logo.png"
          alt=""
          fill
          className="object-cover"
          sizes="36px"
        />
      </div>
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-gold/20 bg-surface px-4 py-3 text-sm leading-relaxed text-foreground shadow-sm">
        {children}
      </div>
    </div>
  );
}

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-gold px-4 py-3 text-sm font-medium leading-relaxed text-background shadow-md">
        {children}
      </div>
    </div>
  );
}

export function ContactBot() {
  const [step, setStep] = useState<ChatStep>(1);
  const [jobType, setJobType] = useState("");
  const [jobSize, setJobSize] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    defaultValues: {
      location: "",
      name: "",
      phone: "",
      email: "",
    },
  });

  const location = form.watch("location");

  const pickJobType = (v: string) => {
    setJobType(v);
    setStep(2);
  };

  const pickJobSize = (v: string) => {
    setJobSize(v);
    setStep(3);
  };

  const onLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const loc = form.getValues("location").trim();
    if (loc.length < 2) {
      form.setError("location", {
        message: "Please enter a town or postcode",
      });
      return;
    }
    form.clearErrors("location");
    setStep(4);
  };

  const onFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const payload = {
      jobType,
      jobSize,
      location: form.getValues("location").trim(),
      name: form.getValues("name").trim(),
      phone: form.getValues("phone").trim(),
      email: form.getValues("email"),
    };
    const parsed = contactPayloadSchema.safeParse(payload);
    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors;
      if (first.name?.[0]) form.setError("name", { message: first.name[0] });
      if (first.phone?.[0]) form.setError("phone", { message: first.phone[0] });
      if (first.email?.[0]) form.setError("email", { message: first.email[0] });
      return;
    }

    let normalized;
    try {
      normalized = normalizeContactPayload(parsed.data);
    } catch {
      form.setError("email", { message: "Enter a valid email address" });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(normalized),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(
          typeof body.error === "string"
            ? body.error
            : "Something went wrong. Please call 07890 055319."
        );
        return;
      }
      setDone(true);
      setStep(5);
    } catch {
      setError("Network error. Please try again or call 07890 055319.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex h-full min-h-[520px] flex-col rounded-sm border border-gold/20 bg-surface-card shadow-xl">
      <div className="border-b border-gold/20 px-5 py-4">
        <p className="text-xs uppercase tracking-label text-gold">Quote assistant</p>
        <h2 className="font-display text-xl text-white">How can we help?</h2>
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto px-4 py-6 sm:px-6">
        <AnimatePresence initial={false}>
          <motion.div
            key="s1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <BotBubble>
              Hi! I&apos;m here to help you get a quote from Owen Scaffolding.
              What type of job do you need scaffolding for?
            </BotBubble>
          </motion.div>

          {step >= 2 && jobType && (
            <motion.div
              key="u1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <UserBubble>{jobType}</UserBubble>
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
              key="s2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <BotBubble>Great. And roughly what size is the job?</BotBubble>
            </motion.div>
          )}

          {step >= 3 && jobSize && (
            <motion.div
              key="u2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <UserBubble>{jobSize}</UserBubble>
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div
              key="s3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <BotBubble>Where is the property located?</BotBubble>
            </motion.div>
          )}

          {step >= 4 && location.trim().length > 0 && (
            <motion.div
              key="u3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <UserBubble>{location.trim()}</UserBubble>
            </motion.div>
          )}

          {step >= 4 && (
            <motion.div
              key="s4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <BotBubble>And what&apos;s the best way to reach you?</BotBubble>
            </motion.div>
          )}

          {step >= 5 && done && (
            <motion.div
              key="s5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <BotBubble>
                Perfect — we&apos;ll be in touch shortly. Thanks for choosing
                Owen Scaffolding!
              </BotBubble>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="border-t border-gold/20 bg-surface px-4 py-5 sm:px-6">
        {step === 1 && (
          <div className="flex flex-wrap gap-2">
            {jobTypes.map((t) => (
              <Button
                key={t}
                type="button"
                variant="outline"
                size="sm"
                className="border-gold/40"
                onClick={() => pickJobType(t)}
              >
                {t}
              </Button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-wrap gap-2">
            {jobSizes.map((s) => (
              <Button
                key={s}
                type="button"
                variant="outline"
                size="sm"
                className="border-gold/40"
                onClick={() => pickJobSize(s)}
              >
                {s}
              </Button>
            ))}
          </div>
        )}

        {step === 3 && (
          <form onSubmit={onLocationSubmit} className="space-y-3">
            <div>
              <Label htmlFor="location">Town or postcode</Label>
              <Input
                id="location"
                {...form.register("location")}
                placeholder="e.g. Cardigan or SA43"
                className="mt-2"
              />
              {form.formState.errors.location && (
                <p className="mt-1 text-xs text-red-400">
                  {form.formState.errors.location.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Continue
            </Button>
          </form>
        )}

        {step === 4 && !done && (
          <form onSubmit={onFinalSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...form.register("name")} className="mt-2" />
              {form.formState.errors.name && (
                <p className="mt-1 text-xs text-red-400">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                {...form.register("phone")}
                className="mt-2"
              />
              {form.formState.errors.phone && (
                <p className="mt-1 text-xs text-red-400">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                className="mt-2"
              />
              {form.formState.errors.email && (
                <p className="mt-1 text-xs text-red-400">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? "Sending…" : "Submit request"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
