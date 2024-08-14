import { ContactButton } from "./ContactButton";
import gmailImage from "../images/gmail.png";
import linkedInImage from "../images/linkedin.png";
import gitHubImage from "../images/github.png";

export function Contact() {
  return (
    <div className="contact-info">
      <div className="contact-word">Contact</div>

      <ContactButton
        text={"amcgah@umich.edu"}
        image={gmailImage}
        link={"mailto:amcgah@umich.edu"}
      />
      <ContactButton
        text={"@aydanmcgah"}
        image={linkedInImage}
        link={"https://www.linkedin.com/in/aydanmcgah/"}
      />
      <ContactButton
        text={"@aydanmcgah"}
        image={gitHubImage}
        link={"https://github.com/aydanmcgah"}
      />
    </div>
  );
}
