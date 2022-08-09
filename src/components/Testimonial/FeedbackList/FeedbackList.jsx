import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css/bundle";
import "./Feedback.modules.css";

const FeedbackList = () => {
  return (
    <>
      <Swiper
        pagination={true}
        slidesPerView={1}
        modules={[Pagination]}
        spaceBetween={48}
        className="feedback w-100 mt-5"
      >
        <SwiperSlide>
          <p className="comment">
            I had a cup of iced coffee, which was perfect size for me. Not too
            big. The cup is stylish with slim design. The iced coffee was
            perfect for a warm day like today. The cafe is clean and welcoming.
          </p>
          <p className="responden mt-4">Chiho Sharp, local expert</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="comment">
            I had a cup of iced coffee, which was perfect size for me. Not too
            big. The cup is stylish with slim design. The iced coffee was
            perfect for a warm day like today. The cafe is clean and welcoming.
          </p>
          <p className="responden mt-4">Chiho Sharp, local expert</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="comment">
            I had a cup of iced coffee, which was perfect size for me. Not too
            big. The cup is stylish with slim design. The iced coffee was
            perfect for a warm day like today. The cafe is clean and welcoming.
          </p>
          <p className="responden mt-4">Chiho Sharp, local expert</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FeedbackList;
