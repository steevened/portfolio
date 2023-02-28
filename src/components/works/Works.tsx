import phoneBook from '../../assets/works/phonebook.png';
import techcommerce from '../../assets/works/techcommerce.png';
import githubfinder from '../../assets/works/githubfinder.png';
import paracuando from '../../assets/works/paracuando.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'GitHub Finder',
    img: githubfinder,
    description: 'App for search github public user profiles',
  },
  {
    id: 2,
    title: 'Ecommerce',
    img: techcommerce,
    description: 'Tech ecommerce',
  },
  {
    id: 3,
    title: 'Public Phonebook',
    img: phoneBook,
    description: 'Public contacts phonebook',
  },
  {
    id: 4,
    title: 'Para Cuándo',
    img: paracuando,
    description: 'Organize events in your city',
  },
];

export default function Works() {
  return (
    <div className="relative mt-10">
      <div
        className={`absolute inset-y-0 -left-10 -right-10  bg-bottom bg-no-repeat bg-fixed bg-slate-50 dark:bg-[#0B1120] bg`}
      >
        <div className="absolute inset-0 bg-grid bg-fixed" />
      </div>
      <div className=" backdrop-blur-0 py-10 flex flex-col">
        <h2 className="text-slate-900 dark:text-white text-4xl font-extrabold py-10 w-fit mx-auto md:text-5xl">
          Check out my recent works
        </h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={15}
          pagination={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mt-10"
        >
          {projects.map((project) => (
            <SwiperSlide
              onClick={() => console.log('clicked')}
              onMouseOver={() => console.log('hover')}
              key={project.id}
              className="max-w-sm shadow-lg shadow-black/50 my-10 rounded-lg overflow-hidden"
            >
              <img src={project.img} alt={project.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
