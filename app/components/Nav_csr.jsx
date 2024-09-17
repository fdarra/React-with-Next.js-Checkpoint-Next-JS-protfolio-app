"use client";

import { usePathname } from "next/navigation";
// next Link
import Link from "next/link";
import { TransitionLink } from "./TransitionLink";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Nav_csr({ navData }) {
  const [position, setPosition] = useState({
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });
  const pathname = usePathname();
  console.log(pathname);
  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="flex w-full xl:flex-col items-center justify-around xl:justify-center
       gap-y-10 px-4 md:px-40 xl:px-8 h-[80px] xl:h-max py-8 text-white
       bg-white/10 backdrop-blur-sm text-3xl xl:left-xl xl:rounded-full "
    >
      {navData.map((link, index) => {
        const ref = useRef(null);
        return (
          <li
            ref={ref}
            onMouseEnter={() => {
             console.log(ref.current)
              if (!ref?.current) return;

              const { width, height } = ref.current.getBoundingClientRect();
              console.log(ref.current.getBoundingClientRect())
              

             

              setPosition({
                left: ref.current.offsetLeft-10,
                right: ref.current.offsetLeft + width,

               width: width+20,
               height:height,
                opacity: 1,
              });
            }}
            className="relative z-10 flex xl:bloc xl:py-5 xl:px-1.5 cursor-pointer px-3 py-1.5   mix-blend-difference md:px-5 
         "
          >
            <TransitionLink
              className={`${link.path === pathname && "text-red-700"}
               relative flex items-center group hover:text-red-700 transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-black items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize ">
                    {link.name}
                  </div>

                  {/* triangle */}
                  <div
                    className="border-solid border-l-white border-l-8
                   border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  ></div>
                </div>
              </div>

              {/* Icone */}
              <div className="">{link.icon}</div>
            </TransitionLink>{" "}
          </li>
        );
      })}
      <Cursor position={position} />
    </ul>
  );
}
const Cursor = ({ position }) => {
  return (
    // <motion.li
    //   animate={{
    //     ...position,
    //   }}
    //   className={`absolute  xl:absolute z-0 h-7 w-32 rounded-full bg-slate-900 md:h-12 ${position.height ? `xl:h-[${position.height}px]` : ''}`}
    // />
    <motion.li
    initial={false} // Pour éviter des animations initiales inutiles
    animate={{
      left: position.left,
      width: position.width,
      height: position.height,
      opacity: position.opacity,
    }}
    transition={{ duration: 0.2 }} // Contrôle de la durée des transitions
    className={`absolute z-0 bg-slate-900 rounded-full`}
    style={{
      height: position.height ? `${position.height}px` : '12px', // Dynamique
      width: position.width ? `${position.width}px` : '50px',   // Dynamique
    }}
  />
  );
};
