import React from 'react'
import { Rocket, Briefcase, GraduationCap, FileText, Map } from 'lucide-react'

export function Landing({ onGetStarted }) {
  return (
    <div className="">
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 pb-20 pt-12 sm:pt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(94,82,64,0.2)] bg-white/60 px-3 py-1 text-xs text-[#626C71] backdrop-blur dark:border-[rgba(119,124,124,0.3)] dark:bg-[#262828]/60">
          Premium Multi-Service SaaS for Tier-2 India
        </div>
        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          SoftOrigin Technologies
        </h1>
        <p className="max-w-2xl text-center text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">
          A unified, modern platform integrating Smart Business Suite, EduConnect, SmartBill, and FieldTrack. Built for speed, clarity, and trust.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button onClick={onGetStarted} className="inline-flex items-center gap-2 rounded-md bg-[#21808D] px-5 py-2.5 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-[#1D7480]">
            <Rocket className="h-5 w-5" />
            Get Started
          </button>
          <a href="#features" className="rounded-md border border-[rgba(94,82,64,0.2)] bg-white px-5 py-2.5 text-sm font-medium transition hover:bg-black/5 dark:border-[rgba(119,124,124,0.3)] dark:bg-[#262828] dark:hover:bg-white/10">
            Learn More
          </a>
        </div>
        <div className="mt-6 w-full rounded-xl border border-[rgba(94,82,64,0.2)] bg-white p-4 shadow-sm dark:border-[rgba(119,124,124,0.3)] dark:bg-[#262828]">
          <div className="aspect-[16/9] w-full rounded-lg bg-gradient-to-br from-[#21808D]/10 to-[#1D7480]/10 dark:from-[#32B8C6]/10 dark:to-[#2DA6B2]/10" />
        </div>
      </section>

      <section id="features" className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-16 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Briefcase, title: 'Smart Business Suite', desc: 'CRM, inventory, tasks—all in one elegant hub.' },
          { icon: GraduationCap, title: 'EduConnect', desc: 'Attendance, grades, fees, and communication.' },
          { icon: FileText, title: 'SmartBill', desc: 'GST-ready invoices with instant preview and export.' },
          { icon: Map, title: 'FieldTrack', desc: 'Live employee tracking, geofences, and routes.' },
        ].map((f, i) => (
          <div
            key={i}
            className="group rounded-lg border border-[rgba(94,82,64,0.2)] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-[rgba(119,124,124,0.3)] dark:bg-[#262828]"
          >
            <f.icon className="mb-3 h-6 w-6 text-[#21808D] transition group-hover:scale-110 dark:text-[#32B8C6]" />
            <div className="text-sm font-semibold">{f.title}</div>
            <p className="mt-1 text-sm text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[{
            name: 'Starter', price: '₹499/mo', features: ['1 org', 'Basic modules', 'Email support']
          }, {
            name: 'Professional', price: '₹1999/mo', features: ['5 orgs', 'Advanced analytics', 'Priority support']
          }, {
            name: 'Enterprise', price: 'Custom', features: ['Unlimited', 'SLA + SSO', 'Dedicated manager']
          }].map((p, i) => (
            <div key={i} className="rounded-lg border border-[rgba(94,82,64,0.2)] bg-white p-6 shadow-sm transition hover:shadow-md dark:border-[rgba(119,124,124,0.3)] dark:bg-[#262828]">
              <div className="text-sm font-semibold">{p.name}</div>
              <div className="mt-2 text-2xl font-bold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#21808D] dark:bg-[#32B8C6]" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-5 w-full rounded-md bg-[#21808D] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#1D7480] dark:bg-[#32B8C6] dark:hover:bg-[#2DA6B2]">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
