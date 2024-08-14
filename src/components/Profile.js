import { ProfileName } from "./ProfileInfo";
import { ProfileLocation } from "./ProfileInfo";
import { ProfileBio } from "./ProfileInfo";
import profileImage from "../images/profile-pic.png";

export function Profile() {
  const name = "Aydan McGah";
  const location = "University of Michigan, Ann Arbor";
  const bio =
    "As a senior, majoring in Computer Science with a UX Design minor, I am a quick learner who combines technical expertise with human connection. With a semester of study in Prague and conversational Spanish skills, I bring a global perspective to problem-solving. I am eager to tackle new challenges and and am poised to make a significant impact in the tech world through a blend of professionalism and curiosity. ";
  return (
    <div className="profile">
      <div className="profile-container">
        <img className="profile-pic" src={profileImage} alt={"Profile-pic"} />
        <div className="profile-info">
          <ProfileName name={name} />
          <ProfileLocation location={location} />
          <ProfileBio bio={bio} />
        </div>
      </div>
    </div>
  );
}
