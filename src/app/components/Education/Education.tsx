// @flow strict
import Image from "next/image";

import { educations } from "@/app/components/data/Education";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../helper/animation-lottie";
import lottieFile from '../lottie/education.json';

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]my-40 ">
     
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16  justify-items-center">
         

          <div>
            <div className="flex flex-col gap-6 animate-appear1">
               {
               educations.map((education, index) => (
                <div key={index} 
                    className="p-3 relative text-white">
                     
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125 content-center">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase text-justify ">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base text-justify">{education.institution}</p>
                        </div>
                      </div>
                    </div>
               
                ))
              }
            </div>
          </div>

          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;