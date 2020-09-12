/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { BlogPreview } from "../../components";

function Main() {
    return (
        <section css={styles.container}>
            <BlogPreview />
        </section>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#eee"
    }
};

export default Main;
