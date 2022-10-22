import "./sectionHeader.scss";

interface Props {
    text: string;
}

const SectionHeader = ({ text }: Props) => (
    <div className="section-header">
        {text}
        <div className="underline"></div>
    </div>
);

export default SectionHeader;
