import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import "./styles.css";


import { Page1, Page2, Page3, Page4, Page5 } from "./components/Pages";


export const App = () => {

  return (<div>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
       <Page5/>
    </div>
  );
};
