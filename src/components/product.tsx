import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";

interface CardProductType {
  img: any;
  title: string;
  description1: string;
  id: string;
}

export const CardProduct: CardProductType[] = [
  {
    img: img1,
    title: "layers review , full information about layers",
    description1: "Techburner",
    id: "1",
  },
  {
    img: img2,
    title: "reality of layers , is it a good product or not",
    description1: "Get News",
    id: "2",
  },
  {
    img: img3,
    title: "Get layers in 10 Rupees sale for today only ",
    description1: "Techburner",
    id: "3",
  },
  {
    img: img4,
    title: "CPP crash course for beginner, zero to advance just in one hour",
    description1: "Hosh Cpp",
    id: "4",
  },
  {
    img: img5,
    title: "CPP course just in 4 hours , only for placement",
    description1: "Crash Course",
    id: "5",
  },
  {
    img: img6,
    title: "new layers in the market , good for your phones and laptops",
    description1: "Techburner",
    id: "6",
  },
  {
    img: img7,
    title: "learn C++ just in 3 hours for placement",
    description1: "cpp course",
    id: "7",
  },
];



