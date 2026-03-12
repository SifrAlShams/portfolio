"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const handleMouseMove = (e) => {
            const rect = hero.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            hero.style.setProperty("--mouse-x", `${x}%`);
            hero.style.setProperty("--mouse-y", `${y}%`);
        };

        hero.addEventListener("mousemove", handleMouseMove);
        return () => hero.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className={styles.hero} ref={heroRef} id="hero">
            <div className={styles.bgGlow}></div>
            <div className={styles.gridPattern}></div>

            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.content}>
                    <div className={styles.tagline}>
                        <span className={styles.dot}></span>
                        Available for opportunities
                    </div>
                    <h1 className={styles.title}>
                        Hi, I&apos;m <span className={styles.name}>Shamsa Batool</span>
                    </h1>
                    <h2 className={styles.subtitle}>
                        AI/ML Engineer &{" "}
                        <span className="gradientText">Agentic AI Developer</span>
                    </h2>
                    <p className={styles.description}>
                        I build intelligent AI agents, voice interfaces, and automation
                        systems that transform how businesses operate. From LLM-powered
                        chatbots to full-stack AI workflows — I turn complex AI into
                        real-world solutions.
                    </p>
                    <div className={styles.ctas}>
                        <a href="#contact" className="btnPrimary">
                            <span>Get in Touch</span>
                        </a>
                        <a
                            href="/resume/Shamsa_Batool_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btnSecondary"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7,10 12,15 17,10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download Resume
                        </a>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>2+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>10+</span>
                            <span className={styles.statLabel}>AI Projects</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>4</span>
                            <span className={styles.statLabel}>Companies</span>
                        </div>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.imageGlow}></div>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/headshot.jpg"
                            alt="Shamsa Batool"
                            width={400}
                            height={480}
                            priority
                            className={styles.headshot}
                        />
                    </div>
                    <div className={styles.floatingBadge} style={{ top: "10%", right: "-10%" }}>
                        <span>🤖</span> Agentic AI
                    </div>
                    <div className={styles.floatingBadge} style={{ bottom: "15%", left: "-10%" }}>
                        <span>🎙️</span> Voice AI
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.scrollLine}></div>
            </div>
        </section>
    );
}
