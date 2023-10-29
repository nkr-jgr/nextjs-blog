import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = ({ items, is_navigation, delay }) => {
    return (
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: delay,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                navigation={is_navigation}
                pagination={{
                    clickable: true
                }}
                modules={[Autoplay, Navigation]}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="carousel-item">
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
    );
};

export default Carousel;
