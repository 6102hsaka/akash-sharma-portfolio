import { IExperience } from "../../../model/experience";
import "./timeline.scss";

interface Props {
    title: string;
    timelines: IExperience[];
}

const ExperienceTimeline = ({ title, timelines }: Props) => {
    return (
        <div className="experience-timeline-container">
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
