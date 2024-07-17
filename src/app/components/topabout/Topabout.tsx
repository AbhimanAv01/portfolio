// @flow strict

import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import {personalinfo} from "@/app/components/data/personalinfo";
import Image from "next/image";

function Topabout() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12  animate-appear  ">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-y-8 md:ml-40  ">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10  ">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] ">
            Hello, <br />
            This is {' '}
            <span className=" text-500 text-[#aab7f0]">{personalinfo.name}</span>
            {` , I'm a `}
            <span className=" text-[#aab7f0]">{personalinfo.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalinfo.github}
              target='_blank'
              className="transition-all text-[#aab7f0] hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalinfo.linkedIn}
              target='_blank'
              className="transition-all text-[#aab7f0] hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#aab7f0] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#01030d] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3 sm:p-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-[#01030d] no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank"
             href={personalinfo.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center ">
          <Image
            src={personalinfo.profile}
            width={280}
            height={280}
            alt="Abhiman A V"
            className="rounded-lg transition-all duration-1000 transform rotate-6 hover:rotate-0  hover:scale-110 hover:border hover:border-red-900  cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Topabout;
