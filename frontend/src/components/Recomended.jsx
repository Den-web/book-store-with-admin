import React from 'react'
import BookCard from './BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../redux/features/cart/booksApi';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Recomended = () => {
    const {data: books = []} = useFetchAllBooksQuery();

  return (
    <div>
        <h2 className='text-3xl font-semibold mb-6'>Recomended for you</h2>
        <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1180: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination, Pagination]}
                className="mySwiper"
            >
            {
                books.length > 0 && books.slice(8, 18).map((book, index) => (
                    <SwiperSlide key={index}>
                        <BookCard book={book} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
    )
}

export default Recomended