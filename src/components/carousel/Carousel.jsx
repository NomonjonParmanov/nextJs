import Image from "next/image";
import taxi from "@/images/taxi.svg";
import smsuz from "@/images/smsuz.svg";
import shef from "@/images/shef.svg";
import track from "@/images/track.svg";
import akfa from "@/images/akfa.svg";
import fonon from "@/images/fonon.svg";
import hoshimov from "@/images/hoshimov.svg";
import hamkorbank from "@/images/hamkorbank.svg";
import workly from "@/images/vorkly.svg";
import imanC from "@/images/imanC.svg";
const cardDetails = [
  {
    imgUrl: taxi,
    id: 1,
  },
  {
    imgUrl: smsuz,
    id: 2,
  },

  {
    imgUrl: shef,
    id: 3,
  },

  {
    imgUrl: track,
    id: 4,
  },

  {
    imgUrl: akfa,
    id: 5,
  },

  {
    imgUrl: fonon,
    id: 6,
  },

  {
    imgUrl: hoshimov,
    id: 7,
  },
  {
    imgUrl: hamkorbank,
    id: 8,
  },
  {
    imgUrl: workly,
    id: 9,
  },
  {
    imgUrl: imanC,
    id: 10,
  },
  {
    imgUrl: smsuz,
    id: 11,
  },
  {
    imgUrl: taxi,
    id: 12,
  },
  {
    imgUrl: smsuz,
    id: 13,
  },

  {
    imgUrl: shef,
    id: 14,
  },

  {
    imgUrl: track,
    id: 15,
  },

  {
    imgUrl: akfa,
    id: 16,
  },

  {
    imgUrl: fonon,
    id: 17,
  },

  {
    imgUrl: hoshimov,
    id: 18,
  },
  {
    imgUrl: hamkorbank,
    id: 19,
  },
  {
    imgUrl: workly,
    id: 20,
  },
  {
    imgUrl: imanC,
    id: 21,
  },
  {
    imgUrl: smsuz,
    id: 22,
  },
];

const Carousel = () => {
  const carousel = cardDetails?.map((el) => (
    <Image className="slide" key={el.id} src={el.imgUrl} alt="img" priority />
  ));
  return (
    <section id="Clients" className="carousel">
      <div className="slider">
        <div className="slide__track">{carousel}</div>
      </div>
      <div className="slider2">
        <div className="slide__track">{carousel}</div>
      </div>
    </section>
  );
};

export default Carousel;
