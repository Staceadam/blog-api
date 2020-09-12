/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";

function BlogItem({ data }) {
    const { title, previewText, url } = data;
    return (
        <div css={styles.container}>
            <h3>{title}</h3>
            <em>
                <p>{previewText}</p>
            </em>
            <Link css={styles.link} to={url}>
                Read -->
            </Link>
        </div>
    );
}

const styles = {
    container: {
        marginBottom: 40
    },
    link: {
        color: "black"
    }
};

export default BlogItem;
