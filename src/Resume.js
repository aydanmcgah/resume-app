import './styles/Resume.css';
import './styles/content.css';
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

        <Profile />
        <Pages />
        <Projects />
      </div>
    </div>
  );
}
