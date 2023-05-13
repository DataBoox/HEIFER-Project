import {
    FaUser,
    FaShapes,
} from "react-icons/fa";
import { MdNoteAdd, MdMyLocation } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import { RiHomeFill, RiSettings4Fill } from "react-icons/ri";
import { HiUserAdd, HiMail, HiDocument } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import {
    BsGridFill,
  BsFillCameraFill,
  BsFillPatchCheckFill,
} from "react-icons/bs";
import { LinkItemProps } from "../interface";

export const AdminMenuLinkItem: Array<LinkItemProps> = [
  { name: "Dashboard", icon: RiHomeFill, path: "/" },
  { name: "Maps", icon: MdMyLocation, path: "maps" },
  // {
  //     name: "People", icon: MdGroups, dropdown: [
  //         { name: "Members", icon: BsFillPeopleFill, path: "members" },
  //         { name: "Archived Members", icon: FaArchive, path: "archived" },
  //         { name: "First Timers", icon: BsPersonPlusFill, path: "first-timers" },
  //         { name: "Departments", icon: FaChurch, path: "departments" },
  //         { name: "Groups", icon: FiUsers, path: "groups" },
  //         { name: "Prayer Requests", icon: FaPray, path: "prayer-requests" },
  //         { name: "Testimony", icon: FaHands, path: "testimony" }
  //     ]
  // },
  { name: "Projects", icon: FaShapes, path: "projects" },
  { name: "Create Form", icon: MdNoteAdd, path: "create-form" },
  { name: "Register", icon: HiUserAdd, path: "register" },
  { name: "Farmers", icon: GiFarmer, path: "farmers" },
  { name: "Groups", icon: BsGridFill, path: "groups" },
  { name: "Interventions", icon: BsFillPatchCheckFill, path: "interventions" },
  { name: "Teams", icon: FaUser, path: "teams" },
  { name: "Schedule", icon: BiCalendar, path: "schedule" },
  { name: "Communication", icon: HiMail, path: "communication" },
  { name: "Reports", icon: HiDocument, path: "reports" },
  { name: "Stories", icon: BsFillCameraFill, path: "stories" },
  { name: "Settings", icon: RiSettings4Fill, path: "settings" },
];
