import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'

import Stepper, { Step } from '../ui/Stepper'

const pageMotion = {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -24 },
}

const pageTransition = { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] as const }

type ContactChannel = {
    label: string
    detail: ReactNode
    helper: string
    href?: string
}

const contacts: ContactChannel[] = [
    {
        label: 'Email',
        detail: (
            <span className="inline-flex items-center gap-2">
                kmabumi@gmail.com
                <img
                    src="https://media.tenor.com/Ib_8vbFkAXsAAAAm/verifiedwhite.webp"
                    alt="Verified badge"
                    className="h-4 w-4"
                />
            </span>
        ),
        helper: 'Primary inbox for scoped project briefs or collaboration invites.',
        href: 'mailto:kmabumi@gmail.com',
    },
    {
        label: 'Github',
        detail: (
            <span className="inline-flex items-center gap-2">
                @ComplexMaJa
                <img
                    src="https://media.tenor.com/Ib_8vbFkAXsAAAAm/verifiedwhite.webp"
                    alt="Verified badge"
                    className="h-4 w-4"
                />
            </span>
        ),
        helper: 'Book a quick sync to align on goals, scope, and next steps.',
        href: 'https://github.com/ComplexMaJa',
    },
    {
        label: 'Discord',
        detail: (
            <span className="inline-flex items-center gap-2">
                @complexmaja
                <img
                    src="https://media.tenor.com/Ib_8vbFkAXsAAAAm/verifiedwhite.webp"
                    alt="Verified badge"
                    className="h-4 w-4"
                />
            </span>
        ),
        helper: "Add me on Discord if you wanna connect, don't worry i dont bite :p.",
        href: 'https://discord.com/users/complexmaja',
    },
]

const timelineOptions = ['2-4 weeks', '4-6 weeks', '8+ weeks']
const budgetRanges = ['Under $10k', '$10k-$25k', '$25k+']

function Contact() {
    const [projectFocus, setProjectFocus] = useState('')
    const [timeline, setTimeline] = useState(timelineOptions[0])
    const [budget, setBudget] = useState(budgetRanges[0])
    const [contactName, setContactName] = useState('')
    const [projectNotes, setProjectNotes] = useState('')
    const [stepperKey, setStepperKey] = useState(0)
    const [hasSent, setHasSent] = useState(false)

    const projectFocusPreview = projectFocus.trim() || 'a new collaboration opportunity'

    const resetFormSelections = () => {
        setProjectFocus('')
        setTimeline(timelineOptions[0])
        setBudget(budgetRanges[0])
        setContactName('')
        setProjectNotes('')
    }

    const composeEmail = () => {
        const formattedFocus = projectFocusPreview
        const subject = encodeURIComponent(`[Portfolio Inquiry] ${formattedFocus}`)
        const bodyLines = [
            'Hi MaJa,',
            '',
            `I'm reaching out about ${formattedFocus}.`,
            `Timeline: ${timeline}`,
            `Budget: ${budget}`,
            '',
            projectNotes.trim() ? projectNotes.trim() : 'Add any extra context here before sending.',
            '',
            contactName.trim() ? `Best,\n${contactName.trim()}` : 'Best,\n',
        ]
        const body = encodeURIComponent(bodyLines.join('\n'))
        const mailtoUrl = `mailto:kmabumi@gmail.com?subject=${subject}&body=${body}`
        if (typeof window !== 'undefined') {
            window.location.href = mailtoUrl
        }
        setHasSent(true)
        resetFormSelections()
        setStepperKey(prev => prev + 1)
    }

    const handleStartAnother = () => {
        setHasSent(false)
        resetFormSelections()
        setStepperKey(prev => prev + 1)
    }

    return (
        <motion.section
            className="mt-20 flex flex-1 flex-col gap-12"
            initial={pageMotion.initial}
            animate={pageMotion.animate}
            exit={pageMotion.exit}
            transition={pageTransition}
        >
            <header className="space-y-5">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Contacts</p>
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">All the ways to reach me</h1>
                <p className="max-w-2xl text-base text-white/60 sm:text-lg">
                    Pick the channel that best fits your project cadence. Each entry routes directly to me - no gatekeepers, no waiting games.
                </p>
            </header>

            <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-[minmax(260px,0.85fr)_minmax(320px,1.15fr)]">
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-white">Direct channels</h2>
                    <div className="space-y-4">
                        {contacts.map(channel => (
                            <article key={channel.label} className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-[0_15px_45px_-30px_rgba(0,0,0,0.8)]">
                                <p className="text-xs uppercase tracking-[0.35em] text-white/30">{channel.label}</p>
                                {channel.href ? (
                                    <a
                                        className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-white underline-offset-4 hover:underline"
                                        href={channel.href}
                                        target={channel.href.startsWith('http') ? '_blank' : undefined}
                                        rel={channel.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                                    >
                                        {channel.detail}
                                    </a>
                                ) : (
                                    <p className="mt-2 text-lg font-semibold text-white">{channel.detail}</p>
                                )}
                                <p className="mt-3 text-sm text-white/55">{channel.helper}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-semibold text-white">Write me an email !</h2>
                    <Stepper
                        key={stepperKey}
                        initialStep={1}
                        onStepChange={() => setHasSent(false)}
                        onFinalStepCompleted={composeEmail}
                        nextButtonText="Next"
                        finalButtonText="Send email"
                        wrapperClassName="items-stretch"
                        stepCircleContainerClassName="md:mx-0"
                        stepContainerClassName="justify-between"
                        contentClassName="py-8"
                        footerClassName=""
                    >
                        <Step>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-xs uppercase tracking-[0.35em] text-white/35">Step 1</p>
                                    <h3 className="text-lg font-semibold text-white">What are we building?</h3>
                                    <p className="text-sm text-white/55">Give me a quick overview of your project focus.</p>
                                </div>
                                <label className="flex flex-col gap-2 text-sm text-white/60" htmlFor="project-focus">
                                    <span>Project focus</span>
                                    <textarea
                                        id="project-focus"
                                        value={projectFocus}
                                        onChange={event => setProjectFocus(event.target.value)}
                                        className="min-h-[140px] rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/40"
                                        placeholder="What would you like to build together?"
                                    />
                                    <p className="text-xs text-white/45">This drives the email subject and intro line.</p>
                                </label>
                            </div>
                        </Step>

                        <Step>
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <p className="text-xs uppercase tracking-[0.35em] text-white/35">Step 2</p>
                                    <h3 className="text-lg font-semibold text-white">Timeline and investment</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <p className="text-sm text-white/55">Desired kickoff timeline</p>
                                        <div className="flex flex-wrap gap-3">
                                            {timelineOptions.map(option => {
                                                const isActive = timeline === option
                                                return (
                                                    <button
                                                        key={option}
                                                        type="button"
                                                        onClick={() => setTimeline(option)}
                                                        className={`rounded-full border px-4 py-2 text-sm transition focus:outline-none ${
                                                            isActive
                                                                ? 'border-white bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                                                                : 'border-white/20 bg-black/30 text-white/70 hover:bg-black/50'
                                                        }`}
                                                    >
                                                        {option}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm text-white/55">Estimated budget</p>
                                        <div className="flex flex-wrap gap-3">
                                            {budgetRanges.map(range => {
                                                const isActive = budget === range
                                                return (
                                                    <button
                                                        key={range}
                                                        type="button"
                                                        onClick={() => setBudget(range)}
                                                        className={`rounded-full border px-4 py-2 text-sm transition focus:outline-none ${
                                                            isActive
                                                                ? 'border-white bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                                                                : 'border-white/20 bg-black/30 text-white/70 hover:bg-black/50'
                                                        }`}
                                                    >
                                                        {range}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Step>

                        <Step>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-xs uppercase tracking-[0.35em] text-white/35">Step 3</p>
                                    <h3 className="text-lg font-semibold text-white">Add a personal touch</h3>
                                </div>
                                <div className="space-y-4">
                                    <label className="flex flex-col gap-2 text-sm text-white/60" htmlFor="contact-name">
                                        <span>Your name</span>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            value={contactName}
                                            onChange={event => setContactName(event.target.value)}
                                            className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/40"
                                            placeholder="How should I address you?"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2 text-sm text-white/60" htmlFor="project-notes">
                                        <span>Project notes</span>
                                        <textarea
                                            id="project-notes"
                                            value={projectNotes}
                                            onChange={event => setProjectNotes(event.target.value)}
                                            className="min-h-[140px] rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/40"
                                            placeholder="Share any context you would like included in the email."
                                        />
                                        <p className="text-xs text-white/45">This text appears inside the email draft so you can keep editing before sending.</p>
                                    </label>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-sm text-white/60">
                                    <p className="text-xs uppercase tracking-[0.35em] text-white/35">Preview</p>
                                    <p className="mt-3 text-sm text-white/70">
                                        <strong>Subject:</strong> {`[Portfolio Inquiry] ${projectFocusPreview}`}
                                    </p>
                                    <ul className="mt-3 space-y-1 text-xs text-white/50">
                                        <li>{`Project: ${projectFocusPreview}`}</li>
                                        <li>{`Timeline: ${timeline}`}</li>
                                        <li>{`Budget: ${budget}`}</li>
                                    </ul>
                                </div>
                            </div>
                        </Step>
                    </Stepper>

                    {hasSent && (
                        <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-5 py-4 text-sm text-emerald-100">
                            <p>Email draft opened in your default mail client.</p>
                            <button
                                type="button"
                                onClick={handleStartAnother}
                                className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100 transition hover:bg-emerald-300/20"
                            >
                                Compose another
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </motion.section>
    )
}

export default Contact
