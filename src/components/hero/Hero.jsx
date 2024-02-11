import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Hero = () => {
  const lottieRef = useRef();
  const [text] = useTypewriter({
    words: ["Frontend", "web Developer", "React Dev"],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 70,
  });

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/me.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          I'm{" "}
          <span style={{ color: "darkorange", fontWeight: "bold" }}>
            {text}
          </span>
          <Cursor cursorStyle="👋" />
        </h1>

        <p className="sub-title">
          I’m Youcef Khalfi, a software designer and entrepreneur based in New
          York City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
