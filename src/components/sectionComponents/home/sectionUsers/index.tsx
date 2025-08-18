import { ContainerGRID } from '@/components/containerGRID';
import { SwiperUsers } from './swiperUsers';

export function SectionUsers(){
    return(
        <section className='pt-32'>
             <ContainerGRID>
            <div className='flex items-end justify-between mb-11'>
                <h2 className='font-poppins text-4xl font-bold text-gray-800'><span className='block font-semibold text-gray-500'>Prático, fácil, moderno</span> Você resolve tudo sem estresse 😊</h2>
                <div className='custom-pagination flex gap-2 w-full max-w-20'></div>
           </div>

             <SwiperUsers/>
             </ContainerGRID>
        </section>
    )
}