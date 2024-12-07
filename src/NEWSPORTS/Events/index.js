import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r  p-8  bg-slate-900">
        <h1 className="text-4xl   grid grid-cols-4 text-white   font-bold text-center   ">
          <Link to={"/NewSports"}> Events</Link>
        </h1>
        <div className=" pt-10 ">
          <div className="flex  gap-4  w-96 p-8 border-dashed">
            {" "}
            <img
              className=" border-4 hover:scale-95   border-white"
              src="https://media.gettyimages.com/id/859359998/photo/mumbai-india-footballers-are-seen-during-the-ceremony-within-a-2017-fifa-u-17-world-cup.jpg?s=612x612&w=0&k=20&c=ofBiU60xJqgzE5oiiVmgOeZtPkSkDIio1_l8UFY7fEs="
              alt=""
            />
            <img
              src="https://media.gettyimages.com/id/1167279182/photo/indian-players-ing-the-national-anthem-before-qatar-vs-india-in-a-world-cup-qualifying-match.jpg?s=612x612&w=0&k=20&c=qRJ7tukmlJ2WxuYAot4iGcZvMhx4JDXJeM1j_9CvSOM="
              alt=""
              className=" border-4 hover:scale-95    border-white"
            />
            <img
              src="https://media.gettyimages.com/id/1690942810/photo/hangzhou-china-both-team-players-walk-into-the-field-during-the-19th-asian-game-men-group-a.jpg?s=612x612&w=0&k=20&c=HEw2VZf53gog5VLXarsX3nquyy0FlS0iuU6shjV-B_0="
              alt=""
              className=" border-4 hover:scale-95    border-white"
            />
            <img
              src="https://media.gettyimages.com/id/1343526440/photo/soccer-winning-team-photograph-of-school-children-in-school-courtyard.jpg?s=612x612&w=0&k=20&c=aEbwfkfvohCQ_gI3PNwXW5i9UEMSBO32BkoGqkh_FHs="
              alt=""
              className=" border-4 hover:scale-95   border-white"
            />{" "}
          </div>{" "}
          <div className=" flex gap-4  w-96 p-8">
            <img
              src="https://media.gettyimages.com/id/859360016/photo/mumbai-india-turkish-footballers-are-seen-during-the-ceremony-within-a-2017-fifa-u-17-world.jpg?s=612x612&w=0&k=20&c=u9xE2OHzHHeYNOoEjLZ8zwqqx0Hn5aBIt8K0OdCXYOc="
              alt=""
              className=" border-4  hover:scale-90   border-white"
            />
            <img
              src="https://media.gettyimages.com/id/859360344/photo/mumbai-india-malik-karaahmet-of-turkey-is-in-action-against-abdoulaye-diaby-of-mali-during-the.jpg?s=612x612&w=0&k=20&c=9FyuUBC2wrb8B1kFFRl_5bDGBp_iPsXKMI69rC1Rxw4="
              alt=""
              className=" border-4   hover:scale-90     border-white"
            />
            <img
              src="https://media.gettyimages.com/id/534931586/photo/india-maharashtra-mumbai-ykk-event-with-real-madrid-foundation-and-art-in-all-of-us-receiving.jpg?s=612x612&w=0&k=20&c=vgpSrx5265tO-OKdp2hl7NcEKgm2H9D-YvNUitS6SOA="
              alt=""
              className=" border-4   hover:scale-90   border-white"
            />
            <img
              src="https://media.gettyimages.com/id/2159674139/photo/rookie-players-are-practicing-during-a-football-coaching-camp-in-kolkata-india-on-july-2-2024.jpg?s=612x612&w=0&k=20&c=bsc8Q56XftnJAeyO2STI5cSmZnKfLUSvO6JWFbK5c6w="
              alt=""
              className=" border-4   hover:scale-90  border-white "
            />{" "}
          </div>
        </div>{" "}
      </div>
      {/*  */}
    </div>
  );
};

export default Events;
