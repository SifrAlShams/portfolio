"use client";

import { useEffect, useRef } from "react";
import styles from "./Education.module.css";

const education = [
    {
        degree: "MS in Artificial Intelligence",
        institution: "Lahore University of Management Sciences (LUMS)",
        period: "Sep 2024 — Sep 2026",
        details: "Courses: AI, Mathematics for AI, Machine Learning, LLMs",
        icon: "🎓",
    },
    {
        degree: "BS in Computer Science",
        institution: "Namal University Mianwali",
        period: "Oct 2020 — Jul 2024",
        details: "Courses: OOP, Data Structures, Algorithms, Databases, AI, ML",
        icon: "🎓",
    },
];

const certifications = [
    {
        name: "Machine Learning Specialization",
        issuer: "Coursera — Andrew Ng",
        period: "2023",
    },
    {
        name: "Generative AI with Large Language Models",
        issuer: "Coursera — AWS",
        period: "2024",
    },
    {
        name: "Linear Algebra for Machine Learning",
        issuer: "Coursera — Luis Serrano",
        period: "2024",
    },
    {
        name: "Data Wrangling (Slice N' Dice)",
        issuer: "University of Glasgow",
        period: "2021",
    },
    {
        name: "Corporate Training",
        issuer: "NETSOL Technologies",
        period: "2024",
    },
];

const honours = [
    {
        title: "IEEE Conference Research Paper Publication",
        year: "2023",
        icon: "📄",
    },
    {
        title: "High Achiever — Sargodha Board (FSc)",
        year: "",
        icon: "🏆",
    },
    {
        title: "Winner of Speech Competitions — Divisional Level",
        year: "",
        icon: "🎤",
    },
];

export default function Education() {
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
            className={`section ${styles.education}`}
            id="education"
            ref={sectionRef}
        >
            <div className="container">
                <div className={`sectionHeader animateIn`}>
                    <span className="sectionTag">Education & Credentials</span>
                    <h2 className="sectionTitle">
                        Academic <span className="gradientText">Background</span>
                    </h2>
                </div>

                <div className={styles.layout}>
                    {/* Education */}
                    <div className={`${styles.column} animateIn`}>
                        <h3 className={styles.columnTitle}>Education</h3>
                        <div className={styles.cards}>
                            {education.map((edu, i) => (
                                <div key={i} className={`glassCard ${styles.card}`}>
                                    <div className={styles.cardIcon}>{edu.icon}</div>
                                    <div>
                                        <h4 className={styles.degree}>{edu.degree}</h4>
                                        <p className={styles.institution}>{edu.institution}</p>
                                        <span className={styles.period}>{edu.period}</span>
                                        <p className={styles.details}>{edu.details}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className={`${styles.column} animateIn`}>
                        <h3 className={styles.columnTitle}>Certifications</h3>
                        <div className={styles.cards}>
                            {certifications.map((cert, i) => (
                                <div key={i} className={`glassCard ${styles.certCard}`}>
                                    <div className={styles.certBullet}></div>
                                    <div>
                                        <h4 className={styles.certName}>{cert.name}</h4>
                                        <p className={styles.certIssuer}>
                                            {cert.issuer} · {cert.period}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Honours */}
                    <div className={`${styles.column} animateIn`}>
                        <h3 className={styles.columnTitle}>Honours & Awards</h3>
                        <div className={styles.cards}>
                            {honours.map((h, i) => (
                                <div key={i} className={`glassCard ${styles.certCard}`}>
                                    <span className={styles.honourIcon}>{h.icon}</span>
                                    <div>
                                        <h4 className={styles.certName}>{h.title}</h4>
                                        {h.year && (
                                            <p className={styles.certIssuer}>{h.year}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
