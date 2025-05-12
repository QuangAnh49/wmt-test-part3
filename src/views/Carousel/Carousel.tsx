import { useState } from "react";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import "swiper/swiper-bundle.css";

import CarouselModal from "./carousel-modal.tsx/CarouseModal";

interface ItemType {
  img: string;
  name: string;
  description: string;
}

const items: ItemType[] = [
  {
    img: "https://games.assets.gameloft.com/assets/CSD_Game_Avatar_e98bc4679e.png",
    name: "Carmen Sandiego",
    description: "Action/Adventure, Puzzle, Strategy",
  },
  {
    img: "https://games.assets.gameloft.com/assets/DS_Icon_9892299b20.jpg",
    name: "Disney Speedstorm",
    description: "Racing, Arcade, Action/Adventure",
  },
  {
    img: "https://games.assets.gameloft.com/assets/ALU_icon_ee38538e9a.jpg",
    name: "Asphalt Legends Unite",
    description: "Racing, Multiplayer, Sports",
  },
  {
    img: "https://games.assets.gameloft.com/assets/DDV_Logo2_360_9951174f4f.jpg",
    name: "Disney Dreamlight Valley",
    description: "Action/Adventure, Role Playing, Tycoon/Simulation, Casual",
  },
  {
    img: "https://games.assets.gameloft.com/assets/Oregon_Trail_App_Icon_29b4c1e941.jpg",
    name: "The Oregon Trail",
    description: "Action/Adventure",
  },
  {
    img: "https://games.assets.gameloft.com/assets/DH_6_icon_7fb8baf280.jpg",
    name: "Dungeon Hunter 6",
    description: "Action/Adventure, Role Playing, Multiplayer",
  },
];

const Carousel = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null); // State to hold the Swiper instance
  const [selectedProduct, setSelectedProduct] = useState<ItemType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: ItemType) => {
    setSelectedProduct(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mx-14">
      <h1 className="uppercase font-extrabold text-2xl">Product List</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        onSwiper={(swiper) => setSwiper(swiper)}
        className="w-full max-w-5xl"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="p-4" onClick={() => openModal(item)}>
            <div className="relative border border-gray-300 rounded-lg p-4 hover:scale-105 transition-all shadow-md bg-white text-center cursor-pointer">
              <img
                src={item.img}
                alt={item.name}
                className="rounded-lg mx-auto max-w-[300px] w-full pointer-events-none select-none"
              />
              <h2 className="mt-4 text-lg font-bold">{item.name}</h2>
              <p className="text-gray-600 line-clamp-1">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-4 mt-6">
        <button
          id="prev"
          onClick={handlePrev}
          className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-lg disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          id="next"
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-lg disabled:bg-gray-300"
        >
          Next
        </button>
      </div>

      <CarouselModal isOpen={isModalOpen} closeModal={closeModal} modalData={selectedProduct} />
    </div>
  );
};

export default Carousel;
