'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { CardUsers } from '@/components/cardUsers';


const users = [
     {
        name: "@marciogurka",
        id:1,
        description: "Valeu @banconenon! Linda embalagem e o cartão tbm é lindo! Muito amor por esse banco #bancoNeon"
     },
     {
        name: "@kleriene18",
        id:2,
        description: "Eu uso o Neon pra render o pouquinho que eu tenho. Como disse minha amiga Bruna, um dia eu abro o app de novo e PA: tô rica."
     },
     {
        name: "@mzltweet",
        id:3,
        description: "Só por ter um cartão virtual com bloqueio fácil no app, já ganha e muito na segurançã pro cliente."
     },
     {
        name: "@marciogurka",
        id:4,
        description: "Valeu @banconenon! Linda embalagem e o cartão tbm é lindo! Muito amor por esse banco #bancoNeon"
     },
     {
        name: "@kleriene18",
        id:5,
        description: "Eu uso o Neon pra render o pouquinho que eu tenho. Como disse minha amiga Bruna, um dia eu abro o app de novo e PA: tô rica."
     },
     {
        name: "@mzltweet",
        id:6,
        description: "Só por ter um cartão virtual com bloqueio fácil no app, já ganha e muito na segurançã pro cliente."
     }
]

export function SwiperUsers(){
    return(
        <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={32}
        pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: "w-2 h-2 transition-all ease-linear rounded-full bg-purple-20 opacity-55",
            bulletActiveClass: "w-4 opacity-100",
        }}
    >
        {
            users.map(({name,description, id}) => (
                <SwiperSlide key={id}>
                    <CardUsers name={name} description={description}/>
                </SwiperSlide>
            ))
        }
    </Swiper>
    )
}