import useScrollAnimation from "../../../hooks/useScrollAnimation";
import "./sectionHeader.scss";

interface Props {
    text: string;
}

const SectionHeader = ({ text }: Props) => {
    const sectionHeaderRef = useScrollAnimation("section-header-scroll", 0.6);

    return (
        <div ref={sectionHeaderRef} className="section-header">
            {text}
            <div className="underline"></div>
        </div>
    );
};

export default SectionHeader;
