import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StartupProgress from "./components/StartupProgress";

const faqs = [
  {
    q: "Is this a course?",
    a: "No. Job Switch OS is a personalized planning system plus light weekly guidance. You use your own learning resources; we give you the roadmap, daily schedule, and accountability.",
  },
  {
    q: "Can I crack a job with only 1–1.5 hours/day?",
    a: "Yes, if you follow a focused roadmap consistently. Job Switch OS is optimized for busy engineers with limited time.",
  },
  {
    q: "Is this only for React developers?",
    a: "Our first version is optimized for frontend / React devs, but we also support general SDE job switch plans.",
  },
  {
    q: "What if I miss a few days?",
    a: "Your plan can be recalculated weekly based on your actual progress so you never feel permanently behind.",
  },
];

const App: React.FC = () => {
  const navigate = useNavigate();
  const [waitlistName, setWaitlistName] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistRole, setWaitlistRole] = useState("");
  const [waitlistMessage, setWaitlistMessage] = useState<string | null>(null);
  const [currentRole, setCurrentRole] = useState("");
  const [goal, setGoal] = useState("");

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!waitlistEmail || !currentRole || !goal) {
      setWaitlistMessage("Please fill all required fields.");
      return;
    }

    const res = await fetch("https://formspree.io/f/xblnkwzz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: waitlistName,
        email: waitlistEmail,
        currentRole,
        goal,
      }),
    });

    if (res.ok) {
      setWaitlistMessage("🎉 You're added to early access!");
      navigate("/thank-you");
      setWaitlistName("");
      setWaitlistEmail("");
      setCurrentRole("");
      setGoal("");
    } else {
      setWaitlistMessage("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-bg text-gray-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-border bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/90 text-sm font-bold">
              JS
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Job Switch OS
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-white">
              How it works
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <button className="rounded-lg px-3 py-1 text-sm text-gray-300 hover:text-white">
              Log in
            </button>
            <a
              href="#waitlist"
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-md shadow-primary/30 hover:bg-primaryDark"
            >
              Get Started
            </a>
          </nav>
          <button className="inline-flex items-center rounded-lg border border-border px-3 py-1 text-xs text-gray-300 md:hidden">
            Menu
          </button>
        </div>
      </header>
      <main>
        {/* HERO */}
        <section className="border-b border-border bg-gradient-to-b from-bg to-black/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:py-20 lg:px-8">
            {/* Left */}
            <div className="flex-1 space-y-6">
              <p className="inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-gray-300">
                🎯 Built for Indian software engineers
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Land your next high-paying tech job in{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  90 days
                </span>
                .
              </h1>
              <p className="max-w-xl text-base text-gray-300 sm:text-lg">
                Job Switch OS creates your personalized roadmap for DSA, System
                Design, React and interviews — then turns it into a daily plan
                you can actually follow.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-primary/40 hover:bg-primaryDark"
                >
                  Get your personalized roadmap
                  <span className="ml-2 text-lg">→</span>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-4 py-2 text-sm text-gray-200 hover:bg-card/60"
                >
                  See how it works
                </a>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <div className="flex -space-x-2">
                  <div className="h-7 w-7 rounded-full bg-card ring-2 ring-bg" />
                  <div className="h-7 w-7 rounded-full bg-card ring-2 ring-bg" />
                  <div className="h-7 w-7 rounded-full bg-card ring-2 ring-bg" />
                </div>
                <span>Early access batch • Limited seats</span>
              </div>
            </div>

            {/* Right: fake app preview */}
            <div className="flex-1">
              <div className="mx-auto max-w-md rounded-2xl border border-border bg-card/80 p-4 shadow-2xl shadow-black/60 backdrop-blur">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Today — Job Switch Plan
                  </span>
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                    Focus: 1.5 hrs
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      title: "DSA – Arrays & Strings",
                      meta: "2 problems • 40 min",
                    },
                    {
                      title: "System Design – Basics of Caching",
                      meta: "1 video • 20 min",
                    },
                    {
                      title: "React – Performance Optimization",
                      meta: "Docs + notes • 30 min",
                    },
                    {
                      title: "Mock Interview Prep",
                      meta: "Review 5 questions • 10 min",
                    },
                  ].map((task, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-border/70 bg-bg/60 p-3"
                    >
                      <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full border-2 border-gray-500" />
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium text-gray-100">
                          {task.title}
                        </p>
                        <p className="text-xs text-gray-400">{task.meta}</p>
                      </div>
                      {idx === 0 && (
                        <span className="ml-auto rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                          In progress
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <div className="text-xs text-gray-400">
                    Consistency:{" "}
                    <span className="font-semibold text-green-400">
                      9-day streak
                    </span>
                  </div>
                  <button className="text-xs font-medium text-primary hover:text-primaryDark">
                    Re-plan this week →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="border-b border-border bg-bg/90" id="problem">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Why most developers fail to switch jobs
              </h2>
              <p className="mt-3 text-sm text-gray-300 sm:text-base">
                It&apos;s not a lack of intelligence. It&apos;s a lack of
                structure, focus, and accountability.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "No clear roadmap",
                  desc: "You don't know what to do daily for DSA, system design, and React.",
                  icon: "🧩",
                },
                {
                  title: "Too many resources",
                  desc: "You jump between YouTube, platforms and notes with no sequence.",
                  icon: "📚",
                },
                {
                  title: "Low consistency",
                  desc: "You push hard for 2 weeks, then life happens and prep collapses.",
                  icon: "⏱️",
                },
                {
                  title: "No accountability",
                  desc: "Nobody tracks your weekly progress or adjusts your plan.",
                  icon: "👤",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-bg text-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section
          className="border-b border-border bg-gradient-to-br from-bg to-black"
          id="features"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  A complete job-switch system built around{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    your life and time
                  </span>
                  .
                </h2>
                <p className="mt-3 text-sm text-gray-300 sm:text-base">
                  Job Switch OS doesn&apos;t just give you content. It builds a
                  personalized plan, breaks it into days, and keeps you
                  accountable.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-gray-200">
                  {[
                    "Personalized 3-month roadmap for your target role and company type.",
                    "Daily 'Today' plan with DSA, SD, React and mock interview tasks.",
                    "Weekly check-in and re-planning based on your actual progress.",
                    "Portfolio, resume and LinkedIn checklists specifically for engineers.",
                    "Built for Indian engineers targeting 20–40+ LPA product roles.",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-2">
                      <span className="mt-1 text-accent">●</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-primary">
                    Weekly milestone overview
                  </p>
                  <div className="mt-4 space-y-3 text-xs text-gray-300">
                    <div className="flex items-center justify-between rounded-xl bg-bg/70 px-3 py-2">
                      <span>Week 1: DSA basics + React review</span>
                      <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] font-semibold text-green-400">
                        On track
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-bg/70 px-3 py-2">
                      <span>Week 2: Arrays, Strings + Hooks deep dive</span>
                      <span className="rounded-full bg-yellow-500/15 px-2 py-0.5 text-[10px] font-semibold text-yellow-300">
                        Needs focus
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-bg/70 px-3 py-2">
                      <span>Week 3: Trees + basic system design</span>
                      <span className="rounded-full bg-gray-500/15 px-2 py-0.5 text-[10px] font-semibold text-gray-300">
                        Upcoming
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Outcome snapshot
                  </p>
                  <div className="mt-3 flex gap-4 text-xs text-gray-300">
                    <div className="flex-1 rounded-xl bg-bg/80 p-3">
                      <p className="text-[11px] text-gray-400">
                        Weekly consistency
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        82%
                      </p>
                    </div>
                    <div className="flex-1 rounded-xl bg-bg/80 p-3">
                      <p className="text-[11px] text-gray-400">
                        Roadmap completion
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        36%
                      </p>
                    </div>
                    <div className="flex-1 rounded-xl bg-bg/80 p-3">
                      <p className="text-[11px] text-gray-400">
                        Interview ready in
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        73 days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-b border-border bg-bg/95" id="how-it-works">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
              How Job Switch OS works
            </h2>
            <p className="mt-3 text-center text-sm text-gray-300">
              Four simple steps to turn random prep into a focused job switch
              plan.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {[
                {
                  step: "Step 1",
                  title: "Tell us your target",
                  desc: "Role, experience level, and company type (startup, product, FAANG).",
                },
                {
                  step: "Step 2",
                  title: "Set time & timeline",
                  desc: "Choose 60–120 mins/day and 60–180 day window.",
                },
                {
                  step: "Step 3",
                  title: "Get a roadmap",
                  desc: "We build a 12-week job switch plan across DSA, SD, React, and interview prep.",
                },
                {
                  step: "Step 4",
                  title: "Follow your 'Today' screen",
                  desc: "Every day, you just open the app and do the tasks shown.",
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-4"
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                  {idx < 3 && (
                    <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-border md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section className="border-b border-border bg-gradient-to-r from-bg to-black/90">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Before vs After Job Switch OS
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card/60 p-5">
                <h3 className="text-sm font-semibold text-gray-300">Before</h3>
                <ul className="mt-3 space-y-2 text-xs text-gray-400">
                  <li>• Random YouTube and course hopping</li>
                  <li>• No idea what to do each day</li>
                  <li>• Overwhelmed by DSA, SD and project topics</li>
                  <li>• Prep collapses after 2–3 weeks</li>
                  <li>• No visibility into progress or readiness</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-green-500/40 bg-green-500/5 p-5">
                <h3 className="text-sm font-semibold text-green-300">After</h3>
                <ul className="mt-3 space-y-2 text-xs text-green-200">
                  <li>• Clear 90-day roadmap and milestones</li>
                  <li>• Structured daily tasks across key topics</li>
                  <li>• Weekly recalibration based on your pace</li>
                  <li>• Consistent, compounding progress</li>
                  <li>• Confidence when booking interviews</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="border-b border-border bg-bg/95" id="pricing">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Early access pricing
              </h2>
              <p className="mt-3 text-sm text-gray-300">
                Special launch pricing for the first batch of Job Switch OS
                users.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {/* Starter */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold text-gray-200">Starter</h3>
                <p className="mt-2 text-xs text-gray-400">
                  For self-driven engineers who want a structured roadmap.
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">₹999</span>
                  <span className="text-xs text-gray-400">
                    one-time / 3 months
                  </span>
                </div>
                <ul className="mt-4 flex-1 space-y-2 text-xs text-gray-300">
                  <li>• Personalized 3-month roadmap</li>
                  <li>• Daily “Today” plan</li>
                  <li>• Weekly re-planning</li>
                  <li>• DSA, SD, React checklists</li>
                  <li>• Resume & portfolio guidelines</li>
                </ul>
                <a
                  href="#waitlist"
                  className="mt-5 w-full rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-white hover:bg-primaryDark"
                >
                  Get Starter
                </a>
              </div>

              {/* Pro */}
              <div className="relative flex flex-col rounded-2xl border border-primary/70 bg-card/90 p-6 shadow-lg shadow-primary/30">
                <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  Most popular
                </span>
                <h3 className="text-sm font-semibold text-gray-100">Pro</h3>
                <p className="mt-2 text-xs text-gray-300">
                  For engineers who want extra accountability and feedback.
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">₹1,999</span>
                  <span className="text-xs text-gray-400">
                    one-time / 3 months
                  </span>
                </div>
                <ul className="mt-4 flex-1 space-y-2 text-xs text-gray-200">
                  <li>• Everything in Starter</li>
                  <li>• Weekly WhatsApp check-in</li>
                  <li>• Priority Q&A support</li>
                  <li>• Resume review suggestions</li>
                  <li>• Interview prep guidance</li>
                </ul>
                <a
                  href="#waitlist"
                  className="mt-5 w-full rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-bg hover:bg-emerald-500"
                >
                  Join Pro
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-border bg-bg/95">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 space-y-3">
              {faqs.map((f, idx) => (
                <details
                  key={idx}
                  className="group rounded-xl border border-border bg-card p-4"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-gray-100">
                    <span>{f.q}</span>
                    <span className="ml-4 text-lg text-gray-400 transition-transform group-open:rotate-90">
                      ›
                    </span>
                  </summary>
                  <p className="mt-3 text-xs text-gray-300">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <StartupProgress />

        {/* WAITLIST SECTION */}
        <section
          id="waitlist"
          className="border-b border-border bg-gradient-to-r from-primary/10 via-bg to-accent/10"
        >
          <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Join the early access waitlist
            </h2>
            <p className="mt-3 text-sm text-gray-200">
              Be the first to get your personalized roadmap when we open the
              first Job Switch OS batch.
            </p>
            <form
              onSubmit={handleWaitlistSubmit}
              className="mx-auto mt-6 grid max-w-xl gap-3 text-left sm:grid-cols-2"
            >
              {/* Name (Optional) */}
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs font-medium text-gray-300">
                  Name (optional)
                </label>
                <input
                  type="text"
                  value={waitlistName}
                  onChange={(e) => setWaitlistName(e.target.value)}
                  className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-gray-100 outline-none focus:border-primary"
                  placeholder="Ravi Kumar"
                />
              </div>

              {/* Email (Required) */}
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs font-medium text-gray-300">
                  Email* (required)
                </label>
                <input
                  type="email"
                  required
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-gray-100 outline-none focus:border-primary"
                  placeholder="you@example.com"
                />
              </div>

              {/* Current Role (Required) */}
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs font-medium text-gray-300">
                  Current Role* (required)
                </label>
                <input
                  type="text"
                  required
                  value={currentRole}
                  onChange={(e) => setCurrentRole(e.target.value)}
                  className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-gray-100 outline-none focus:border-primary"
                  placeholder="Frontend dev, React dev, SDE-1, QA → SDET etc."
                />
              </div>

              {/* Job Switch Goal (Required) */}
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs font-medium text-gray-300">
                  Goal* (required)
                </label>
                <input
                  type="text"
                  required
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-gray-100 outline-none focus:border-primary"
                  placeholder="Target role — SDE-2, Product company, 30–40 LPA"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2 mt-2 flex flex-col items-center gap-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-primary/40 hover:bg-primaryDark sm:w-auto"
                >
                  Join waitlist
                </button>
              </div>
            </form>

            {waitlistMessage && (
              <p className="mt-3 text-xs text-green-300">{waitlistMessage}</p>
            )}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-bg py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-xs text-gray-500 sm:flex-row sm:px-6 lg:px-8">
          <span>
            © {new Date().getFullYear()} Job Switch OS. All rights reserved.
          </span>
          <div className="flex gap-4">
            <button className="hover:text-gray-300">Privacy</button>
            <button className="hover:text-gray-300">Terms</button>
            <button className="hover:text-gray-300">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
