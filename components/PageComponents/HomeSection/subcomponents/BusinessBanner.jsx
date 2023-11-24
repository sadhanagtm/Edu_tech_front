import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollTo from "react-scroll-into-view";

import Slider from "react-slick";

function BusinessBanner() {
  const data = [
    {
      bgImg:
        "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "More Like This !",
      description: {
        question: " Sikkai Business here?",
        answer:
          "Sikka-I is a platform that provides every individual with the opportunity of learning the desired skills , earning good income , and owning the dream life. We work to uplift the life of youths by providing them multiple learning , earning and owning opportunities. Sikka-I stands out to be best because :",
      },
      sub: [
        {
          point1: "This section will hold information about business.",
        },
        {
          point1:
            "It will also hols the information about getting into business ,Growung business further and all future projects. ",
        },
        { point1: "Detailed information about business plans" },
      ],
    },
    {
      bgImg:
        "https://images.pexels.com/photos/2894946/pexels-photo-2894946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Simillar Photos",
      description: {
        question: " Why business in sikka-i ?",
        answer:
          "Sikka-I is a platform that provides every individual with the opportunity of learning the desired skills , earning good income , and owning the dream life. We work to uplift the life of youths by providing them multiple learning , earning and owning opportunities. Sikka-I stands out to be best because :",
      },
      sub: [
        {
          point1:
            "It will also hols the information about getting into business ,Growung business further and all future projects. ",
        },
        {
          point1: "Detailed information about business plans",
        },
        { point1: "This section will hold information about business. " },
      ],
    },
    {
      bgImg:
        "https://images.pexels.com/photos/2346247/pexels-photo-2346247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Aarti Bijay",
      description: {
        question: " Business ?",
        answer:
          "Sikka-I is a platform that provides every individual with the opportunity of learning the desired skills , earning good income , and owning the dream life. We work to uplift the life of youths by providing them multiple learning , earning and owning opportunities. Sikka-I stands out to be best because :",
      },
      sub: [
        {
          point1: "This section will hold information about business.",
        },
        {
          point1:
            "It will also hols the information about getting into business ,Growung business further and all future projects.",
        },
        { point1: "Detailed information about business plans" },
      ],
    },
  ];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="w-full overflow-clip  ">
      <Slider {...settings}>
        {data.map((item, i) => (
          <div className="h-148 md:h-148 p-0  " key={i}>
            <div
              className="h-full bg-gradient-to-r from-red-600 to-gray-50 flex items-center  lg:px-12 text-white"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(220,0,0,0.896796218487395) 0%, rgba(185,0,0,0.6951155462184874) 31%, rgba(255,0,0,0.5046393557422969) 64%, rgba(255,225,225,0.20211834733893552) 100%),url(${item.bgImg});`,
                backgroundSize: "cover",
              }}
            >
              <div className="p-5 md:p-10 lg:p-0">
                <p className="text-2xl my-3 sm:my-0  md:text-4xl font-bold">
                  {item.description?.question}
                </p>
                <p className="md:w-2/3 sm:my-8 text-base md:text-lg">
                  <p>{item.description?.answer}</p>
                  <p className="mt-2 text-sm md:text-lg lg:space-y-1">
                    {item.sub.map((val, i) => {
                      return (
                        <div
                          key={i}
                          className="flex items-baseline capitalize  gap-3 px-2 py-1"
                        >
                          <div>
                            <div className="h-2 w-2  rounded-full bg-gray-100"></div>
                          </div>{" "}
                          <div>{val.point1}</div>
                        </div>
                      );
                    })}
                  </p>
                </p>

                <button className="my-4 p-2  z-50 px-5 border border-white shadow-xl bg-cyan-500 rounded-full transition duration-500 hover:scale-105">
                  Get Started !
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BusinessBanner;
