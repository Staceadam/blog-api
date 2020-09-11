/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const Home = () => {
    return (
        <div>
            Tons of work to do...
            <ul>
                <li>Add react router</li>
                <li>update site styles</li>
                <li>make a design system</li>
                <li>create blog endpoint</li>
                <li>hook up react app with docker</li>
                <li>reconfigure ports on ec2</li>
                <li>hook up api to postgres with prisma</li>
                <li>transfer blog post from medium</li>
                <li>create ci for building to production</li>
            </ul>
        </div>
    );
};

export default Home;
