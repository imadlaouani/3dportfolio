import React from "react";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";



const Media = () => {
  const downloadResume = () => {
    // using Java Script method to get PDF file
    fetch(
      "https://assets.welcomekit.co/uploads/applicants/eed912ec1e/resume/af9e3e2017b5557639ef7208cc51a27f.pdf?Expires=1679503778&Signature=eFBl4pLHKakyT0vdxTh3z0djglWpnScvOn5xzAP9itypce8xeBvCk4v8mTX~Bmfs1EQxjvTnbfGY5guqX8eRJWabV6hjRuXinpzb9vkAD6qZl2nGu4WWENw6-wtfUvZ~rR7EUrYmEZEjUmEw5SAVcD-z~OpnaJn5Pw8iQG06gq6V0jJxMoR0gCMfZ83EsWx3B-DiCicivc~CMQWELAbN8PyliT7VTGDY3-vbZx71PGtTdN13zmKu7BGpa3nb3Bigaat-mhDXoUwOCZZh6M12ZKhgxA2cTWeh1c~uwiCpue11sgIxTAMnDWRyIaOOm4uw0jtQIonqfH5LjvxrHqHUgA__&Key-Pair-Id=APKAIVYSDUT2HNUEP3SA"
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume_Imad_Laouani.pdf";
        alink.click();
      });
    });
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
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        <Link to={"https://www.linkedin.com/in/imad-laouani/"}>
          <button
            className="flex flex-row items-center gap-5 bg-tertiary py-3 px-8 outline-non w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            onclick="location.href = 'https://www.linkedin.com/in/imad-laouani/';"
          >
            <svg
              fill="#aaa6c3"
              height="30px"
              width="30px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 310 310"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="XMLID_801_">
                  {" "}
                  <path
                    id="XMLID_802_"
                    d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                  ></path>{" "}
                  <path
                    id="XMLID_803_"
                    d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                  ></path>{" "}
                  <path
                    id="XMLID_804_"
                    d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
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
          Download my resume
        </button>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Media, "");
