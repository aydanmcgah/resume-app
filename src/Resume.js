import "./Resume.css";
import './content/content.css'
import { Contact } from "./components/Contact";
import { Profile } from "./components/Profile";
import { Pages } from "./components/Pages";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <div className="App">
      <div className="left">
        <Contact />
      </div>

      <div className="right">
      {/* <div className="background"></></div> */}

        <Profile />
        <Pages />
        <Projects />
      </div>
    </div>
  );
}
