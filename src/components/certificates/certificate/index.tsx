import { ICertificate } from "../../../model/certificate";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import "./certificate.scss";

interface Props {
    certificate: ICertificate;
}

const Certificate = ({ certificate }: Props) => {
    const certificateRef = useScrollAnimation("section-item-scroll", 0.9);

    return (
        <div ref={certificateRef} className="certificate-container">
            <img
                src={certificate.imageUri}
                alt={certificate.name}
                height="100"
                width="100"
                className="certificate-img"
            />
            <a
                className="certificate-description"
                href={certificate.url}
                target="_blank"
                rel="noreferrer"
                aria-label={certificate.name}
            >
                {certificate.name}
                <span>click to view</span>
            </a>
        </div>
    );
};

export default Certificate;
