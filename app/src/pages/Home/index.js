/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Header from "./Header";
import Main from "./Main";

const Home = () => {
    return (
        <div css={styles.container}>
            <Header />
            <Main />
        </div>
    );
};

export default Home;

const styles = {
    container: {}
};
