import React from "react";
import leg from "../Images/leg.png";
import { Link } from "react-router-dom";

import image from "../TeamandPhoto/image.png";
import image1 from "../TeamandPhoto/image copy.png";
import image2 from "../TeamandPhoto/image copy 3.png";
import img from "../Images/gravity.png";
import img1 from "../Images/india.png";
import img2 from "../Images/jonex.png";
import img3 from "../Images/sega.png";
import {
  BsCircle,
  BsEye,
  BsFacebook,
  BsMailbox,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className=" text-white ">
      <div className="grid grid-cols-2 bg-slate-900 gap-4 p-4">
        <p>
          <Link to="/header">
            {" "}
            <p className=" flex    font-extrabold text-4xl  gap-2 p-4 text-white">
              Abouts{" "}
              <p className="text-orange-200 font-extrabold text-4xl  ">US</p>
            </p>{" "}
          </Link>

          <p className="text-white  text-xs mt-2 p-4  ">
            {" "}
            Welcome to Lucknow Football Clubs, The Lucknow Football Club unites
            skill, enthusiasm, and a shared love of the beautiful game to become
            the beating heart of football in the city of Nawabs. Since its
            founding in 2022, our club has expanded quickly to become a vital
            part of the neighbourhood football scene, developing young players
            and giving aspiring players a chance to succeed. Founded in the
            capital of Uttar Pradesh State in 2022, the Lucknow Football Club is
            a shining example of athletic brilliance in the area. The club was
            established with the goal of advancing football and developing
            players at all levels, from amateur to professional, and it has
            grown to become a major force in Indian football. Fundamentally,
            Lucknow FC is a reflection of the city's diverse cultural fabric,
            uniting traditional traditions with contemporary goals. The club's
            guiding principles centre on making meaningful contributions to the
            community in addition to winning on the field. Lucknow FC works with
            neighbourhood youth groups, academies, and schools through a variety
            of SSIC programs in an effort to find and nurture future football
            players. The team's home field acts as a focal point for supporters
            from all across the city and is frequently a hive of activity and
            enthusiasm. There's always an electrifying atmosphere, screams and
            cheers resonating through the terraces, whether it's an exciting
            league match. Lucknow FC is dedicated to fostering an environment of
            honesty and sportsmanship off the field. To make sure that players
            have the finest possible growth possibilities, the club makes
            investments in cutting-edge training facilities, coaching personnel,
            and support systems. Initiatives like charity events and community
            outreach programs further highlight the club's dedication to giving
            back to the community.
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
                  Our vision is to be known as a premier football team in India,
                  but also as a representation of the Lucknow community's pride
                  and cohesion. Our goals are to keep developing, winning
                  championships, and motivating upcoming football players.
                </p>
              </div>
              <div className="grid  ">
                {" "}
                <p className="flex  text-orange-200  text-center pt-8 text-2xl items-center gap-4 ">
                  {" "}
                  <BsCircle /> Our Mission
                </p>
                <p className="text-xs mt-2">
                  Our mission at Lucknow Football Club is very clear: to use
                  football to inspire and bring our community together. On and
                  off the field, we want to promote a culture of quality,
                  honesty, equality and diversity. Our objective is to create a
                  long-lasting influence on the lives we interact with by means
                  of our commitment to player development, fan interaction, and
                  community involvement..
                </p>
              </div>
            </div>
          </p>
        </p>
        <p className="p-4">
          <img src={leg} alt="" />
        </p>
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
              <div className="bg-orange-300 p-4   grid grid-cols-4">
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
            <div>
              {" "}
              <div>
                {" "}
                <div className=" text-center text-4xl px-7 p-5 bg-slate-900    font-bold ">
                  <Link to={"/sports"}>
                    <p className="  flex  gap-2   font-bold hover:bg-b  px-8  text-left  lack   hover:text-white text-4xl  text-white ">
                      TEAM{" "}
                      <p className="flex text-white   font-bold">AND PHOTO</p>
                    </p>
                  </Link>
                </div>
                <div className="grid grid-cols-4 gap-4 p-16   bg-slate-900 justify-center  items-center ">
                  {" "}
                  <img
                    src={image}
                    alt=""
                    className="w-full h-72 border-4  rounded-lg hover:scale-90    "
                  />
                  <img
                    src={image1}
                    alt=""
                    className="w-full h-72 rounded-lg   hover:scale-90  border-4   "
                  />
                  <img
                    src={image2}
                    alt=""
                    className="w-full h-72 rounded-lg  border-  hover:scale-90  border-4 "
                  />
                  <img
                    alt=""
                    className="w-full h-72 hover: rounded-lg hover:scale-90  border-4  "
                  />
                </div>
              </div>
              {/*  */}
              <div>
                <div>
                  <div className=" bg-orange-300   pt-4 ">
                    <h2 className="font-bold p-8 text-4xl bg-orange-300   text-slate-700  ">
                      {" "}
                      Team and Training{" "}
                    </h2>
                    <div className="grid grid-cols-3 bg-orange-300  pt-8 gap-5  p-8 justify-center      text-center      mt-4  ">
                      {" "}
                      <div className=" text-center   bg-slate-200  border-4  text-black  border-white items-center justify-center  ">
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
                          Strength and Conditioning: Despite being more
                          experienced, they maintain high levels of physical
                          fitness, which is crucial for the physical demands of
                          volleyball. Endurance: Their training focuses on
                          maintaining stamina and agility, allowing them to
                          compete effectively over long matches. Endurance:
                        </p>{" "}
                      </div>
                      <div className=" text-center   bg-slate-200 text-black   border-4   border-white items-center justify-center  ">
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
                          Even when not actively playing, reserve players
                          support the team by cheering, offering encouragement,
                          and helping maintain a positive atmosphere on the
                          sidelines.They stay ready to enter the game at any
                          time, warming up regularly and paying attention to the
                          flow of the match. While on the bench, reserves can
                          closely watch the opponent’s strategies, patterns,.
                        </p>{" "}
                      </div>
                      <div className=" text-center   bg-slate-200  text-black   border-4   border-white items-center justify-center  ">
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
                          The primary goal is to teach young players the
                          fundamental skills of volleyball, including serving,
                          passing, setting, spiking, and blocking. Emphasis is
                          placed on building strong communication skills on the
                          court and fostering a sense of teamwork and
                          camaraderie. Coaches aim to build players' confidence,
                          encouraging them to take on challenges,.
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
                        src={img3}
                        alt=""
                      />
                      <img
                        className="h-24   border-white  border-4"
                        src={img2}
                        alt=""
                      />
                      <img
                        className="h-24    border-white    border-4"
                        src={img1}
                        alt=""
                      />
                      <img
                        className="h-24    border-white border-4"
                        alt=""
                        src={img}
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
                    <p className="text-3xl font-bold  text-black">
                      FIFE FOOTBALL CLUB
                    </p>
                    <p className="text-white mt-4 ">INCUSPOSE</p>
                    <p className="text-white  ">LUCKNOW</p>
                    <p className="text-white">226103</p>
                  </div>
                  <div className="font-normal  ">
                    <h1 className="text-3xl text-black font-bold  ">
                      {" "}
                      USEFULL LINKS
                    </h1>
                    <p className="text-white mt-4 ">ABOUT US</p>
                    <p className="text-white">CONTACT US</p>
                    <p className="text-white"> EVENTS</p>
                    <p className="text-white">TICKETS</p>
                  </div>
                  <div className="font-normal">
                    <h1 className="text-3xl  text-black font-bold ">
                      OPEN HOURS
                    </h1>
                    <p className="text-white pt-4 ">
                      Mon to fri 10:00 AM to 8:00 PM
                    </p>
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
                    Lucknow{" "}
                    <p className="flex   text-red-500 font-bold ">Football</p>
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
                    <BsFacebook />
                    <BsTwitter />
                    <BsMailbox />
                    <BsYoutube />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
