"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";

const projects = [
    {
        title: "Student Co-Study LMS Assistant",
        category: "Agentic AI",
        description:
            "An agentic system integrated into LMS that helps students with assessment reminders, practice Q&A, and completing coursework through intelligent task orchestration.",
        tags: ["LangGraph", "OpenAI", "Qdrant", "FastAPI"],
        icon: "🎓",
    },
    {
        title: "EstateWise Voice Agent",
        category: "Voice AI",
        description:
            "Voice-based AI agent for real estate — handles property listings, FAQs, meeting scheduling via Google Calendar, and connects users to agents for deal locking.",
        tags: ["LangGraph", "LLaMA", "FAISS", "ElevenLabs", "AssemblyAI"],
        github: "https://github.com/SifrAlShams/estate-wise",
        icon: "🏠",
    },
    {
        title: "Customer Support Chatbot",
        category: "Agentic AI",
        description:
            "Context-aware chatbot using fine-tuned open-source LLMs with multi-chain routing. Integrates MySQL database and PDF knowledge base for accurate query resolution.",
        tags: ["LLaMA", "Mixtral", "LangChain", "MySQL", "FAISS"],
        icon: "💬",
    },
    {
        title: "Legal Assistant (RAG)",
        category: "RAG Systems",
        description:
            "RAG-based legal assistant that scrapes web-based legal sources, processes them into a vector database using Raptor RAG, and enables QA through a LangGraph agent.",
        tags: ["Raptor RAG", "LangGraph", "VectorDB", "Web Scraping"],
        icon: "⚖️",
    },
    {
        title: "Multi-PDF RAG System",
        category: "RAG Systems",
        description:
            "Multi-document chatbot supporting dynamic LLM switching and conversational context. Uses LangChain for orchestration with FastAPI backend.",
        tags: ["LangChain", "FAISS", "FastAPI", "Streamlit"],
        icon: "📄",
    },
    {
        title: "News Article Summarizer",
        category: "LLM Apps",
        description:
            "URL-to-summary tool leveraging Meta's LLaMA 3 via Nebius API. Features both Streamlit and FastAPI interfaces for flexible deployment.",
        tags: ["LLaMA 3", "LangChain", "Nebius", "FastAPI"],
        github: "https://github.com/SifrAlShams/News_Article_Summarizer",
        icon: "📰",
    },
    {
        title: "MLP from Scratch",
        category: "ML Fundamentals",
        description:
            "Multi-layer perceptron built from scratch to understand neural networks at the fundamental level. Uses evolutionary algorithms for parameter optimization.",
        tags: ["NumPy", "Python", "Evolutionary Algorithms"],
        github: "https://github.com/SifrAlShams/Multilayer-Perceptron",
        icon: "🧬",
    },
    {
        title: "Face Mask Detection (CNN)",
        category: "Computer Vision",
        description:
            "CNN-based system to detect face masks in images. Implements data augmentation to increase training data diversity and improve model robustness.",
        tags: ["TensorFlow", "CNN", "Data Augmentation", "OpenCV"],
        github: "https://github.com/SifrAlShams/Face-Mask-Detection",
        icon: "😷",
    },
];

const categories = [
    "All",
    "Agentic AI",
    "Voice AI",
    "RAG Systems",
    "LLM Apps",
    "ML Fundamentals",
    "Computer Vision",
];

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const sectionRef = useRef(null);

    const filtered =
        filter === "All"
            ? projects
            : projects.filter((p) => p.category === filter);

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
            className={`section ${styles.projects}`}
            id="projects"
            ref={sectionRef}
        >
            <div className={styles.bgOrb}></div>
            <div className="container">
                <div className={`sectionHeader animateIn`}>
                    <span className="sectionTag">Projects</span>
                    <h2 className="sectionTitle">
                        Things I&apos;ve{" "}
                        <span className="gradientText">Built</span>
                    </h2>
                    <p className="sectionDescription">
                        From voice agents to RAG pipelines — a selection of AI projects
                        that solve real problems.
                    </p>
                </div>

                <div className={`${styles.filters} animateIn`}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${filter === cat ? styles.active : ""
                                }`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className={styles.grid}>
                    {filtered.map((project, i) => (
                        <div key={project.title} className={`glassCard ${styles.card}`}>
                            <div className={styles.cardTop}>
                                <span className={styles.projectIcon}>{project.icon}</span>
                                <span className={styles.categoryBadge}>
                                    {project.category}
                                </span>
                            </div>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDesc}>{project.description}</p>
                            <div className={styles.projectTags}>
                                {project.tags.map((tag, j) => (
                                    <span key={j} className={styles.projectTag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.githubLink}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View Code
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
