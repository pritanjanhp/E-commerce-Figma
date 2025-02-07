"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Delivery from "../home/Delivery";

const boxes = [
  {
    id: 1,
    icon: "/about/image1a.svg",
    subscriber: "10.5k",
    text: "Sallers active our site"
  },
  {
    id: 2,
    icon: "/about/image2.svg",
    subscriber: "33k",
    text: "Monthly Product Sales"
  },
  {
    id: 3,
    icon: "/about/image3b.svg",
    subscriber: "45.5k",
    text: "Customer active in our site"
  },
  {
    id: 4,
    icon: "/about/image4b.png",
    subscriber: "25k",
    text: "Annual Gross Sales in our site"
  }
];

const personData = [
  {
    id: 5,
    pic: "/about/person1.png",
    name: "Tom Cruise",
    role: "Founder & Chairman",
    in:'/about/linkedin.svg',
    x:'/about/x.svg',
    insta:'/about/insta.svg'
  },
  {
    id: 6,
    pic: "/about/person2.png",
    name: "Emma Watson",
    role: "Managing Director",
    in:'/about/linkedin.svg',
    x:'/about/x.svg',
    // x:"/footer/x.svg",
    insta:'/about/insta.svg'
  },
  {
    id: 7,
    pic: "/about/person3.png",
    name: "Will Smith",
    role: "Product Designer",
    in:'/about/linkedin.svg',
    x:'/about/x.svg',
    insta:'/about/insta.svg'
  }
];

const About = () => {
  const [slider, setSlider] = useState(0);

  const slides = [
    {src:'/about/person1.png', alt:'person1'},
    {src:'/about/person2.png', alt:'person2'},
    {src:'/about/person3.png', alt:'person3'},
    {src:'/about/person1.png', alt:'person4'},
    {src:'/about/person2.png', alt:'person5'}
  ]

  const goToSlide = (idx: React.SetStateAction<number>) => setSlider(idx);

  const router = useRouter();
  return (
      <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-32 lg:gap-28 flex flex-col lg:mt-20 mt-5">
      <div className="flex gap-3">
        <button onClick={() => router.push("/")} className="opacity-50">
          Home
        </button>
        <div className=""> / </div>
        <button onClick={() => router.push("/about")}>About</button>
      </div>
      <div className="flex">
        <div className="flex flex-col lg:w-[525px] lg:h-[336px] lg:gap-[35px] lg:mt-28 md:mt-28">
          <div className="lg:text-4xl sm:text-3xl text-xl font-bold">Our Story</div>
          <div className="lg:w-[525px] lg:h-[232px] flex flex-col text-sm gap-0">
            <div className="lg:w-[525px] lg:h-[130px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping{" "}
              <br />
              makterplace with an active presense in Bangladesh. Supported{" "}
              <br /> by wide range of tailored marketing, data and service
              solutions, <br /> Exclusive has 10,500 sallers and 300 brands and
              serves 3 <br />millioons customers across the region.
            </div>
            <div className="lg:w-[505px] lg:h-[78px]">
              Exclusive has more than 1 Million products to offer, growing at a{" "}
              <br />
              very fast. Exclusive offers a diverse assotment in categories
              <br />ranging from consumer.
            </div>
          </div>
        </div>
        
        <div>
        {/* <div className="lg:w-[837px] lg:h-[609px]"> */}
          <Image
            src="/about/profile.png"
            alt="about"
            width={705}
            height={609}
            className="rounded-md"
          />
        </div>
      </div>

      <div className="flex gap-[30px]">
        {boxes.map(box =>
          <div
            className="lg:w-[270px] lg:h-[230px] flex flex-col gap-3 border border-gray-300 justify-center items-center hover:bg-[#DB4444] hover:text-white"
            key={box.id}
          >
            <div className="rounded-full">
              <Image src={box.icon} alt={box.text} width={40} height={40} />
            </div>
            <div className="font-bold text-2xl">
              {box.subscriber}
            </div>
            <div className="text-sm">
              {box.text}
            </div>
          </div>
        )}
      </div>

      <div className="flex lg:gap-[30px] lg:w-[1170px] lg:h-[564px]">

        {personData?.map(person =>
          <div key={person.id} className="flex flex-col lg:w-[370px] lg:h-[564px] lg:gap-[20px]">
            <div> <Image src={person.pic} height={397} width={294} alt={person.name}/>  </div>
            
            <div className="gap-4 flex flex-col"> 
            <div className="flex flex-col gap-[3px]"> 
                <div className="font-bold text-2xl"> {person.name} </div> 
                <div className="text-xs"> {person.role} </div>
            </div>
            
                <div className='flex gap-[16px]'> 
                    <div className=""> <Image src={person.x} height={17.5} width={17.5} alt={person.name} className='text-sm' />  </div>
                    <div className=""> <Image src={person.insta} height={17.5} width={17.5} alt={person.name} className='text-sm'/>  </div>
                    <div className=""> <Image src={person.in} height={17.5} width={17.5} alt={person.name} className='text-sm'/>  </div>
                </div>
            </div>
        </div>
    )}
    </div>
      {/* <div /> */}
      <div className="transform -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) =>
              <div
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer ${idx === slider
                  ? "bg-[#DB4444]"
                  : "bg-gray-500"}`}
              />
            )}
            {/* <div className="text-5xl"> asdf</div> */}
        </div>
      <Delivery />
    </div>
  );
};

export default About;
