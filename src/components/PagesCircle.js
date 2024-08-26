export function PagesCircle({ text, onClick, id, activePopUp, link }) {

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