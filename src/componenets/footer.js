import fcIcon from "./../images/fc-icon.png";
import twtIcon from "./../images/twt-icon.png";
import insIcon from "./../images/ins-icon.png";
import gitIcon from "./../images/git-icon.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="icons" id="twt">
                <img src={twtIcon} alt="icon" />
            </div>
            <div className="icons" id="fc">
                <img src={fcIcon} alt="icon" />
            </div>
            <div className="icons" id="ins">
                <img src={insIcon} alt="icon" />
            </div>
            <div className="icons" id="git">
                <img src={gitIcon} alt="icon" />
            </div>
        </div>
    );
}
