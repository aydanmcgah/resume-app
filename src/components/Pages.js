import React, { useState } from "react";
import { PopUp } from "./PopUp";
import { PagesCircle } from "./PagesCircle";

export function Pages() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [activePopUp, setActivePopUp] = useState("");

  let popUpContent = null;

  function handleClickPageCircle(event) {
    const clickedId = event.target.id;

    if (clickedId === "fullresume") {
      // If "Full Resume" is clicked, close all pop-ups
      setShowPopUp(false);
      setActivePopUp("");
      const resumeLink =
        "https://drive.google.com/file/d/1YBhGyd2uvTaqZp40geLOAvHsb8U0BF2_/view?usp=drive_link";
      window.open(resumeLink);
    } else {
      // For other PageCircles, open pop-up for the clicked item
      setActivePopUp(clickedId);
      setShowPopUp(true);
    }
  }

  function handleClosePopUp() {
    setShowPopUp(false);
    setActivePopUp("");
  }

  return (
    <>
      <div className="pages">
        <PagesCircle
          text="Work Experience"
          id="experience"
          onClick={handleClickPageCircle}
          activePopUp={activePopUp}
        />
        <PagesCircle
          text="Skills and Coursework"
          id="skills"
          onClick={handleClickPageCircle}
          activePopUp={activePopUp}
        />
        <PagesCircle
          text="Campus Involvement"
          id="involvement"
          onClick={handleClickPageCircle}
          activePopUp={activePopUp}
        />
        <PagesCircle
          text="Full Resume"
          id="fullresume"
          onClick={handleClickPageCircle}
          activePopUp={activePopUp}
        />
        {popUpContent}
      </div>
      {showPopUp && (
        <PopUp activePopUp={activePopUp} onClick={handleClosePopUp} />
      )}
    </>
  );
}

// import React, { useState } from "react";
// import { PopUp } from "./PopUp";
// import { PagesCircle } from "./PagesCircle";

// export function Pages() {
//   const [showPopUp, setShowPopUp] = useState(false);
//   const [activePopUp, setActivePopUp] = useState("");

//   let popUpContent = null;

//   function handleClickPageCircle(event) {
//     setShowPopUp(true);
//     setActivePopUp(event.target.id);
//   }

//   function handleClosePopUp() {
//     setShowPopUp(false);
//     setActivePopUp("");
//   }

//   return (
//     <>
//       <div className="pages">
//         <PagesCircle
//           text="Work Experience"
//           id="experience"
//           onClick={handleClickPageCircle}
//           activePopUp={activePopUp}
//         />
//         <PagesCircle
//           text="Skills and Coursework"
//           id="skills"
//           onClick={handleClickPageCircle}
//           activePopUp={activePopUp}
//         />
//         <PagesCircle
//           text="Campus Involvement"
//           id="involvement"
//           onClick={handleClickPageCircle}
//           activePopUp={activePopUp}
//         />
//         <PagesCircle
//           text="Full Resume"
//           id="fullresume"
//           onClick={handleClickPageCircle}
//           link={
//             "https://drive.google.com/file/d/1YBhGyd2uvTaqZp40geLOAvHsb8U0BF2_/view?usp=drive_link"
//           }
//           activePopUp={activePopUp}
//         />
//         {popUpContent}
//       </div>
//       {showPopUp && (
//         <PopUp activePopUp={activePopUp} onClick={handleClosePopUp} />
//       )}
//     </>
//   );
// }
