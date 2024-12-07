import { Email, LocationOn, WhatsApp } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const PhoneNumber = () => {
  return (
    <div className=" bg-slate-800  pt-8 ">
      {" "}
      <div className="text-5xl gap-4">
        {" "}
        <Link to={"/Sports"}>
          <p className="flex gap-4 font-bold text-white p-4 mt-8">
            Contact <p className="text-orange-400">Us</p>
          </p>
        </Link>
      </div>
      <div className="flex  p-8 justify-center items-center ">
        {" "}
        <div className="flex col-span-2 w-3/4  p-4 gap-2 rounded-2xl  bg-orange-300">
          {" "}
          <div className=" p-2 grid gap-4 w-2/3 ">
            {" "}
            <input type="text" placeholder="Your Name" className="h-10   " />
            <input type="text" placeholder="Your Email" className="h-10 " />
            <textarea
              name=""
              placeholder="Your Message"
              className="h-52  rounded-lg"
              id=""
            ></textarea>{" "}
            <div className="">
              {" "}
              <button className="bg-orange-500 p-2 w-32 border opacity-45">
                Send Message
              </button>
            </div>
          </div>
          <div className=" pt-10 ">
            {" "}
            <p className=" ">
              {" "}
              <Email /> official@lucknowfc.com
            </p>
            <div className="pt-14 ">
              {" "}
              <p className="">
                {" "}
                <WhatsApp />
                9324508806
              </p>
            </div>
            <div className="pt-14 ">
              {" "}
              <p className="">
                <LocationOn />
                India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumber;
