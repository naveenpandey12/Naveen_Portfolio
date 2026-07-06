import {
    FaGithub,
    FaLinkedinIn,
    FaFacebookF,
} from "react-icons/fa";

function HeroSocial() {
    return (
        <div className="social-icons">
            <a href="#">
                <FaGithub />
            </a>

            <a href="#">
                <FaLinkedinIn />
            </a>

            <a href="#">
                <FaFacebookF />
            </a>
        </div>
    );
}

export default HeroSocial;