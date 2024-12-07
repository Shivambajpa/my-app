import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./SignIn";
import Hooks from "./Hook/hooks";
import List from "./Mycard/list";
import Usestate from "./Hook/usestate";
import Validation from "./formvalidation";

import ValidationTask from "./formvalidation";
import Practice from "./formvalidation/Practice";
import Practice2 from "./formvalidation/practice2";
import Test1 from "./TEST/test1";
import Test2 from "./TEST/test2";
import Paperlist from "./Mycard/paperlist";
import Mylist from "./Mycard/mylist";
import Paperlist1 from "./Mycard/paperlist1";
import ImageSlider from "./Imagescrolling.js";
import Practice3 from "./formvalidation/practice3.js";
import Practice4 from "./formvalidation/practice4.js";
import New from "./NewformValidate/index.js";
import Formik from "./NewformValidate/formik.js";
import Practice22 from "./formvalidation/Practice2.1.js";
import Practice33 from "./NewformValidate/formik.js";
import ReactJS from "./Reactjsx/index.js";
import Inex1 from "./Reactjsx/indx1.js";
import ReactIndu from "./Reactjsx/index3.js";

import Index4 from "./Reactjsx/Index4.js";
import HHome from "./Component/index.js";
import About from "./Component/About.js";
import Contact from "./Component/contact.js";
import Attributes from "./jsx Attribute.js/index.js";
import CSSSTYLE from "./CssStyleing/index.js";
import { Commponnent } from "./Commponnent.js";
import Houses from "./House/houses.js";
import User1 from "./Component/ClassorFunctinalcomponent/user1.js";
import Do from "./Component/ClassorFunctinalcomponent/user.js";
import BOX from "./Props/index.js";
import Home2 from "./Props/index2.js";
import CickEvent from "./Click/index.js";
import State from "./Click/state.js";
import { Imi } from "./Save/index.js";
import Counter from "./Counter/Counter.js";
import Countera from "./Counter/index.js";
import Indexj from "./Method as props/indexj.js";
import MethodProps from "./Method as props/index.js";
import Pilluu from "./NewformValidate/lund.js";
import Conditionalrendring from "./Conditional Rendring/index.js";
import Ifelsemethod from "./Conditional Rendring/Ifelsemethod.js";
import { ClearComponent } from "./ComponentPart/index.js";
import ClearClass from "./ComponentPart/ClearClass.js";
import Functionall from "./Component/ClassorFunctinalcomponent/index.js";
import CallState from "./Callstate/index.js";
import Coderpop from "./Callstate/Coderpop.js";
import Papaya from "./Propsinclass/index.js";
import Hooka from "./HooksinReact/index.js";
import { Email } from "./Component/email.js";
import PhoneNumber from "./FootballWebsite/PhoneNumber.js";
import Click8 from "./Dabba/Click.js";
import Greeting from "./Component/ClassorFunctinalcomponent/classcompone.js";
import Popo from "./Propsinclass/Propspractice.jsx";
import ImageSliderBall from "./ClickMethod/index.js";
import PictureSlider from "./PictureSlider/index.js";
import Card from "./PictureSlider/Card.js";
import ReactDevloperTool from "./ReactdeveloperTool/index.js";
import Devtool from "./ReactdeveloperTool/Devtool.js";
import DigitalClock from "./DigitalClock/index.js";
import Newdigitalclock from "./DigitalClock/newdigitalclock.jsx";

import TailWinded from "./Tailwinded/index.js";
import Flashcard from "./Tailwinded/index.js";
import Mui from "./MuiTutorial/index.js";
import AboutUs from "./NEWSPORTS/AboutUs/index.js";
import Header from "./NEWSPORTS/Header/index.js";
import GirlsTeam from "./NEWSPORTS/GirlsTeam/index.js";
import BoyTeam from "./NEWSPORTS/BoysTeam/index.js";
import Goalkeeper from "./NEWSPORTS/WomanSquad/Goalkeeper/index.js";
import Forword from "./NEWSPORTS/WomanSquad/Forword/index.js";
import Coaches from "./NEWSPORTS/WomanSquad/Coaches/index.js";
import Midfeailder from "./NEWSPORTS/WomanSquad/Midfealder/index.js";
import Forwordmens from "./NEWSPORTS/MenSquad/Forwords/index.js";
import Dfenders from "./NEWSPORTS/MenSquad/DFENDERS/index.js";
import BoysCoaches from "./NEWSPORTS/MenSquad/Coaches/index.js";
import NewGoalKeepers from "./NEWSPORTS/MenSquad/GoalKeepers/newgoalkeeper.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Index" element={<Index />} />
          <Route path="Hooks" element={<Hooks />} />
          <Route path="List" element={<List />} />
          <Route path="useState" element={<Usestate />} />
          <Route path="Validation" element={<Validation />} />
          <Route path="validationtask" element={<ValidationTask />} />
          <Route path="Practice" element={<Practice />} />
          <Route path="practice2" element={<Practice2 />} />
          <Route path="Test1" element={<Test1 />} />
          <Route path="Test2" element={<Test2 />} />
          <Route path="paperlist" element={<Paperlist />} />
          <Route path="mylist" element={<Mylist />} />
          <Route path="paperlist1" element={<Paperlist1 />} />
          <Route path="imageslider" element={<ImageSlider />} />
          <Route path="practice3" element={<Practice3 />} />
          <Route path="practice4" element={<Practice4 />} />
          <Route path="new" element={<New />} />
          <Route path="formik" element={<Formik />} />
          <Route path="Practice22" element={<Practice22 />} />
          <Route path="Practice33" element={<Practice33 />} />
          <Route path="ReactJS" element={<ReactJS />} />
          <Route path="indx1" element={<Inex1 />} />
          <Route path="ReactIndu" element={<ReactIndu />} />
          <Route path="test2" element={<Test2 />} />
          <Route path="index4" element={<Index4 />} />
          <Route path="hhome" element={<HHome />} />
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="attributes" element={<Attributes />} />
          <Route path="cssstyle" element={<CSSSTYLE />} />
          <Route path="commponnent" element={<Commponnent />} />
          <Route path="Houses" element={<Houses />} />
          <Route path="user" element={<User1 />} />
          <Route path="do" element={<Do />} />
          <Route path="Box" element={<BOX />} />
          <Route path="Home2" element={<Home2 />} />
          <Route path="CickEvent" element={<CickEvent />} />
          <Route path="State" element={<State />} />
          <Route path="Imi" element={<Imi />} />
          <Route path="Counter" element={<Counter />} />
          <Route path="Countra" element={<Countera />} />
          <Route path="Indexj" element={<Indexj />} />
          <Route path="MethosProps" element={<MethodProps />} />
          <Route path="Pilluu" element={<Pilluu />} />
          <Route path="ConditinalRendring" element={<Conditionalrendring />} />
          <Route path="Ifelsemethod" element={<Ifelsemethod />} />
          <Route
            path="ClearComponent"
            element={<ClearComponent></ClearComponent>}
          />
          <Route path="ClearClass" element={<ClearClass />} />
          <Route path="Functionall" element={<Functionall />} />
          <Route path="CallState" element={<CallState />} />
          <Route path="CoderPop" element={<Coderpop />} />
          <Route path="Papaya" element={<Papaya />} />
          <Route path="Hooka" element={<Hooka />} />
          <Route path="email" element={<Email />} />
          <Route path="phonenumber" element={<PhoneNumber />} />
          <Route path="Dabba" element={<Click8 />} />
          <Route path="Greeting" element={<Greeting />} />
          <Route path="popo" element={<Popo />} />
          <Route path="imagesliderball" element={<ImageSliderBall />} />
          <Route path="pictureslider" element={<PictureSlider />} />
          <Route path="card" element={<Card />} />
          <Route path="reactdevlopertool" element={<ReactDevloperTool />} />
          <Route path="dev" element={<Devtool />} />
          <Route path="Clock" element={<DigitalClock />} />
          <Route path="newClock" element={<Newdigitalclock />} />
          <Route path="tailwinded" element={<TailWinded />} />
          <Route path="flashcard" element={<Flashcard />} />
          <Route path="mui" element={<Mui />} />
          <Route path="header" element={<Header />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="GirlsTeam" element={<GirlsTeam />} />
          <Route path="boysteam" element={<BoyTeam />} />
          <Route path="goalkeeper" element={<Goalkeeper />} />
          <Route path="forword" element={<Forword />} />
          <Route path=" Coaches" element={<Coaches />} />
          <Route path=" Midfeailder" element={<Midfeailder />} />
          <Route path="Forwords" element={<Forwordmens />} />
          <Route path="Dfenders" element={<Dfenders />} />
          <Route path="BoysCocheses" element={<BoysCoaches />} />
          <Route path="newGoalKeepers" element={<NewGoalKeepers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
