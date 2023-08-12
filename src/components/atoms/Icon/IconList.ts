import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { BsPause } from "react-icons/bs";
import { BsPlay } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";

export interface IIconList {
  name: string;
  svg: string;
}

const iconList: IIconList[] = [
  {
    name: "bs-arrow-left",
    svg: BsArrowLeft,
  },
  {
    name: "bs-arrow-right",
    svg: BsArrowRight,
  },
  {
    name: "bs-dot",
    svg: BsDot,
  },
  {
    name: "bs-facebook",
    svg: BsFacebook,
  },
  {
    name: "bs-instagram",
    svg: BsInstagram,
  },
  {
    name: "bs-list",
    svg: BsList,
  },
  {
    name: "bs-play",
    svg: BsPlay,
  },
  {
    name: "bs-pause",
    svg: BsPause,
  },
  {
    name: "bs-share",
    svg: BsShare,
  },
  {
    name: "bs-x-circle",
    svg: BsXCircle,
  },
];

export default iconList;
