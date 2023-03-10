import React, { useEffect } from "react";
import Carousel, { CarouselItem } from "../../components/Carousel/Carousel";
import HeroPoster from "../../components/HeroPoster/HeroPoster";
import Poster2 from "../../assets/images/onepiece.png";
import Poster3 from "../../assets/images/naruto.jpg";
import Poster4 from "../../assets/images/chainsawman.jpg";
import "twin.macro";
import requests from "../../utils/requests";
import PosterDetails from "../../components/HeroPoster/PosterDetails";
import Row from "../../components/Row/Row";
import LongRow from "../../components/LongRow/LongRow";
import { useViewport } from "../../context/viewportContext";
import MobileLanding from "../../components/MobileLanding/MobileLanding";

export default function Landing() {
  const { isMobile } = useViewport();
  return (
    <>
      <div tw="">
        <div tw="relative md:bottom-[90px] md:mb-[-70px]">
          {isMobile ? (
            <MobileLanding />
          ) : (
            <Carousel>
              <CarouselItem>
                <img src={Poster2} alt="" />
                <PosterDetails
                  title="One-Piece"
                  synopsis="The series focuses on Monkey D. Luffy, a young man made of rubber, who, inspired by his childhood idol, the powerful pirate Red-Haired Shanks, sets off on a journey from the East Blue Sea to find the mythical treasure, the One Piece, and proclaim himself the King of the Pirates."
                />
              </CarouselItem>
              <CarouselItem>
                <img src={Poster4} alt="" />
                <PosterDetails
                  title="Chainsaw-Man"
                  synopsis="Chainsaw Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws."
                />
              </CarouselItem>
              <CarouselItem>
                <img src={Poster3} alt="" />
                <PosterDetails
                  title="Naruto"
                  synopsis="Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village."
                />
              </CarouselItem>
            </Carousel>
          )}
        </div>
        <div>
          <div>
            <Row title="Recents" rowID={0} fetchURL="recent-episodes" />
          </div>

          <div>
            <LongRow title="Top Airing" rowID={2} fetchURL="top-airing" />
          </div>
          <div>
            <Row title="Movies" rowID={3} fetchURL="movie" />
          </div>
        </div>
      </div>
    </>
  );
}
