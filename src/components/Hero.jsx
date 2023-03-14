import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Imad</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 max-w-[40ch]`}
          >
            I'm a Full Stack Developer with a year of experience, passionate
            about creating innovative and user-friendly web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [-15, 2, 2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <svg
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="50px"
                height="50px"
                fill="#aaa6c3"
                viewBox="0 0 100 100"
                enable-background="new 0 0 100 100"
                xml:space="preserve"
              >
                <path
                  d="M61.784,60.169l-8.451,8.45V20h-6.666v48.619l-8.454-8.45l-4.714,4.713l14.145,14.141c1.302,1.303,3.414,1.303,4.713,0
	                  l14.145-14.141L61.784,60.169z"
                />
              </svg>
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
