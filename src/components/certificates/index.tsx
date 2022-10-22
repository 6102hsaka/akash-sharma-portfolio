import { certificates } from "../../common/constants";

import SectionHeader from "../../common/ui/section-header";
import Certificate from "./certificate";
import "./certificates.scss";

const Certificates = () => {
    return (
        <section className="certificates-container">
            <SectionHeader text="Certificates" />
            <div className="certificate-list">
                {certificates.map((certificate) => (
                    <Certificate
                        key={certificate.name}
                        certificate={certificate}
                    />
                ))}
            </div>
        </section>
    );
};

export default Certificates;
