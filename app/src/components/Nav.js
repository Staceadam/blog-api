/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <header className="container">
            <nav css={styles.nav}>
                <Link to="/">Stacy Adam</Link>
                <div>
                    <Link css={styles.link} to="/blog">
                        Blog
                    </Link>
                    <Link css={styles.link} to="/videos">
                        Videos
                    </Link>
                    <Link css={styles.link} to="/twitter">
                        Twitter
                    </Link>
                    <Link css={styles.link} to="/about">
                        About
                    </Link>
                </div>
            </nav>
        </header>
    );
}

const styles = {
    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "0 auto",
        padding: "30px 0 25px"
    },
    link: {
        padding: "8px 10px"
    }
};

export default Nav;
