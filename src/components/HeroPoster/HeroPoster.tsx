import React, { useEffect, useRef, useState } from "react";
import "twin.macro";
import Poster1 from "../../assets/images/chainsawman.jpg";
import Poster2 from "../../assets/images/onepiece.png";
import Poster3 from "../../assets/images/naruto.jpg";
import Poster4 from "../../assets/images/dbz.png";
import { ReactComponent as ArrowRight } from "../../assets/icons/caretRight.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/caretLeft.svg";
import { styled } from "twin.macro";
import { getAPI } from "../../api";
import SlideshowImages from "./SlideshowImages";

const TOTAL_SLIDES = 3; // n-1 in Array
const images = [Poster1, Poster2, Poster3, Poster4]
export default function HeroPoster() {

  return (
    <Wrapper>
      <div>
        
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 27px;
  color: #fff;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  .frame {
    width: 100%;
    overflow: hidden; // to hide the other boxs
    border-radius: 20px;
  }

  .box-container {
    display: flex;
  }

  .box {
    padding: 40px;
    background: #00e7ff;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 14px;
    flex-shrink: 0;
    overflow: hidden;
  }
  .button-container {
    display: flex;
    position: absolute;
    right: 0;
    bottom: 150px;
    /* backdrop-blur-[10px] bg-[rgba(69, 71, 82, 0.5) */
  }

  .button {
    background-color: rgba(69, 71, 82, 0.5);
    backdrop-filter: blur(10px);
    color: #fff;
    text-align: center;
    padding: 10px 20px;
    margin: 10px;
    user-select: none;
    cursor: pointer;
  }
`;
