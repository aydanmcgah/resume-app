export function ContactButton({ text, image, link }) {
  const handleClick = () => {
    if (link) {
      window.open(link);
    }
  };

  return (
    <div className="contact-app" onClick={handleClick}>
      <img className="contact-image" src={image} alt="" />
      <span className="contact-link">{text}</span>
    </div>
  );
}
