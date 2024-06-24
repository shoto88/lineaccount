'use client';

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from "../../components/footer";


const Circle = ({ text, index }: { text: string, index: number }) => {
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
  

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
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

const ImageTextItem = ({ imageSrc, altText, number, description, index }: { imageSrc: string, altText: string, number: string, description: string, index: number }) => {
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
          <p className="text-[12px] text-left sm:text-[14px] md:text-md lg:text-lg text-gray-700 whitespace-pre-wrap">
          {description.split('（診察券番号は').map((part, i) => 
            i === 1 ? (
              <>
                （<span className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-gray-500">
                  診察券番号は{part.split('）')[0]}
                </span>）{part.split('）')[1]}
              </>
            ) : part
          )}
        </p>
        </div>
      </motion.div>
    );
  };
  
  const ImageTextGrid = ({ items }: { items: { imageSrc: string, altText: string, number: string, description: string }[] }) => (
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
    const guideItems1 = [
      // 項目①から⑥までをここに入れる
        
      {
        imageSrc: "/next.svg",
        altText: "Step 1",
        number: "①",
        description: "『新規予約/予約状況』を押すと、当院の診察券番号を入力するフォームが表示されます。診察券代わりになりますので登録の方お願いします😊\n間違えた際は再度登録すると更新されますので、ご安心ください。"
      },
      {
        imageSrc: "/スクショ５２.PNG",
        altText: "Step 5",
        number: "②",
        description: "『現在の混雑状況』ボタンを押すと上記画面が表示されます。\n現在発券済みの番号\n診療中の方の番号\n現在発券した際のおおよその待ち時間が表示されます。"
      },
      {
        imageSrc:"/スクショ５２.PNG",
        altText: "Step 2",
        number: "③",
        description: "『診察券を発券する』ボタンを押すと上記画面が表示されます。\n現在発券した場合のおおよその待ち時間を確認の上\n間に合う際は発券ボタンを押してください"
      },
      {
        imageSrc: "/スクショ５２.PNG",
        altText: "Step 3",
        number: "④",
        description: "発券が完了しますと、順番予約券が画面に表示されます。また、問診票もLINEに届きますの、来院前に回答お願いします📱"
      },
      {
        imageSrc: "/スクショ５２.PNG",
        altText: "Step 5",
        number: "⑤",
        description: "順番予約完了後は、『待ち時間』ボタンを押すと、\nご自身の残り待ち時間が表示されます。来院時間の参考にされ、来院までの時間を有効にご活用ください🕰️"
      },
      {
        imageSrc: "/スクショ５２.PNG",
        altText: "Step 5",
        number: "⑥",
        description: "来院時に、『番号表示』ボタンを押し、診察券番号（登録された方）と順番予約番号を受付でお見せください📱確定版の番号札をお渡しします😊\n（診察券番号はLINE順番予約を利用されない日でも診察券番号の確認に使えます）" 
      },
    ];
  
    const guideItems2 = [
      // 項目⑦と⑧をここに入れる

      {
        imageSrc: "/スクショ５２.PNG",
        altText: "Step 5",
        number: "⑦",
        description: "待合室のモニターにも\n現在の診療状況を番号表示しております📺\n少々お待ちいただくこともあるかと思いますが、よろしくお願いします🙇‍♂️"
      },
      {
        imageSrc: "/スクショ５２.PNG",
        altText: "Step 5",
        number: "⑧",
        description: "LINEの利用の有無問わず全ての患者様に番号札はお渡します。待ち時間がある際は、外出も可能です💻\nLINEから『現在の待ち状況』で診療状況を確認しつつ、再度来院ください。再来院時は受付は不要です！"
      },
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
          
                <h3 className="text-red-500 text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                  もう、<span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold decoration-red-500">ずいぶん待ってるけどあとどれくらいかな。。。と、</span>
                </h3>
                    <Image 
                      src="/placeholder.svg" 
                      alt="Waiting Illustration" 
                      width={500} 
                      height={300} 
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                    />
                    <h3 className="text-red-500 text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                  長くお待ちいただくことも多かったですが🙇‍♂️
                </h3>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection>
                  <h2 className="text-blue-600 text-center text-xl sm:text-2xl lg:text-3xl font-bold w-full bg-blue-100 py-3 px-6 rounded-2xl shadow-lg">
                    順番予約を利用すると・・・
                  </h2>
                </AnimatedSection>

                <AnimatedSection>
                <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg w-full">
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-yellow-200 rounded-full flex items-center justify-center">
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">予約</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">それまでに</h3>
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">...</span>
                    </div>
                  </div>
                  <div className="text-center space-y-2 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <p className="text-base sm:text-lg md:text-3xl lg:text-2xl">待ち時間までにカフェ行こうかな！</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">自分のスケジュールに合わせて</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">病院受診ができる。</p>
                  </div>
                  <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-green-200 rounded-full flex items-center justify-center">
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">カフェ</span>
                    </div>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-blue-200 rounded-full flex items-center justify-center">
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">病院</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-500 font-bold">病院での待ち時間を減らせます😊</p>
                  </div>
                </div>
              </AnimatedSection>
                
              <AnimatedSection>
              <div className="bg-gradient-to-r p-1 from-blue-100 to-blue-200 p-2 rounded-2xl shadow-lg w-full">
                <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold w-full mb-4 text-blue-800">
                  LINE予約の使い方
                </h2>
                <ImageTextGrid items={guideItems1} />
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-red-500 text-center text-sm sm:text-xl lg:text-2xl font-bold w-full bg-green-100 py-3 px-6 rounded-2xl shadow-lg">
                院内での番号表示とおまけの使い方について
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-gradient-to-r p-1 from-green-100 to-green-200 p-2 rounded-2xl shadow-lg w-full">
                <ImageTextGrid items={guideItems2} />
              </div>
            </AnimatedSection>
            <AnimatedSection>
            <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-2xl shadow-lg w-full mt-8">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-yellow-800">
                  お困りの際は…
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4">
                  使い方がわからない際や、うまくご利用ができなかった場合も<br />
                  お気軽にお尋ねください😊
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700">
                  LINEでの問い合わせやご質問など、<br />
                  今まで通りのLINEのご利用も変わらずできますので、お願いします🙆‍♀️
                </p>
              </div>
            </div>
          </AnimatedSection>
          
              </div>
            </div>
          </main>

        </div>
      );
    };
    
    export default IndexPage;