import Greetings from "./Greetings";
import HamBurger from "./HamBurger";
import "./Head.scss";
import ProjectTimeTracker from "./ProjectTimeTracker";
import SearchTask from "./SearchTask";

import userImage from "./self3.jpg";



function Head() {

  return (
    <div className="Head">
      <div className="Headtop">
        <img src={userImage} alt="userImage" />

        <HamBurger />
       
        
      </div>
      <Greetings/>
      <SearchTask />
      <ProjectTimeTracker />
    </div>
  );
}

export default Head;
