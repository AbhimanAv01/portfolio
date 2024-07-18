import { personalinfo } from "@/app/components/data/personalinfo";
import Aboutanime from "./Aboutanime";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "mongoDB", 
  "mysql",
  "bootstrap",
];

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="flex justify-center">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            ABOUT ME
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-appear1">
        <div className="order-2 lg:order-1 md:py-64">
          <p className="font-medium mb-5 text-white text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg text-justify">
            {personalinfo.description}
          </p>
        </div>
        <div className="flex justify-center items-start">
          <div className="w-full h-full">
            <div className="relative flex h-full w-full max-w-[35rem] items-center justify-center overflow-hidden rounded-lg bg-background px-0 pb-20 pt-0">
              <Aboutanime iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
