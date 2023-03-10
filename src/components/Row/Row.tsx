import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowRight } from "../../assets/icons/caretRight.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/caretLeft.svg";
import { styled } from "twin.macro";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import AnimeCard from "../AnimeCard/AnimeCard";
import EpisodeModal from "../EpisodeModal/EpisodeModal";
import { H3, H4 } from "../../styles/typography";
import { getAPI } from "../../api";
interface RowProps {
  title: string;
  rowID: number;
  fetchURL: string;
}

export default function Row(props: React.PropsWithChildren<RowProps>) {
  const [movies, setMovies] = useState<any>([]);
  useEffect(() => {
    // if (props.fetchURL != undefined) {
    //   axios.get(props.fetchURL).then((response) => {
    //     setMovies(response.data);
    //   });

    //   if (movies) {
    //     const container: any = []
    //     movies?.map((anime: any, idx: number) => {
    //       container[idx] = anime.episodeId
    //     } );

    //   }
    // }
    getAPI(props.fetchURL).then((res) => {
      if (res.status === 200) {
        setMovies(res.data.results);
      } else {
        console.log(res);
      }
    });
  }, [props.fetchURL]);
  // console.log(movies);

  const slideLeft = () => {
    var slider: any = document.getElementById("slider" + props.rowID);
    slider.scrollLeft = slider?.scrollLeft - 290;
  };
  const slideRight = () => {
    var slider: any = document.getElementById("slider" + props.rowID);
    slider.scrollLeft = slider.scrollLeft + 290;
  };

  return (
    <Wrapper>
      <H4 tw="mx-[12px] sm:mx-[27px] py-2">{props.title}</H4>
      <div tw="relative">
        <button
          tw="hidden absolute opacity-0  h-full w-[40px] z-10 left-[0px] bottom-[0px]  rounded-lg  hover:opacity-100 flex justify-center items-center backdrop-blur-[5px] bg-[rgba(69, 71, 82, 0.3)]"
          onClick={slideLeft}
        >
          <ArrowLeft />
        </button>
        <div
          className="row"
          id={"slider" + props.rowID}
          tw="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth  relative"
        >
          <div tw="w-full h-full sm:ml-[18px]  whitespace-nowrap scroll-smooth  relative">
            {movies?.map((anime: any, idx: number) => (
              <AnimeCard key={idx} anime={anime} />
            ))}
          </div>
        </div>
        <button
          tw="hidden absolute  h-full w-[40px]  right-0 bottom-[0px] opacity-0 rounded-lg  hover:opacity-100 flex justify-center items-center backdrop-blur-[5px] bg-[rgba(69, 71, 82, 0.3)]"
          onClick={slideRight}
        >
          <ArrowRight />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 0;
  margin: 10px 0;
  width: 100%;
  position: relative;
  scroll-behavior: smooth;
  .row {
    ::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: none;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 10px;
    }
  }
`;
