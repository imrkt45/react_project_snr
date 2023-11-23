import im1 from "../../assets/ftpfile.png";
import im2 from '../../assets/moon.png';
import im3 from '../../assets/pic.png';

interface HeaderItem {
  img1: string;
  txt1: string;
  firstdrop: string;
  seconddrop: string;
  img2: string;
  img3: string;
  txt2: string;
}

const HeaderData: HeaderItem[] = [
  {
    img1: im1,
    txt1: "File Manager",
    firstdrop: "No Environment",
    seconddrop: "English",
    img2: im2,
    img3: im3,
    txt2: "Sign In",
  }
];

export default HeaderData;
