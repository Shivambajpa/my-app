import React from "react";
import imagea from "../Images/Logo.png";
import leg from "../Images/leg.png";
import Girl from "../Images/Girl.png";
import Boy from "../Images/Googleboy.png";
import Senior from "../Images/Senior.png";
import Community from "../Images/Communitymanager.png";
import Sponcer from "../Images/Sponcers.png";
import copy2 from "../TeamandPhoto/image copy 2.png";
import copy3 from "../TeamandPhoto/image copy 3.png";
import copy4 from "../TeamandPhoto/image copy 4.png";
import image from "../TeamandPhoto/image.png";
import sega from "../Images/sega.png";
import jonex from "../Images/jonex.png";
import india from "../Images/india.png";
import graviti from "../Images/gravity.png";
import Couch from "../Images/image.png";
import {
  Facebook,
  KeyboardArrowDown,
  Mail,
  Twitter,
  YouTube,
} from "@mui/icons-material";

import { Circle, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Button, Fade, Menu, MenuItem } from "@mui/material";
import { BsEye } from "react-icons/bs";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const opens2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <div className="">
      <div className="">
        {" "}
        <div className="flex  bg-gradient-to-r items-center  text-white  text-end  justify-end gap-4 from-green-600 to-orange-600">
          {" "}
          <Facebook />
          <Instagram />
          <YouTube />
          <Twitter />
          <LinkedIn />
          <button className="bg-slate-900  text-white p-2">
            <Link to={"/phonenumber"}>
              <p className="!hover:bg-black text-center   hover:text-white text-xl ">
                Free Trial
              </p>
            </Link>
          </button>
        </div>
        <div className=" flex  gap-5  bg-gradient-to-r from-green-500 to-orange-500">
          {" "}
          <p className="flex">
            <img src={imagea} alt="" className="h-36 " />
          </p>
          <p className="flex p-4 text-black font-bold text-center gap-5 items-center  text-4xl ">
            Lucknow Football Club{" "}
          </p>
          <div className=" flex gap-10  px-6 items-center justify-center font-bold text-black text-[17px]">
            <Link to={"/"}>
              <button className="hover:text-[#ff681c] ">Home</button>
            </Link>
            <Link to={"/AboutUs"}>
              <button className="hover:text-[#ff681c]">About-Us</button>
            </Link>
            <div>
              <Button
                className="!hover:text-[#ff681c] !font-bold !capitalize !text-black !text-[17px]"
                id="fade-button"
                aria-controls={opens ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={opens ? "true" : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDown />}
              >
                Squad
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  // "aria-labelledby": "fade-button",
                  className: "!p-0",
                }}
                anchorEl={anchorEl}
                open={opens}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <Link to={"/"}>
                  <MenuItem
                    className="!text-sm !bg-gradient-to-r from-green-300 to-orange-300 "
                    onClick={handleClose}
                  >
                    Team
                  </MenuItem>
                  <hr />
                  <Link to="/goalkeeper">
                    <MenuItem
                      className="!text-sm !bg-gradient-to-r from-green-400 to-orange-200"
                      // onClick={handleClose}
                    >
                      Women's Team
                    </MenuItem>
                  </Link>
                  <Link to={"/newGoalKeepers"}>
                    <MenuItem
                      className="!text-sm !bg-gradient-to-r from-green-200 to-orange-200"
                      onClick={handleClose}
                    >
                      Men's Team
                    </MenuItem>
                  </Link>
                  <hr />
                </Link>
                <Link to={""}>
                  <MenuItem
                    className="!text-sm !bg-gradient-to-r from-green-300 to-orange-300"
                    onClick={handleClose}
                  >
                    Academy
                  </MenuItem>
                  <hr />
                  <Link to="/GirlsTeam">
                    <MenuItem
                      className="!text-sm !bg-gradient-to-r from-green-200 to-orange-200"
                      // onClick={handleClose}
                    >
                      Girl's Team
                    </MenuItem>
                  </Link>
                  <Link to="/boysteam">
                    <MenuItem
                      className="!text-sm !bg-gradient-to-r from-green-200 to-orange-200"
                      // onClick={handleClose}
                    >
                      Boy's Team
                    </MenuItem>
                  </Link>
                </Link>
              </Menu>
            </div>

            <Button
              className="!hover:text-[#ff681c] !font-bold  !capitalize !text-black !text-[17px]  "
              id="fade-button"
              aria-controls={opens2 ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={opens2 ? "true" : undefined}
              onClick={handleClick2}
              endIcon={<KeyboardArrowDown />}
            >
              <Link to={""}> Gallery</Link>
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                // "aria-labelledby": "fade-button",
                className: "!p-0",
              }}
              anchorEl={anchorEl2}
              open={opens2}
              onClose={handleClose2}
              TransitionComponent={Fade}
            >
              <Link to={""}>
                <MenuItem
                  className=" text-sm  !border-2px !bg-gradient-to-r from-green-300 to-orange-300 "
                  onClick={handleClose}
                >
                  Team and Photo
                </MenuItem>
                <hr />
              </Link>
              <Link to={""}>
                <MenuItem
                  className=" !text-sm  !border-2px !bg-gradient-to-r from-green-300 to-orange-300 "
                  onClick={handleClose}
                >
                  Video
                </MenuItem>
              </Link>
            </Menu>

            <Link to={""}>
              <button className="hover:text-[#ff681c] text-black">Event</button>
            </Link>
            <Link to={"/"}>
              <button className="hover:text-[#ff681c] text-black">
                Ticket
              </button>
            </Link>
            <Link to={"/"}>
              <Link to={"/phonenumber "}>
                <button className="hover:text-[#ff681c] text-black">
                  Contact Us
                </button>
              </Link>
            </Link>
          </div>
        </div>
      </div>

      <div className="  bg-opacity-100 items-center  border-4 border-white justify-center text-center">
        {" "}
        <img
          alt=""
          width="100%"
          src="https://www.lucknowfc.com/assets/oimg4-BRNtszhR.jpeg"
        />
      </div>
      <div>
        {" "}
        <div>
          <div className=" bg-orange-200 ">
            {" "}
            <div className=" flex  gap-2 p-8  text-white text-4xl bg-orange-200      font-extrabold">
              {" "}
              OUR <p className="text-slate-700 gap-2  ">Testimonials</p>
            </div>
            <div className="grid grid-cols-6  gap-4  p-10  ">
              <div className=" bg-black    text-white">
                <img src={Girl} alt="" className="" />{" "}
                <p className=" p-2 text-sm">Parents</p>
                <p className=" p-2 text-xs  ">
                  My son has been in the Youth Academy for two years, and we're
                  really happy with his progress. He's gained confidence,
                  improved his skills, and learned good values. Lucknow FC is a
                  wonderful part of our community.
                </p>
              </div>
              {/*  */}
              <div className="bg-black w-full  text-white">
                <img src={Boy} alt="" />{" "}
                <p className="  p-2 text-sm"> Youth academy player</p>
                <p className="  p-2  text-xs ">
                  Being part of Lucknow FC's Youth Academy has been fantastic.
                  The coaches are great, and I've learned so much. I've improved
                  my game, made friends, and I'm proud to be part of this team.
                </p>
              </div>
              {/*  */}
              {/*  */}
              <div className="bg-black   text-white">
                <img src={Senior} className="h-52 items-center p-4" alt="" />{" "}
                <p className=" p-4 text-sm "> Senior Team Player</p>
                <p className="  p-2  text-xs  ">
                  Joining Lucknow FC has really boosted my football career. The
                  training and support are excellent. The club promotes teamwork
                  and sportsmanship, and I'm honored to play here.
                </p>
              </div>
              {/*  */}
              {/*  */}
              <div className="bg-black  text-white ">
                <img src={Community} alt="" />{" "}
                <p className=" p-2 text-sm"> Community Member</p>
                <p className="    p-2 text-xs  ">
                  As someone who lives in Lucknow, I've seen the good things
                  Lucknow FC does for our area. They support young players and
                  bring us together. Watching their games is always exciting,
                  and I'm proud of our team.
                </p>
              </div>
              {/*  */}
              {/*  */}
              <div className="bg-black   text-white">
                <img
                  src={Couch}
                  className="p-1 text-center items-center"
                  alt=""
                />{" "}
                <p className=" p-2 text-sm "> Coach</p>
                <p className="   p-2  text-xs">
                  Coaching at Lucknow FC has been a rewarding experience. The
                  club focuses on honesty, excellence, and community. Seeing the
                  kids grow as players and people is very fulfilling.
                </p>
              </div>
              {/*  */}
              {/*  */}
              <div className="bg-black   text-white ">
                <img src={Sponcer} alt="" />{" "}
                <p className=" p-2 text-sm"> Sponsor</p>
                <p className="  p-2  text-xs  ">
                  Supporting Lucknow FC has been great for our business. The
                  club's dedication to doing things right and helping the
                  community matches our values. We love being part of their
                  journey and seeing the excitement at their games
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" text-white ">
          <div className="grid grid-cols-2 bg-slate-900 gap-4 p-4">
            <p>
              <Link to="/aboutus">
                {" "}
                <p className=" font-extrabold text-4xl flex gap-2 p-4 text-white">
                  Abouts{" "}
                  <p className="text-orange-200 font-extrabold text-4xl  ">
                    US
                  </p>
                </p>{" "}
              </Link>

              <p className="text-white  text-xs mt-2 p-4  ">
                {" "}
                Welcome to Lucknow Football Clubs, The Lucknow Football Club
                unites skill, enthusiasm, and a shared love of the beautiful
                game to become the beating heart of football in the city of
                Nawabs. Since its founding in 2022, our club has expanded
                quickly to become a vital part of the neighbourhood football
                scene, developing young players and giving aspiring players a
                chance to succeed. Founded in the capital of Uttar Pradesh State
                in 2022, the Lucknow Football Club is a shining example of
                athletic brilliance in the area. The club was established with
                the goal of advancing football and developing players at all
                levels, from amateur to professional, and it has grown to become
                a major force in Indian football. Fundamentally, Lucknow FC is a
                reflection of the city's diverse cultural fabric, uniting
                traditional traditions with contemporary goals. The club's
                guiding principles centre on making meaningful contributions to
                the community in addition to winning on the field. Lucknow FC
                works with neighbourhood youth groups, academies, and schools
                through a variety of SSIC programs in an effort to find and
                nurture future football players. The team's home field acts as a
                focal point for supporters from all across the city and is
                frequently a hive of activity and enthusiasm. There's always an
                electrifying atmosphere, screams and cheers resonating through
                the terraces, whether it's an exciting league match. Lucknow FC
                is dedicated to fostering an environment of honesty and
                sportsmanship off the field. To make sure that players have the
                finest possible growth possibilities, the club makes investments
                in cutting-edge training facilities, coaching personnel, and
                support systems. Initiatives like charity events and community
                outreach programs further highlight the club's dedication to
                giving back to the community.
                {/*  */}
                {/*  */}
                <div className="flex  gap-24">
                  {" "}
                  <div className="">
                    {" "}
                    <p className="flex gap-4 text-orange-200  text-center pt-8 text-2xl items-center  ">
                      {" "}
                      <BsEye /> Our Vision :
                    </p>
                    <p className="text-xs mt-2">
                      Our vision is to be known as a premier football team in
                      India, but also as a representation of the Lucknow
                      community's pride and cohesion. Our goals are to keep
                      developing, winning championships, and motivating upcoming
                      football players.
                    </p>
                  </div>
                  <div className="grid  ">
                    {" "}
                    <p className="flex  text-orange-200  text-center pt-8 text-2xl items-center gap-4 ">
                      {" "}
                      <Circle /> Our Mission
                    </p>
                    <p className="text-xs mt-2">
                      Our mission at Lucknow Football Club is very clear: to use
                      football to inspire and bring our community together. On
                      and off the field, we want to promote a culture of
                      quality, honesty, equality and diversity. Our objective is
                      to create a long-lasting influence on the lives we
                      interact with by means of our commitment to player
                      development, fan interaction, and community involvement..
                    </p>
                  </div>
                </div>
              </p>
            </p>
            <p className="p-4">
              <img src={leg} alt="" />
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <div className="grid p-4  bg-orange-300 ">
              <div className=" ">
                <Link to={"/Sports"}>
                  {" "}
                  <p className=" border-black p-5 text-white font-bold text-3xl">
                    Our Videos
                  </p>{" "}
                </Link>
              </div>
              <div className=" bg-orange-300  p-4   grid grid-cols-4">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.8CiThaaI7NFmFrqflGXr6AHaEo&pid=Api&P=0&h=220"
                  alt=""
                  className=" border-4 hover:scale-90  border-white "
                />
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.I7SOHTOldtZtvWX6XFxTLAHaEo&pid=Api&P=0&h=220"
                  alt=""
                  className=" border-4 hover:scale-90   border-white "
                />
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.peE4o1ezu-I061uikykzrwHaEo&pid=Api&P=0&h=220"
                  alt=""
                  className=" border-4 hover:scale-90   border-white "
                />
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.CmMqe8pxPzwEUcHlmlhe2gHaEK&pid=Api&P=0&h=220"
                  alt=""
                  className=" border-4 hover:scale-90  border-white "
                />{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className=" text-center text-4xl px-7 p-5 bg-slate-900    font-bold ">
          <Link to={"/sports"}>
            <p className="  flex  gap-2   font-bold hover:bg-b  px-8  text-left  lack   hover:text-white text-4xl  text-white ">
              TEAM <p className="flex text-white   font-bold">AND PHOTO</p>
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4 p-16   bg-slate-900 justify-center  items-center ">
          {" "}
          <img
            src={copy2}
            alt=""
            className="w-full h-72 border-4  rounded-lg hover:scale-90    "
          />
          <img
            src={copy3}
            alt=""
            className="w-full h-72 rounded-lg   hover:scale-90  border-4   "
          />
          <img
            src={copy4}
            alt=""
            className="w-full h-72 rounded-lg  border-  hover:scale-90  border-4 "
          />
          <img
            src={image}
            alt=""
            className="w-full h-72 hover: rounded-lg hover:scale-90  border-4  "
          />
        </div>
      </div>
      {/*  */}
      <div>
        <div>
          <div className=" bg-orange-300   pt-4 ">
            {" "}
            <h2 className="font-bold p-8 text-4xl bg-orange-300   text-slate-700  ">
              {" "}
              Team and Training{" "}
            </h2>
            <div className="grid grid-cols-3 bg-orange-300  pt-8 gap-5  p-8 justify-center      text-center      mt-4  ">
              {" "}
              <div className=" text-center   bg-slate-200  border-4   border-white items-center justify-center  ">
                {" "}
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.kOdFFQ7lchzbOwRDrFKbywHaEK&pid=Api&P=0&h=220"
                  style={{
                    width: "500px",
                    height: "300px",
                    border: "5px solid black",
                  }}
                  className="hover:scale-75 "
                  alt=""
                />
                <p className=" ">
                  {" "}
                  Strength and Conditioning: Despite being more experienced,
                  they maintain high levels of physical fitness, which is
                  crucial for the physical demands of volleyball. Endurance:
                  Their training focuses on maintaining stamina and agility,
                  allowing them to compete effectively over long matches.
                  Endurance:
                </p>{" "}
              </div>
              <div className="text-center  bg-slate-200  border-white border-4  justify-center ">
                {" "}
                <img
                  src="https://media.gettyimages.com/id/1167279182/photo/indian-players-ing-the-national-anthem-before-qatar-vs-india-in-a-world-cup-qualifying-match.jpg?s=612x612&w=0&k=20&c=qRJ7tukmlJ2WxuYAot4iGcZvMhx4JDXJeM1j_9CvSOM="
                  alt=""
                  className=" border-y-black  hover:scale-75"
                  style={{
                    width: "500px",
                    height: "300px",
                    border: "5px solid black",
                  }}
                />
                <p className="">
                  {" "}
                  Even when not actively playing, reserve players support the
                  team by cheering, offering encouragement, and helping maintain
                  a positive atmosphere on the sidelines.They stay ready to
                  enter the game at any time, warming up regularly and paying
                  attention to the flow of the match. While on the bench,
                  reserves can closely watch the opponent’s strategies,
                  patterns,.
                </p>{" "}
              </div>
              <div className="text-center  bg-slate-200  border-white  border-4 items-center justify-center">
                {" "}
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP._MoNX6uN486j8n3uzhfGgAHaEK&pid=Api&P=0&h=220"
                  alt=""
                  className=" border-y-black  hover:scale-75 "
                  style={{
                    width: "500px",
                    height: "300px",
                    border: "5px solid black",
                  }}
                />
                <p className="">
                  {" "}
                  The primary goal is to teach young players the fundamental
                  skills of volleyball, including serving, passing, setting,
                  spiking, and blocking. Emphasis is placed on building strong
                  communication skills on the court and fostering a sense of
                  teamwork and camaraderie. Coaches aim to build players'
                  confidence, encouraging them to take on challenges,.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
        </div>
      </div>
      {/*  */}
      <div>
        <div>
          <div className="grid  border-black border    bg-slate-900  ">
            <p className="flex  text-4xl">
              {" "}
              <h1 className=" flex  text-4xl  p-4  gap-2 text-white  font-extrabold ">
                OUR <p className=" text-4xl  text-white">PARTNERS</p>{" "}
              </h1>
            </p>
            <div className="flex items-center p-8  gap-8 justify-center ">
              <img
                className="h-24  border-white  border-4 "
                src={sega}
                alt=""
              />
              <img
                className="h-24   border-white  border-4"
                src={jonex}
                alt=""
              />
              <img
                className="h-24    border-white    border-4"
                src={india}
                alt=""
              />
              <img
                className="h-24    border-white border-4"
                alt=""
                src={graviti}
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <div className="grid grid-cols-3 bg-gradient-to-r p-10 border border-black   from-green-500    to-orange-500 ">
          {" "}
          <div className="font-normal">
            <p className="text-3xl font-bold  text-black">FIFE FOOTBALL CLUB</p>
            <p className="text-white mt-4 ">INCUSPOSE</p>
            <p className="text-white  ">LUCKNOW</p>
            <p className="text-white">226103</p>
          </div>
          <div className="font-normal  ">
            <h1 className="text-3xl text-black font-bold  "> USEFULL LINKS</h1>
            <p className="text-white mt-4 ">ABOUT US</p>
            <p className="text-white">CONTACT US</p>
            <p className="text-white"> EVENTS</p>
            <p className="text-white">TICKETS</p>
          </div>
          <div className="font-normal">
            <h1 className="text-3xl  text-black font-bold ">OPEN HOURS</h1>
            <p className="text-white pt-4 ">Mon to fri 10:00 AM to 8:00 PM</p>
            <p className="text-white">Sat Sun 11:00 AM to $:00 PM </p>
            <p className="text-white">Holidays Closed</p>
          </div>
          <div className=" ">
            <p className="flex  text-center font-bold  text-black justify-center ">
              Lucknow.com|@copyright2024-center
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <div
          class=""
          className="flex   p-4 border-black justify-between bg-slate-300 gap-1 h-24 text-center items-center bg-gradient-to-r  border  from-green-500 to-orange-500"
        >
          <p className="flex pt-4 gap-2 font-bold  text-3xl ">
            Lucknow <p className="flex   text-red-500 font-bold ">Football</p>
            <br /> <p>Club</p>
          </p>
          <div className="flex   gap-5">
            <p className="hover:bg-black   hover:text-white text-2lg font-bold ">
              Home
            </p>
            <p className="hover:bg-black  hover:text-white text-2lg font-bold  ">
              About{" "}
            </p>
            <p className="hover:bg-black   hover:text-white text-2lg font-bold ">
              Events{" "}
            </p>
            <p className="hover:bg-black   hover:text-white text-2lg font-bold  ">
              Tickets
            </p>
            <p className="hover:bg-black  hover:text-white text-2lg font-bold  ">
              Contact Us
            </p>
            <p className="hover:bg-black   hover:text-white text-2lg font-bold  text-black">
              Gallery
            </p>
          </div>
          {/*  */}
          <div className=" text-white flex gap-2  font-bold ">
            <Facebook />
            <Twitter />
            <Mail />
            <YouTube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
