import React from "react";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import resume from '/Resume_Imad_Laouani.pdf';




const Media = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Resume_Imad_Laouani.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
    >
        <p className={`${styles.sectionSubText} text-center`}>
        Want to learn more about me?
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        Let's connect.
        </h2>
      <div className="flex flex-row flex-auto flex-wrap justify-center gap-10 mt-10  ">
        <Link to={"https://www.linkedin.com/in/imad-laouani/"} target="_blank" rel="noopener noreferrer">
          <button
            className="flex flex-row items-center gap-5  bg-tertiary py-3 px-14  outline-non sm:w-fit   text-white  font-bold shadow-md shadow-primary rounded-xl"
            onclick="location.href = 'https://www.linkedin.com/in/imad-laouani/';"
          >
            <svg fill="#aaa6c3" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(1)"> <g> <g> <path d="M68.12,4.267c-18.773,0-35.84,6.827-48.64,19.627C5.827,37.547-1,54.613-1,72.533c0,18.773,7.68,35.84,20.48,48.64 c12.8,12.8,30.72,20.48,47.787,19.627c0,0,0.853,0,1.707,0c17.067,0,33.28-6.827,46.08-19.627 c12.8-12.8,20.48-29.867,20.48-48.64c0.853-17.92-6.827-34.987-19.627-47.787C103.107,11.093,86.04,4.267,68.12,4.267z M103.107,109.227c-9.387,9.387-22.187,15.36-35.84,14.507c-12.8,0-26.453-5.12-35.84-14.507 c-10.24-9.387-15.36-23.04-15.36-36.693s5.12-26.453,15.36-36.693c9.387-9.387,22.187-14.507,36.693-14.507 c12.8,0,25.6,5.12,34.987,14.507c10.24,10.24,15.36,23.04,15.36,36.693S113.347,99.84,103.107,109.227z"></path> <path d="M101.4,157.867H32.28c-13.653,0-24.747,11.093-24.747,25.6v298.667c0,13.653,11.947,25.6,25.6,25.6H101.4 c13.653,0,25.6-11.947,25.6-24.747v-299.52C127,169.813,115.053,157.867,101.4,157.867z M109.933,482.987 c0,4.267-4.267,7.68-8.533,7.68H33.133c-4.267,0-8.533-4.267-8.533-8.533V183.467c0-4.267,3.413-8.533,7.68-8.533h69.12 c4.267,0,8.533,4.267,8.533,8.533V482.987z"></path> <path d="M391.533,149.333h-17.92c-33.28,0-64.853,14.507-85.333,37.547v-11.947c0-8.533-8.533-17.067-17.067-17.067H185.88 c-7.68,0-17.067,6.827-17.067,16.213v318.293c0,9.387,9.387,15.36,17.067,15.36h93.867c7.68,0,17.067-5.973,17.067-15.36v-184.32 c0-28.16,20.48-50.347,46.933-50.347c13.653,0,26.453,5.12,35.84,14.507c8.533,7.68,11.947,19.627,11.947,34.987v183.467 c0,8.533,8.533,17.067,17.067,17.067h85.333c8.533,0,17.067-8.533,17.067-17.067v-220.16 C511,202.24,458.947,149.333,391.533,149.333z M493.933,489.813l-0.853,0.853h-83.627L408.6,307.2 c0-20.48-5.12-35.84-16.213-46.933c-12.8-12.8-29.867-19.627-47.787-19.627c-35.84,0.853-64,29.867-64,67.413v182.613h-93.867 V174.933h84.48l0.853,0.853v53.76l23.04-23.04l0.853-0.853c17.067-23.893,46.933-39.253,78.507-39.253h17.92 c57.173,0,101.547,46.08,101.547,104.107V489.813z"></path> </g> </g> </g> </g></svg>
            Join my Linkedin
          </button>
        </Link>
        <button
          onClick={() => downloadResume()}
          className="flex flex-row items-center gap-5 bg-tertiary py-3 px-8 outline-non w-fit text-white font-bold shadow-md shadow-primary rounded-xl text-center"
        >
          <svg
            width="35px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#aaa6c3"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M18.22 20.75H5.78C5.43322 20.7359 5.09262 20.6535 4.77771 20.5075C4.4628 20.3616 4.17975 20.155 3.94476 19.8996C3.70977 19.6442 3.52745 19.3449 3.40824 19.019C3.28903 18.693 3.23525 18.3468 3.25 18V15C3.25 14.8011 3.32902 14.6103 3.46967 14.4697C3.61033 14.329 3.80109 14.25 4 14.25C4.19892 14.25 4.38968 14.329 4.53033 14.4697C4.67099 14.6103 4.75 14.8011 4.75 15V18C4.72419 18.2969 4.81365 18.5924 4.99984 18.8251C5.18602 19.0579 5.45465 19.21 5.75 19.25H18.22C18.5154 19.21 18.784 19.0579 18.9702 18.8251C19.1564 18.5924 19.2458 18.2969 19.22 18V15C19.22 14.8011 19.299 14.6103 19.4397 14.4697C19.5803 14.329 19.7711 14.25 19.97 14.25C20.1689 14.25 20.3597 14.329 20.5003 14.4697C20.641 14.6103 20.72 14.8011 20.72 15V18C20.75 18.6954 20.5041 19.3744 20.0359 19.8894C19.5677 20.4045 18.9151 20.7137 18.22 20.75Z"
                fill="#aaa6c3"
              ></path>{" "}
              <path
                d="M12 15.75C11.9015 15.7504 11.8038 15.7312 11.7128 15.6934C11.6218 15.6557 11.5392 15.6001 11.47 15.53L7.47 11.53C7.33752 11.3878 7.2654 11.1997 7.26882 11.0054C7.27225 10.8111 7.35096 10.6258 7.48838 10.4883C7.62579 10.3509 7.81118 10.2722 8.00548 10.2688C8.19978 10.2654 8.38782 10.3375 8.53 10.47L12 13.94L15.47 10.47C15.6122 10.3375 15.8002 10.2654 15.9945 10.2688C16.1888 10.2722 16.3742 10.3509 16.5116 10.4883C16.649 10.6258 16.7277 10.8111 16.7312 11.0054C16.7346 11.1997 16.6625 11.3878 16.53 11.53L12.53 15.53C12.4608 15.6001 12.3782 15.6557 12.2872 15.6934C12.1962 15.7312 12.0985 15.7504 12 15.75Z"
                fill="#aaa6c3"
              ></path>{" "}
              <path
                d="M12 15.75C11.8019 15.7474 11.6126 15.6676 11.4725 15.5275C11.3324 15.3874 11.2526 15.1981 11.25 15V4C11.25 3.80109 11.329 3.61032 11.4697 3.46967C11.6103 3.32902 11.8011 3.25 12 3.25C12.1989 3.25 12.3897 3.32902 12.5303 3.46967C12.671 3.61032 12.75 3.80109 12.75 4V15C12.7474 15.1981 12.6676 15.3874 12.5275 15.5275C12.3874 15.6676 12.1981 15.7474 12 15.75Z"
                fill="#aaa6c3"
              ></path>{" "}
            </g>
          </svg>
          Download my Resume
        </button>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Media, "");
