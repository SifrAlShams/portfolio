"use client";

import { useEffect, useRef } from "react";
import styles from "./Experience.module.css";

const experiences = [
    {
        period: "Aug 2025 — Mar 2026",
        title: "Tech Associate — Engineering",
        company: "LunaJoy",
        type: "Healthcare",
        description:
            "Led AI and automation engineering for a healthcare startup. Built outbound calling AI agents with Vapi, designed automated lead-to-appointment systems, and managed CRM workflows in GoHighLevel.",
        highlights: [
            "Built AI voice agents for outbound patient calls using Vapi",
            "Designed n8n automation workflows for lead scraping & data enrichment",
            "Created multi-page responsive websites for GHL compatibility",
            "Engineered sales & marketing email campaigns with interactive modals",
        ],
        tags: ["Vapi", "n8n", "GoHighLevel", "AI Agents", "Automation"],
    },
    {
        period: "Jan 2025 — Jul 2025",
        title: "Associate AI/ML Engineer",
        company: "hytGenX",
        type: "Artificial Intelligence",
        description:
            "Built and integrated AI agents powered by Large Language Models for voice and text-based applications. Led development of intelligent workflows and real-time AI systems.",
        highlights: [
            "Developed LangGraph-based agentic workflows for production use",
            "Fine-tuned and deployed open-source LLMs (LLaMA, Mixtral)",
            "Integrated LLMs with APIs and real-time interfaces",
            "Built context-aware voice AI pipelines with STT/TTS",
        ],
        tags: ["LangGraph", "LLaMA", "Mixtral", "FastAPI", "Voice AI"],
    },
    {
        period: "Sep 2024 — Mar 2025",
        title: "Research Assistant",
        company: "LUMS University",
        type: "Academia",
        description:
            "Worked on a water conflict resolution research project, designing agent-based simulations to model stakeholder interactions and resource dynamics.",
        highlights: [
            "Designed agent-based simulation using NetLogo",
            "Modeled complex stakeholder interactions and resource dynamics",
            "Contributed to interdisciplinary research on water policy",
        ],
        tags: ["NetLogo", "Agent-Based Modeling", "Research", "Simulation"],
    },
    {
        period: "Oct 2023 — Feb 2024",
        title: "Teacher Assistant — Machine Learning",
        company: "Namal University",
        type: "Academia",
        description:
            "Delivered hands-on ML programming tutorials and designed coursework materials for undergraduate students.",
        highlights: [
            "Taught ML frameworks (Sklearn, TensorFlow) through tutorials",
            "Designed and evaluated assignments, quizzes, and projects",
            "Mentored students on practical ML implementations",
        ],
        tags: ["Teaching", "TensorFlow", "Sklearn", "Machine Learning"],
    },
];

export default function Experience() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = sectionRef.current?.querySelectorAll(".animateIn");
        items?.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className={`section ${styles.experience}`}
            id="experience"
            ref={sectionRef}
        >
            <div className="container">
                <div className={`sectionHeader animateIn`}>
                    <span className="sectionTag">Experience</span>
                    <h2 className="sectionTitle">
                        Where I&apos;ve{" "}
                        <span className="gradientText">Made an Impact</span>
                    </h2>
                </div>

                <div className={styles.timeline}>
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className={`${styles.timelineItem} animateIn`}
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <div className={styles.timelineDot}>
                                <div className={styles.dotInner}></div>
                            </div>
                            <div className={`glassCard ${styles.card}`}>
                                <div className={styles.cardHeader}>
                                    <div>
                                        <span className={styles.period}>{exp.period}</span>
                                        <h3 className={styles.role}>{exp.title}</h3>
                                        <div className={styles.companyRow}>
                                            <span className={styles.company}>{exp.company}</span>
                                            <span className={styles.typeBadge}>{exp.type}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className={styles.desc}>{exp.description}</p>
                                <ul className={styles.highlights}>
                                    {exp.highlights.map((h, j) => (
                                        <li key={j} className={styles.highlightItem}>
                                            <span className={styles.highlightDot}></span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.tags}>
                                    {exp.tags.map((tag, j) => (
                                        <span key={j} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
