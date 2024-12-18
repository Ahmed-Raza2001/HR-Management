// @flow strict
/* eslint-disable react/no-unescaped-entities */

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello,
            <br />
            This is 
<<<<<<< HEAD
            <span className="text-pink-500"> Usama Bhakrani</span>
=======
            <span className="text-pink-500"> Ahmed Raza Siddiqi</span>
>>>>>>> a339ac38e2e6472245ab81adf5b0d8adb4da1df3
            {`,  `}
            I'm a Professional 
            <span className="text-[#16f2b3]"> Software Developer.</span>
          </h1>

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
<<<<<<< HEAD
                <span className="text-orange-300">Usama Bhakrani</span>
=======
                <span className="text-orange-300">Ahmed Raza Siddiqi</span>
>>>>>>> a339ac38e2e6472245ab81adf5b0d8adb4da1df3
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{`','`}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{`','`}</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">{`','`}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{`','`}</span>
                <span className="text-amber-300">NestJS</span>
                <span className="text-gray-400">{`','`}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{`','`}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{`',`}</span>
                <br></br>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{`','`}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{`','`}</span>
                <span className="text-amber-300">Python</span>
                <span className="text-gray-400">{`','`}</span>
                <span className="text-amber-300">.NET</span>
                <span className="text-gray-400">{`','`}</span>
                <span className="text-amber-300">Microsoft Dynamics</span>
                <span className="text-gray-400">{`'],`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">Soft skills:</span>
                <span className="text-gray-400">{`[`}</span>
                <span className="text-amber-300">"Problem solving"</span>
                <span className="text-gray-400">{`, `}</span>
                <span className="text-amber-300">"Communication"</span>
                <span className="text-gray-400">{`, `}</span>
                <span className="text-amber-300">"Time management "</span>
                <span className="text-gray-400">{`],`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardworker</span>
                <span className="text-gray-400">{' &&'}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemsolver</span>
                <span className="text-gray-400">{' &&'}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills</span>
                <span className="text-gray-400">.</span>
                <span className="text-amber-300">length</span>
                <span className="text-gray-400">{' >='}</span>
                <span className="text-orange-400"> 6</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;