import { ExperienceContent } from "../content/ExperienceContent";
import { SkillsContent } from "../content/SkillsContent";
import { InvolvementContent } from "../content/InvolvementContent";

const popUpContent = {
    experience: { content: <ExperienceContent /> },
    skills: { content: <SkillsContent /> },
    involvement: { content: <InvolvementContent /> },
    fullresume: { test: "test4" },
  };
  
export function PopUp({ activePopUp, onClick }) {
    return (
      <div className="pop-up">
        {popUpContent[activePopUp].content}
        <button className="close-button" onClick={onClick}>
          X
        </button>
      </div>
    );
  }