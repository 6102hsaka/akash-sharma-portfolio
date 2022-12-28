import { IExperience } from "../../../model/experience";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import "./timeline.scss";

interface Props {
    title: string;
    timelines: IExperience[];
}

const ExperienceTimeline = ({ title, timelines }: Props) => {
    const timelineRef = useScrollAnimation("section-item-scroll", 0.9);

    return (
        <div ref={timelineRef} className="experience-timeline-container">
            <div className="experience-timeline-header">{title}</div>
            <ul className="experience-timeline-main">
                {timelines.map((timeline) => (
                    <li
                        className="experience-timeline"
                        key={timeline.startDate}
                    >
                        <div className="role">{timeline.role}</div>
                        <div className="organization">{timeline.company}</div>
                        <div className="duration">{`${timeline.startDate} - ${timeline.endDate}`}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceTimeline;
