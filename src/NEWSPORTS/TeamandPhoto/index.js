import React from "react";
import { Facebook, Mail, Twitter, YouTube } from "@mui/icons-material";
import sega from "../Images/sega.png";
import jonex from "../Images/jonex.png";
import india from "../Images/india.png";
import graviti from "../Images/gravity.png";
import { Link } from "react-router-dom";
import img from "../TeamandPhoto/image.png";
import img1 from "../TeamandPhoto/image copy 3.png";
import img2 from "../TeamandPhoto/image copy 4.png";
import img3 from "../TeamandPhoto/image copy 3.png";

const Gallary = () => {
  return (
    <div className="  ">
      <div className=" text-center text-4xl px-7 p-5  bg-orange-300   font-bold ">
        <Link to={"/NewSports"}>
          <p className="  flex  gap-2    font-bold hover:bg-b  px-8  text-left  lack   hover:text-white text-4xl  text-white ">
            TEAM <p className="flex text-slate-700   font-bold">AND PHOTO</p>
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4 p-16   bg-orange-300 justify-center  items-center ">
        {" "}
        <img
          src={img}
          alt=""
          className="w-full h-72 border-4  rounded-lg hover:scale-90    "
        />
        <img
          src={img1}
          alt=""
          className="w-full h-72 rounded-lg   hover:scale-90  border-4   "
        />
        <img
          src={img2}
          alt=""
          className="w-full h-72 rounded-lg  border-  hover:scale-90  border-4 "
        />
        <img
          src={img3}
          alt=""
          className="w-full h-72 hover: rounded-lg hover:scale-90  border-4  "
        />
      </div>
      {/*  */}
      <div>
        <div>
          <div>
            <div className=" bg-slate-900   pt-4 ">
              <h2 className="font-bold p-8 text-4xl bg-slate-900   text-white  ">
                {" "}
                Team and Training{" "}
              </h2>
              <div className="grid grid-cols-3 bg-slate-900  pt-8 gap-5  p-8 justify-center      text-center      mt-4  ">
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
                    team by cheering, offering encouragement, and helping
                    maintain a positive atmosphere on the sidelines.They stay
                    ready to enter the game at any time, warming up regularly
                    and paying attention to the flow of the match. While on the
                    bench, reserves can closely watch the opponent’s strategies,
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
      </div>
      <div className="grid  border-black border    bg-orange-300  ">
        <p className="flex  text-4xl">
          {" "}
          <h1 className=" flex  text-4xl  p-4  gap-2 text-white  font-extrabold ">
            OUR <p className=" text-4xl  text-white">PARTNERS</p>{" "}
          </h1>
        </p>
        <div className="flex items-center p-8  gap-8 justify-center ">
          <img className="h-24  border-white  border-4 " src={sega} alt="" />
          <img className="h-24   border-white  border-4" src={jonex} alt="" />
          <img
            className="h-24    border-white    border-4"
            src={india}
            alt=""
          />
          <img className="h-24    border-white border-4" alt="" src={graviti} />
        </div>
      </div>

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
      {/*  */}

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
  );
};

export default Gallary;
