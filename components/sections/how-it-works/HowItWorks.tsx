import React from 'react';
import { FaSignInAlt, FaGamepad, FaRocket } from 'react-icons/fa';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import WordFadeIn from '@/components/ui/word-fade-in';
import { FadeText } from '@/components/ui/fade-text';

const content = [
  {
    title: "Log in to WALMOVE Cloud PC",
    description:
      "Access our advanced cloud computing system quickly and securely. With WALMOVE, you can start your high-performance computing experience in just a few clicks.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        {/* <Image
          width={400}
          height={188}
          quality={100}
          src="/assets/about/how_to_work/login.png"
          className="w-full h-auto object-contain"
          alt="Login to WALMOVE Cloud PC"
        /> */}
        <img
          src="/assets/about/how_to_work/login.png"
          className="w-full h-auto object-contain"
          alt="Login to WALMOVE Cloud PC"
        />
      </div>
    ),
  },
  {
    title: "Select your favorite game or dApp",
    description:
      "Browse our extensive library of high-performance applications and games. Whether you're a gamer or a developer, WALMOVE offers a wide range of options to suit your needs.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        {/* <Image
          width={400}
          height={188}
          quality={100}
          src="/assets/about/how_to_work/choose_game.png"
          className="w-full h-auto object-contain"
          alt="Login to WALMOVE Cloud PC"
        /> */}
        <img
          // width={700}
          // height={188}
          // quality={100}
          src="/assets/about/how_to_work/choose_game.png"
          className="w-full h-auto object-contain"
          alt="Login to WALMOVE Cloud PC"
        />
      </div>
    ),
  },
  {
    title: "Start playing or using the app instantly",
    description:
      "Experience lag-free, high-quality performance powered by cloud technology. No need for high-end hardware - WALMOVE handles all the heavy lifting in the cloud.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        {/* <Image
          width={400}
          height={188}
          quality={100}
          src="/assets/about/how_to_work/play_game.png"
          className="w-full h-auto object-contain"
          alt="Login to WALMOVE Cloud PC"
        /> */}
        <img
          // width={700}
          // height={188}
          // quality={100}
          src="/assets/about/how_to_work/play_game.png"
          className="w-full h-auto object-contain"
          alt="Login to WALMOVE Cloud PC"
        />
      </div>
    ),
  },
  {
    title: "Enjoy seamless performance",
    description:
      "With WALMOVE's cloud infrastructure, you can enjoy games and resource-intensive applications without worrying about hardware limitations. Our technology ensures a smooth, responsive experience every time.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          // width={700}
          // height={188}
          // quality={100}
          src="/assets/about/how_to_work/blank.png"
          className="w-full h-auto object-contain"
          alt="Login to WALMOVE Cloud PC"
        />
      </div>
    ),
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 background">
      <div className="container mx-auto">
        <WordFadeIn delay={0.25} className="text-5xl font-bold adaptive-text text-center mb-8" words="HOW IT WORKS" />
        <div
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <FadeText
            className="text-xl adaptive-text"
            direction="right"
            framerProps={{
              show: { transition: { delay: 0.5, duration: 1 } },
            }}
            text="Built on the powerful Move, WALMOVE gives you instant access to games and decentralized apps without the need for high-end hardware. All processing happens in the cloud, so you can focus on what matters - the experience."
          />
        </div>
        <StickyScroll content={content} />
      </div>
    </section>
  );
};

export default HowItWorks;