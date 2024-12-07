// import React from "react";
// import Logo from "../Image.js/logo.png";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import { Button, Menu, MenuItem } from "@mui/material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import Fade from "@mui/material/Fade";
// import { Link } from "react-router-dom";
// import OURTERMINOLOGY from "../Our Terminology.js";
// import Footer from "../Bottem/Footer.js";
// import Gallary from "../Gallary/Gallary.js";

// const Header = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const opens = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const [anchorEl2, setAnchorEl2] = React.useState(null);
//   const opens2 = Boolean(anchorEl2);
//   const handleClick2 = (event) => {
//     setAnchorEl2(event.currentTarget);
//   };
//   const handleClose2 = () => {
//     setAnchorEl2(null);
//   };

//   return (
//     <div>
//       <div>
//         <img
//           src={Logo.png}
//           alt=""
//           className="h-[107px]    pt-2 position- absolute px-1"
//         />
//         <div className="  flex bg-gradient-to-r from-green-600 to-orange-600 text-white font-bold justify-end gap-5 h-9 items-center">
//           <span>
//             <TwitterIcon />
//           </span>
//           <span>
//             <FacebookIcon />
//           </span>
//           <span>
//             <InstagramIcon />
//           </span>
//           <span>
//             <LinkedInIcon />
//           </span>
//           <span>
//             <YouTubeIcon />
//           </span>
//           <span>
//             <Button variant="contained" className="">
//               Free Trial
//             </Button>
//           </span>
//         </div>
//         <div className="flex items-center justify-center   bg-gradient-to-r from-green-400 to-orange-400 h-[70px] ">
//           <div>
//             <h1 className="font-bold text-4xl flex  ">LUCKNOW FOOTBALL CLUB</h1>
//           </div>

//           <div className=" flex gap-10  px-6 items-center justify-center font-bold text-black text-[17px]">
//             <Link to={"/"}>
//               <button className="hover:text-[#ff681c] ">Home</button>
//             </Link>
//             <Link to={"/about_us"}>
//               <button className="hover:text-[#ff681c]">About-Us</button>
//             </Link>
//             <div>
//               <Button
//                 className="!hover:text-[#ff681c] !font-bold !capitalize !text-black !text-[17px]"
//                 id="fade-button"
//                 aria-controls={opens ? "fade-menu" : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={opens ? "true" : undefined}
//                 onClick={handleClick}
//                 endIcon={<KeyboardArrowDownIcon />}
//               >
//                 Squad
//               </Button>
//               <Menu
//                 id="fade-menu"
//                 MenuListProps={{
//                   // "aria-labelledby": "fade-button",
//                   className: "!p-0",
//                 }}
//                 anchorEl={anchorEl}
//                 open={opens}
//                 onClose={handleClose}
//                 TransitionComponent={Fade}
//               >
//                 <Link to={""}>
//                   <MenuItem
//                     className="!text-sm !bg-gradient-to-r from-green-300 to-orange-300 "
//                     onClick={handleClose}
//                   >
//                     Team
//                   </MenuItem>
//                   <hr />
//                   <Link to="/swomenteam">
//                     <MenuItem
//                       className="!text-sm !bg-gradient-to-r from-green-200 to-orange-200"
//                       // onClick={handleClose}
//                     >
//                       Women's Team
//                     </MenuItem>
//                   </Link>
//                   <Link to="/smenteam">
//                     <MenuItem
//                       className="!text-sm !bg-gradient-to-r from-green-200 to-orange-200"
//                       // onClick={handleClose}
//                     >
//                       Men's Team
//                     </MenuItem>
//                   </Link>
//                   <hr />
//                 </Link>
//                 <Link to={""}>
//                   <MenuItem
//                     className="!text-sm !bg-gradient-to-r from-green-300 to-orange-300"
//                     onClick={handleClose}
//                   >
//                     Academy
//                   </MenuItem>
//                   <hr />
//                   <Link to="/agirlteam">
//                     <MenuItem
//                       className="!text-sm !bg-gradient-to-r from-green-200 to-orange-200"
//                       // onClick={handleClose}
//                     >
//                       Girl's Team
//                     </MenuItem>
//                   </Link>
//                   <Link to="/aboyteam">
//                     <MenuItem
//                       className="!text-sm !bg-gradient-to-r from-green-200 to-orange-200"
//                       // onClick={handleClose}
//                     >
//                       Boy's Team
//                     </MenuItem>
//                   </Link>
//                 </Link>
//               </Menu>
//             </div>

//             <Button
//               className="!hover:text-[#ff681c] !font-bold  !capitalize !text-black !text-[17px]  "
//               id="fade-button"
//               aria-controls={opens2 ? "fade-menu" : undefined}
//               aria-haspopup="true"
//               aria-expanded={opens2 ? "true" : undefined}
//               onClick={handleClick2}
//               endIcon={<KeyboardArrowDownIcon />}
//             >
//               Gallery
//             </Button>
//             <Menu
//               id="fade-menu"
//               MenuListProps={{
//                 "aria-labelledby": "fade-button",
//               }}
//               anchorEl={anchorEl2}
//               open={opens2}
//               onClose={handleClose2}
//               TransitionComponent={Fade}
//             >
//               <Link to={"/teamphoto"}>
//                 <MenuItem
//                   className=" text-sm  !border-2px !bg-gradient-to-r from-green-300 to-orange-300 "
//                   onClick={handleClose}
//                 >
//                   Photo
//                 </MenuItem>
//                 <hr />
//               </Link>
//               <Link to={"/video"}>
//                 <MenuItem
//                   className=" !text-sm  !border-2px !bg-gradient-to-r from-green-300 to-orange-300 "
//                   onClick={handleClose}
//                 >
//                   Video
//                 </MenuItem>
//               </Link>
//             </Menu>

//             <Link to={"/"}>
//               <button className="hover:text-[#ff681c] text-black">Event</button>
//             </Link>
//             <Link to={"/"}>
//               <button className="hover:text-[#ff681c] text-black">
//                 Ticket
//               </button>
//             </Link>
//             <Link to={"/"}>
//               <Link to={"/about_us"}>
//                 <button className="hover:text-[#ff681c] text-black">
//                   Contact Us
//                 </button>
//               </Link>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="  bg-opacity-100 items-center  border-4 border-white justify-center text-center">
//         {" "}
//         <img
//           alt=""
//           width="100%"
//           src="https://www.lucknowfc.com/assets/oimg4-BRNtszhR.jpeg"
//         />
//       </div>
//       <OURTERMINOLOGY />
//       <Footer />
//       <Gallary />
//     </div>
//   );
// };

// export default Header;
