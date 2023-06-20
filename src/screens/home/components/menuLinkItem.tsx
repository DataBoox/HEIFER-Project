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
  { name: "Households", icon: GiFarmer, path: "farmers" },
  { name: "Groups", icon: BsGridFill, path: "groups" },
  { name: "Interventions", icon: BsFillPatchCheckFill, path: "interventions" },
  { name: "Users", icon: FaUser, path: "users" },
  { name: "Schedule", icon: BiCalendar, path: "schedule" },
  { name: "Communication", icon: HiMail, path: "communication" },
  { name: "Reports", icon: HiDocument, path: "reports" },
  { name: "Stories", icon: BsFillCameraFill, path: "stories" },
  { name: "Settings", icon: RiSettings4Fill, path: "settings" },
];

const except = "Dashboard Maps Users"
export const FacilitatorCoordinator = AdminMenuLinkItem.filter((e) => !except.includes(e.name))
export const ProjectManager = AdminMenuLinkItem.filter((e) => !"Users".includes(e.name))