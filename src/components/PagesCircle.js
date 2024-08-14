export function PagesCircle({ text, onClick, id, activePopUp, link }) {
    console.log("activePopUp:", activePopUp);
    console.log("id:", id);

    const handleClick = () => {
        if (link) {
          window.open(link);
        }
      };
  
    return (
      <div
        className={activePopUp === id ? "pages-circle-highlight" : "pages-circle"}
        id={id}
        onClick={link ? handleClick : onClick}
      >
        {text}
      </div>
    );
  }