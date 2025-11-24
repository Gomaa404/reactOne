import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Page Not Found</h2>
            <p className={styles.text}>
                Sorry, the page you are looking for does not exist.
            </p>
            <div className={styles.buttons}>
                <button onClick={() => navigate("/")}>Go Home</button>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );
}
