import "./App.css";
import googleImage from "./images/google.png";
import searchImage from "./images/search.png";
import microphoneImage from "./images/microphone.webp";
import searchByImage from "./images/search-by.webp";

function Header() {
  return (
    <div className="top-section">
      <div className="about">About</div>
      <div className="store">Store</div>
      <div className="others">
        <div className="right-icons">
          <div className="gmail">Gmail</div>
          <div className="images">Images</div>
          <div>Square</div>
          <div>Prof</div>
        </div>
      </div>
    </div>
  );
}

function Google() {
  return (
    <div className="google-section">
      <img className="google-word" src={googleImage} alt={"Google"}/>
    </div>
  );
}

function Search() {
  return (
    <div className="search-section">
      <div className="search-container">
        <div className="left-search">
          <img className="search-image" src={searchImage} alt ={"Search"} />
        </div>
        <input className="search-bar" type="text" placeholder="" />
        <div className="right-search">
          <div className="right-search-icons">
            <img className="microphone-image" src={microphoneImage} alt={"Microphone"} />
            <img className="search-by-image" src={searchByImage} alt={"Search-By"} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return;
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <Google />
      <Search />
      <Bottom />
    </div>
  );
}

// function T({ text }) {
//   return <div className={`t`}>{text}</div>;
// }

// function Header({ className , text}) {
//   return <div className={className}>
//     {text}
//   </div>;
// }

// function Google() {
//   return <div>GOOGLE</div>;
// }

// function Search() {
//   return <div>SEARCH</div>;
// }

// export default function App() {
//   return (
//     <div className="App">
//       <T text={"About"} />
//       <T text={"Store"} />
//       <Header  className={"about"} text = {"About"}/>
//       <Header className={"store"} text = {"Store"} />
//       <Google />
//       <Search />
//     </div>
//   );
// }

// // export default App;
