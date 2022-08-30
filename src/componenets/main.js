import Header from "./header";
import mailLogo from "./../images/social-logo-mail.png";
import linkLogo from "./../images/social-logo-link.png";

export default function Main() {
    return (
        <>
            <Header />
            <div className="main">
                <p id="name">Laura Smith</p>
                <p id="post">Frontend Developer</p>
                <p id="website">laurasmith.website</p>

                <div className="social-box">
                    <div id="email">
                        <div className="social-logo">
                            <img src={mailLogo} alt="ml"></img>
                        </div>
                        <div className="social-name">
                            <p id="social-name-email">Email</p>
                        </div>
                    </div>
                    <div id="linkedin">
                        <div className="social-logo">
                            <img src={linkLogo} alt="ml"></img>
                        </div>
                        <div className="social-name">
                            <p id="social-name-link">Linkedin</p>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <p className="head" id="about-head">
                        About
                    </p>
                    <p className="cont" id="about-cont">
                        I am a frontend developer with a particular interest in
                        making things simple and automating daily tasks. I try
                        to keep up with security and best practices, and am
                        always looking for new things to learn.
                    </p>
                    <p className="head" id="int-head">
                        Interests
                    </p>
                    <p className="cont" id="int-cont">
                        Food expert. Music scholar. Reader. Internet fanatic.
                        Bacon buff. Entrepreneur. Travel geek. Pop culture
                        ninja. Coffee fanatic.
                    </p>
                </div>
            </div>
        </>
    );
}
