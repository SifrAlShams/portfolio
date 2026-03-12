"use client";

import { useEffect, useRef } from "react";
import styles from "./Skills.module.css";

const skillCategories = [
    {
        title: "AI/ML & LLMs",
        icon: "🧠",
        skills: [
            "LangChain",
            "LangGraph",
            "OpenAI",
            "LLaMA",
            "Mixtral",
            "Gemma",
            "Ollama",
            "TensorFlow",
            "Hugging Face",
            "NLP",
        ],
    },
    {
        title: "RAG & Vector DBs",
        icon: "🔍",
        skills: [
            "FAISS",
            "Chroma",
            "Qdrant",
            "Raptor RAG",
            "Embeddings",
            "Semantic Search",
        ],
    },
    {
        title: "Voice AI",
        icon: "🎙️",
        skills: [
            "Vapi",
            "Synthflow.ai",
            "AssemblyAI",
            "ElevenLabs",
            "LiveKit",
            "Speech Pipelines",
        ],
    },
    {
        title: "Automation & CRM",
        icon: "⚡",
        skills: [
            "n8n",
            "Make.com",
            "GoHighLevel",
            "Salesforce",
            "Workflow Design",
            "Lead Gen",
        ],
    },
    {
        title: "Development",
        icon: "💻",
        skills: [
            "Python",
            "FastAPI",
            "Streamlit",
            "Docker",
            "GitHub",
            "Web Scraping",
        ],
    },
    {
        title: "Cloud & Infra",
        icon: "☁️",
        skills: [
            "AWS",
            "Microsoft Azure",
            "Prefect",
            "NVIDIA Endpoints",
            "Nebius",
            "TogetherAI",
        ],
    },
];

export default function Skills() {
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
            className={`section ${styles.skills}`}
            id="skills"
            ref={sectionRef}
        >
            <div className="container">
                <div className={`sectionHeader animateIn`}>
                    <span className="sectionTag">Skills</span>
                    <h2 className="sectionTitle">
                        My <span className="gradientText">Tech Stack</span>
                    </h2>
                    <p className="sectionDescription">
                        Technologies and tools I use to build intelligent systems.
                    </p>
                </div>

                <div className={styles.grid}>
                    {skillCategories.map((cat, i) => (
                        <div
                            key={i}
                            className={`glassCard ${styles.card} animateIn`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.catIcon}>{cat.icon}</span>
                                <h3 className={styles.catTitle}>{cat.title}</h3>
                            </div>
                            <div className={styles.skillsList}>
                                {cat.skills.map((skill, j) => (
                                    <span key={j} className={styles.skillBadge}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
