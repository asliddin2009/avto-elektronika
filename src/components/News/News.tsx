import { NewsIcon } from "../../images/icons"
import Container from "../Container/Container"
import NewsCard from "./NewsCard/NewsCard"
import Title from "../Title/Title"
import "./News.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper"

const News = () => {
  return (
    <div className="news mb-[60px]">
      <Container>
        <div className="news__nav mb-[30px] flex justify-between items-center">
          <Title title="Новости" />
          <a className="news__link flex items-center gap-3" href="#!">
            Посмотреть все {<NewsIcon />}
          </a>
        </div>
        <div className="newsSwiper__wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwipers gap-[30px] newsSwipe"
        >
          <SwiperSlide className="newsCards flex justify-between">
              <NewsCard />
              <NewsCard />
              <NewsCard />
          </SwiperSlide>
          <SwiperSlide className="newsCards flex justify-between">
              <NewsCard />
              <NewsCard />
              <NewsCard />
          </SwiperSlide>
          <SwiperSlide className="newsCards flex justify-between">
              <NewsCard />
              <NewsCard />
              <NewsCard />
          </SwiperSlide>
          <SwiperSlide className="newsCards flex justify-between">
              <NewsCard />
              <NewsCard />
              <NewsCard />
          </SwiperSlide>
        </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default News
