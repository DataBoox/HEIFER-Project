import { BiCalendar } from "react-icons/bi";
import {
  BsFillCameraFill,
  BsFillClipboardDataFill,
  BsFillPatchCheckFill,
  BsGridFill,
} from "react-icons/bs";
import {
  FaUser
} from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { HiDocument, HiMail } from "react-icons/hi";
import { MdMyLocation, MdNoteAdd } from "react-icons/md";
import { RiHomeFill } from "react-icons/ri";
import { LinkItemProps } from "../interface";

export const AdminMenuLinkItem: Array<LinkItemProps> = [
  { name: "Dashboard", icon: RiHomeFill, path: "/" },
  { name: "Maps", icon: MdMyLocation, path: "maps" },
  { name: "Forms", icon: MdNoteAdd, path: "forms" },
  { name: "Households", icon: GiFarmer, path: "farmers" },
  { name: "Groups", icon: BsGridFill, path: "groups" },
  { name: "Record Tracking", icon: BsFillClipboardDataFill, path: "records" },
  { name: "Interventions", icon: BsFillPatchCheckFill, path: "interventions" },
  { name: "Users", icon: FaUser, path: "users" },
  { name: "Reports", icon: HiDocument, path: "reports" },
  { name: "Schedule", icon: BiCalendar, path: "schedule" },
  { name: "Communication", icon: HiMail, path: "communication" },
  { name: "Stories", icon: BsFillCameraFill, path: "stories" },
  // { name: "Settings", icon: RiSettings4Fill, path: "settings" },
];

const except = "Dashboard Maps Users Forms"
export const FacilitatorCoordinator = AdminMenuLinkItem.filter((e) => !except.includes(e.name))
export const ProjectManager = AdminMenuLinkItem.filter((e) => !"Users".includes(e.name))