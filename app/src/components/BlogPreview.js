/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { BlogItem } from "./";
import { Link } from "react-router-dom";

const data = [
    {
        id: 123,
        title: "test",
        previewText: "This is some preview text to show",
        url: "http://www.google.com"
    },
    {
        id: 456,
        title: "test",
        previewText: "This is some preview text to show",
        url: "http://www.google.com"
    },
    {
        id: 789,
        title: "test",
        previewText: "This is some preview text to show",
        url: "http://www.google.com"
    }
];

function BlogPreview() {
    return (
        <div className="container" css={styles.container}>
            <h2 css={styles.h2}>Blog</h2>
            {data.map((data) => (
                <BlogItem key={data.id} data={data} />
            ))}
            <Link css={styles.link} to="somewhere">
                View all articles
            </Link>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: 800,
        marginTop: -20,
        padding: "40px 80px 60px 80px",
        // position: relative;
        background: "white",
        borderRadius: 5,
        padding: "40px 80px 60px 80px",
        marginBottom: "1.55rem",
        color: "black"
    },
    h2: {
        marginBottom: "2.325rem"
    },
    link: {
        color: "black"
    }
};

export default BlogPreview;
