import React from "react";

import {
    internshipExperience,
    fulltimeExperience,
} from "../../common/constants";

import SectionHeader from "../../common/ui/section-header";
import ExperienceTimeline from "./experience-timeline";
import "./experience.scss";

const Experience = () => {
    return (
        <section className="experience-container">
            <SectionHeader text="Experience" />
            <div className="experience-main">
                <ExperienceTimeline
                    title="Full-time"
                    timelines={fulltimeExperience}
                />
                <ExperienceTimeline
                    title="Internship"
                    timelines={internshipExperience}
                />
            </div>
        </section>
    );
};

export default Experience;
