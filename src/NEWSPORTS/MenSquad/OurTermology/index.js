import React from "react";
import Girl from "../Images/Girl.png";
import Boy from "../Images/Googleboy.png";
import Senior from "../Images/Senior.png";
import Community from "../Images/Communitymember.png";
import Coach from "../Coaches/image.png";
import Sponcer from "../Images/Sponcers.png";

const OURTERMINOLOGY = () => {
  return (
    <div className=" bg-orange-200 ">
      {" "}
      <div className=" flex  gap-2 p-8  text-white text-4xl bg-orange-200      font-extrabold">
        {" "}
        OUR <p className="text-slate-700 gap-2  ">Testimonials</p>
      </div>
      <div className="grid grid-cols-6  gap-4  p-10  ">
        <div className=" bg-black    text-white">
          <img src={Girl} alt="" className="" />{" "}
          <p className="p-2 text-sm">Parents</p>
          <p className="pt-2  text-xs p-2 ">
            My son has been in the Youth Academy for two years, and we're really
            happy with his progress. He's gained confidence, improved his
            skills, and learned good values. Lucknow FC is a wonderful part of
            our community.
          </p>
        </div>
        {/*  */}
        <div className="bg-black w-full  text-white">
          <img src={Boy} alt="" />{" "}
          <p className=" p-2 text-sm"> Youth academy player</p>
          <p className=" pt-2 text-xs p-2 ">
            Being part of Lucknow FC's Youth Academy has been fantastic. The
            coaches are great, and I've learned so much. I've improved my game,
            made friends, and I'm proud to be part of this team.
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-black   text-white">
          <img src={Senior} alt="" />{" "}
          <p className="p-2 text-sm "> Senior Team Player</p>
          <p className="pt-2 text-xs p-2 ">
            Joining Lucknow FC has really boosted my football career. The
            training and support are excellent. The club promotes teamwork and
            sportsmanship, and I'm honored to play here.
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-black  text-white ">
          <img src={Community} alt="" />{" "}
          <p className="p-2 text-sm"> Community Member</p>
          <p className=" pt-2 text-xs p-2 ">
            As someone who lives in Lucknow, I've seen the good things Lucknow
            FC does for our area. They support young players and bring us
            together. Watching their games is always exciting, and I'm proud of
            our team.
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-black   text-white">
          <img src={Coach} alt="" /> <p className="p-2 text-sm "> Coach</p>
          <p className="pt-2  p-2 text-xs">
            Coaching at Lucknow FC has been a rewarding experience. The club
            focuses on honesty, excellence, and community. Seeing the kids grow
            as players and people is very fulfilling.
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-black   text-white ">
          <img src={Sponcer} alt="" /> <p className="p-2  text-sm"> Sponsor</p>
          <p className=" pt-2  p-2 text-xs  ">
            Supporting Lucknow FC has been great for our business. The club's
            dedication to doing things right and helping the community matches
            our values. We love being part of their journey and seeing the
            excitement at their games
          </p>
        </div>
      </div>
    </div>
  );
};

export default OURTERMINOLOGY;
