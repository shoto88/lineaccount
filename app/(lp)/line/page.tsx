'use client';

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from "../../components/footer";


const Circle = ({ text, index }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -10 }}
        transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 260, damping: 20 }}
        className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-2 rounded-2xl w-full h-36 sm:h-48 md:h-64 lg:h-72 xl:h-80 flex items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <p className="text-base p-0 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight">{text}</p>
      </motion.div>
    );
  };
  
  const ResponsiveCircles = () => {
    const circles = [
      "いつも使っているLINEから、簡単に予約が取れる。",
      "予約操作が直感的で簡単。LINEが診察券にもなる",
      "診察時間にあわせて来院し、スムーズに受診ができる。"
    ];
  
    return (
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full">
        {circles.map((text, index) => (
          <Circle key={index} text={text} index={index} />
        ))}
      </div>
    );
  };
  

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const ImageTextItem = ({ imageSrc, altText, number, description, index }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
        className="flex flex-col items-center p-2 sm:p-3 md:p-4 gap-2 sm:gap-3 md:gap-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
      >
        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={altText}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="text-center flex-grow flex flex-col items-start w-full">
          <p className="text-blue-700 font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 self-center">{number}</p>
          <p className="text-[12px] text-left sm:text-[14px] md:text-md lg:text-lg text-gray-700">{description}</p>
        </div>
      </motion.div>
    );
  };
  
  const ImageTextGrid = ({ items }) => (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 p-0 m-0 w-full">
      {items.map((item, index) => (
        <ImageTextItem
          key={index}
          imageSrc={item.imageSrc}
          altText={item.altText}
          number={item.number}
          description={item.description}
          index={index}
        />
      ))}
    </section>
  );

const IndexPage = () => {
    const guideItems = [
      {
        imageSrc: "/スクショ５２.PNG",
        altText: "Step 1",
        number: "①",
        description: "LINEの『新規予約/予約状況』ボタンから進むと、上記画面に遷移します。オレンジの『予約する』ボタンを押してください。"
      },
      {
        imageSrc:"/スクショ５２.PNG",
        altText: "Step 2",
        number: "②",
        description: "スクロールして、施術メニューの『このメニューを追加』ボタンを押して、『この内容で日時選択へ進む』を押してください。"
      },
      {
        imageSrc: "/スクショ５２.PNG",
        altText: "Step 3",
        number: "③",
        description: "予約日時を選択します。カレンダー上で⭕️となっている箇所は予約が可能です。"
      },
      {
        imageSrc: "/スクショ５２.PNG",
        altText: "Step 4",
        number: "④",
        description: "内容をご確認の上、大丈夫であれば、『上記に同意の上、予約を確定する』を押してください。"
      },
      {
        imageSrc: "/スクショ５２.PNG",
        altText: "Step 5",
        number: "⑤",
        description: "予約が確定すると、マイページから自身の予約の確認やキャンセルが可能となります。"
      },
      {
        imageSrc: "/スクショ５２.PNG",
        altText: "Step 6",
        number: "⑥",
        description: "予約後、LINEに確定の通知メッセージが届きます。また、施術7日前、1日前に、リマインドのメッセージが届きます。メルプ問診の記入も来院までにお願いします😊"
      }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">

          <main className="flex-grow w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="flex flex-col items-center space-y-8 sm:space-y-12 py-8 sm:py-12 w-full">
                <AnimatedSection>
                  <div className="flex flex-row items-center justify-center w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    <Image 
                      src="/1485482196-line_78675.svg" 
                      alt="LINE Logo" 
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                    />
                    <motion.div 
                      className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold shadow-lg text-center flex items-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                    >
                      LINE順番予約システムを開始します
                    </motion.div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection>
                  <h1 className="bg-gradient-to-r from-yellow-200 to-yellow-400 text-center text-xl sm:text-2xl lg:text-3xl font-bold py-2 px-6 rounded-2xl shadow-lg w-full mb-4">
                    LINE順番予約の特徴
                  </h1>
                </AnimatedSection>
                
                <AnimatedSection>
                  <ResponsiveCircles />
                </AnimatedSection>
                
                <AnimatedSection>
                  <div className="bg-red-100 p-4 rounded-2xl shadow-lg w-full">
                    <h2 className="text-red-600 text-center text-lg sm:text-2xl lg:text-3xl font-bold mb-3">
                      もう、<span className="text-xl sm:text-3xl lg:text-4xl font-extrabold underline decoration-red-500">30分待ってるのにな...</span>
                    </h2>
                    <Image 
                      src="/placeholder.svg" 
                      alt="Waiting Illustration" 
                      width={500} 
                      height={300} 
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                    />
                  </div>
                </AnimatedSection>
                
                <AnimatedSection>
                  <h2 className="text-blue-600 text-center text-xl sm:text-2xl lg:text-3xl font-bold w-full bg-blue-100 py-3 px-6 rounded-2xl shadow-lg">
                    順番予約を利用すると・・・
                  </h2>
                </AnimatedSection>
                
                <AnimatedSection>
                  <div className="bg-gradient-to-r p-1 from-blue-100 to-blue-200 p-2 rounded-2xl shadow-lg w-full">
                    <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold w-full mb-4 text-blue-800">
                      LINE予約の使い方
                    </h2>
                    <ImageTextGrid items={guideItems} />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </main>

        </div>
      );
    };
    
    export default IndexPage;