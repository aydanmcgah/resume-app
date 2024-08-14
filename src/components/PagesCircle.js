export function PagesCircle({ text, onClick, id, activePopUp, link }) {

    // const handleClick = () => {
    //     if (link) {
    //       window.open(link);
    //     }
    //   };
  
    return (
      <div
        className={activePopUp === id ? "pages-circle-highlight" : "pages-circle"}
        id={id}
        onClick={onClick}
      >
        {text}
      </div>
    );
  }