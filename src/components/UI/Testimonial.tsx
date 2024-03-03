import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrandDataProps } from "../../data/brandData";
import TestimonialCard from "./TestimonialCard";

type TestimonialProps = {
  data: BrandDataProps[];
};

const Testimonial = ({ data }: TestimonialProps) => {
  const settings: {
    dots: boolean;
    infinite: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
    cssEase: string;
    arrows: boolean;
    pauseOnHover: boolean;
    swipeToSlide: boolean;
    responsive: {
      breakpoint: number;
      settings: {
        autoplaySpeed: number;
        slidesToShow: number;
        slidesToScroll: number;
      };
    }[];
  } = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 778,
        settings: {
          autoplaySpeed: 3000,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="
    max-w-7xl mx-auto
    cursor-pointer mt-10 mb-10 dark:bg-white p-10">
      <Slider {...settings}>
        {data.map((item: BrandDataProps) => (
          <TestimonialCard data={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
