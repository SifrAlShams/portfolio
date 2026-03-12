"use client";

import { useEffect, useRef } from "react";
import styles from "./About.module.css";

const highlights = [
    {
        icon: "🧠",
        title: "AI Agent Engineering",
        desc: "Building context-aware AI agents using LangGraph, LangChain, and open-source LLMs for voice and text applications.",
    },
    {
        icon: "🎙️",
        title: "Voice AI Systems",
        desc: "End-to-end voice agent pipelines with STT, LLM reasoning, and TTS — using Vapi, AssemblyAI, ElevenLabs, and LiveKit.",
    },
    {
        icon: "⚡",
        title: "Automation & CRM",
        desc: "Workflow automation with n8n, Make.com, and GoHighLevel — building lead-gen pipelines, email campaigns, and sales funnels.",
    },
    {
        icon: "🔬",
        title: "ML Research & Development",
        desc: "Hands-on ML engineering from scratch implementations to production-grade RAG systems, with an IEEE publication.",
    },
];

export default function About() {
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
        <section className={`section ${styles.about}`} id="about" ref={sectionRef}>
            <div className={styles.bgOrb1}></div>
            <div className="container">
                <div className={`sectionHeader animateIn`}>
                    <span className="sectionTag">About Me</span>
                    <h2 className="sectionTitle">
                        Turning AI Research Into{" "}
                        <span className="gradientText">Business Impact</span>
                    </h2>
                    <p className="sectionDescription">
                        MS AI candidate at LUMS with professional experience building
                        production AI systems across healthcare, real estate, and enterprise
                        automation.
                    </p>
                </div>

                <div className={styles.grid}>
                    {highlights.map((item, i) => (
                        <div
                            key={i}
                            className={`glassCard ${styles.card} animateIn`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className={styles.cardIcon}>{item.icon}</div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
