// import Image from "next/image";
// import Header from "../components/header";
// import { Button, buttonVariants } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import Footer from "../components/footer";
// export default function IndexPage() {
//   return (
//     <>
//       <Header />
//       <section className="text-center text-lg font-bold mt-3 border-double border-b-4 border-sky-500">
//         会員登録の方法
//       </section>
//       <section className="container grid grid-cols-2 items-center gap-0 p-2">
//         <div className="flex flex-col items-center p-1 gap-4">
//           <Image
//             src="/新２のコピー２.PNG"
//             alt="haru"
//             width={200}
//             height={300}
//             className="rounded-md"
//           />
//           <h1 className="text-sm min-h-[10rem]">
//             <p className="text-blue-700 font-bold text-base">①</p>
//             下記の登録画面へ進むボタンを押すと、上記のような画面が表示されます
//           </h1>
//         </div>
//         <div className="flex flex-col items-center p-1 gap-4">
//           <Image
//             src="/新１のコピー２.PNG"
//             alt="haru"
//             width={200}
//             height={300}
//             className="rounded-md"
//           />
//           <h1 className="text-xs min-h-[10rem]">
//             <p className="text-blue-700 font-bold text-base">②</p>
//             上記の空欄を埋めてください。
//             <br />
//             <span className="text-base text-red-500 font-extrabold border-1 border-red-500">
//               ↓重要↓
//             </span>
//             <br />
//             画像中央の『会員番号』には、当院の診察券IDの入力をお願いします。
//             <br />
//             院内システムとの円滑な連携にご協力お願いします😊
//           </h1>
//         </div>
//       </section>
//       <div className="container flex flex-col">
//         <div className="items-center flex justify-center mt-10 mb-10">
//           <Link
//             href="https://ohori-pc.kalonade.com/ohori-pc/register"
//             className={buttonVariants({ variant: "outline" })}
//           >
//             このまま登録画面に進む
//           </Link>
//           </div>
//           <section className="text-center text-lg font-bold mt-3 border-double mb-3 border-4 border-sky-500">
//             予約の手順について
//           </section>
        
//       </div>
//       <section className="container grid grid-cols-2 items-center gap-0 p-2">
//         <div className="flex flex-col items-center p-1 gap-4">
//           <Image
//             src="/スクショ３２.PNG"
//             alt="haru"
//             width={200}
//             height={300}
//             className="rounded-md"
//           />
//           <h1 className="text-xs min-h-[8rem]">
//             <p className="text-blue-700 font-bold text-base">①</p>
//              LINEの『新規予約/予約状況』<br />ボタンから進むと、上記画面に遷移します。<br />オレンジの『予約する』ボタンを押してください。
//           </h1>
//         </div>
//         <div className="flex flex-col items-center p-1 gap-4">
//           <Image
//             src="/スクショ４２.PNG"
//             alt="haru"
//             width={200}
//             height={300}
//             className="rounded-md"
//           />
//           <h1 className="text-xs min-h-[8rem]">
//             <p className="text-blue-700 font-bold text-base">②</p>
//             スクロールして、施術メニューの『このメニューを追加』ボタンを押して、<br />『この内容で日時選択へ進む』を押してください。
//           </h1>
//         </div>
//         <div className="flex flex-col p-1 items-center gap-4">
//           <Image
//             src="/スクショ５２.PNG"
//             alt="haru"
//             width={200}
//             height={300}
//             className="rounded-md"
//           />
//           <h1 className="text-xs min-h-[8rem]">
//             <p className="text-blue-700 font-bold text-base">③</p>
//             予約日時を選択します。<br />カレンダー上で⭕️となっている箇所は予約が可能です。
//           </h1>
//         </div>{" "}
//         <div className="flex flex-col p-1 items-center gap-4">
//           <Image
//             src="/スクショ６２.PNG"
//             alt="haru"
//             width={200}
//             height={300}
//             className="rounded-md"
//           />
//           <h1 className="text-xs min-h-[8rem]">
//             <p className="text-blue-700 font-bold text-base">④</p>
//             内容をご確認の上、大丈夫であれば、<br />『上記に同意の上、予約を確定する』を押してください。
//           </h1>
//         </div>
//         <div className="flex flex-col p-1 items-center gap-4">
//           <Image
//             src="/スクショ７.png"
//             alt="haru"
//             width={200}
//             height={300}
//             className="rounded-md"
//           />
//           <h1 className="text-xs min-h-[8rem]">
//             <p className="text-blue-700 font-bold text-base">⑤</p>
//             予約が確定すると、<br />マイページから自身の予約の確認やキャンセルが可能となります。
//           </h1>
//         </div>{" "}
//         <div className="flex flex-col p-1 items-center gap-4">
//           <Image
//             src="/スクショ８２.PNG"
//             alt="haru"
//             width={200}
//             height={300}
//             className="rounded-md"
//           />
//           <h1 className="text-xs min-h-[8rem]">
//             <p className="text-blue-700 font-bold text-base">⑥</p>
//             予約後、LINEに確定の通知メッセージが届きます。<br />また、施術7日前、1日前に、リマインドのメッセージが届きます。
//             <br />メルプ問診の記入も来院までにお願いします😊
//           </h1>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }
'use client';

import React from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from 'react';

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

const ImageTextItem = ({ imageSrc, altText, number, description, importantInfo }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showImportant, setShowImportant] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="flex flex-col items-center p-2 gap-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
    >
      <Image
        src={imageSrc}
        alt={altText}
        width={200}
        height={300}
        className="rounded-md"
      />
      <div className="text-center flex-grow flex flex-col items-start w-full">
        <p className="text-pink-600 font-bold text-xl mb-2 self-center">{number}</p>
        <p className="text-sm text-left text-gray-700">{description}</p>
        {importantInfo && (
          <div className="w-full mt-2">
            <button
              onClick={() => setShowImportant(!showImportant)}
              className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-red-600 transition-colors duration-300"
            >
              {showImportant ? '重要情報を隠す' : '重要情報を表示'}
            </button>
            <AnimatePresence>
              {showImportant && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 p-2 bg-red-100 rounded-md"
                >
                  {importantInfo}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
};


export default function IndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-pink-100">
      <Header />
      <main className="flex-grow w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center space-y-12 py-12 w-full">
            <AnimatedSection>
              <h1 className="bg-gradient-to-r from-pink-300 to-pink-500 text-white text-center text-2xl sm:text-3xl lg:text-4xl font-bold py-4 px-8 rounded-2xl shadow-lg w-full">
                会員登録の方法
              </h1>
            </AnimatedSection>
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full max-w-3xl mx-auto">
                <div className="col-span-1">
                  <ImageTextItem
                    imageSrc="/新２のコピー２.PNG"
                    altText="Step 1"
                    number="①"
                    description="下記の登録画面へ進むボタンを押すと、上記のような画面が表示されます"
                  />
                </div>
                <div className="col-span-1">
                  <ImageTextItem
                    imageSrc="/新１のコピー２.PNG"
                    altText="Step 2"
                    number="②"
                    description="上記の空欄を埋めてください。"
                    importantInfo={
                      <>
                        <span className="font-bold">重要:</span>
                        <br />
                        <div className="text-left text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-700 leading-tight">
                          画像中央の『会員番号』には、当院の診察券IDの入力をお願いします。
                          <br />
                          院内システムとの円滑な連携にご協力お願いします😊
                        </div>
                      </>
                    }
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
            <div className="w-full flex justify-center">
              <Link
                href="https://ohori-pc.kalonade.com/ohori-pc/register"
                className="inline-block text-white font-bold rounded-full shadow-lg bg-gradient-to-r from-yellow-300 to-yellow-400 hover:bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 w-full sm:w-auto sm:min-w-[200px] md:min-w-[250px] lg:min-w-[300px]"
              >
                <span className="block px-6 py-3 text-sm sm:text-base md:text-lg lg:text-xl text-center">
                  このまま登録画面に進む
                </span>
              </Link>
            </div>
          </AnimatedSection>

            <AnimatedSection>
              <h2 className="bg-gradient-to-r from-pink-300 to-pink-500 text-white text-center text-2xl sm:text-3xl lg:text-4xl font-bold py-4 px-8 rounded-2xl shadow-lg w-full">
                予約の手順について
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
                <ImageTextItem
                  imageSrc="/スクショ３２.PNG"
                  altText="Step 1"
                  number="①"
                  description="LINEの『新規予約/予約状況』ボタンから進むと、上記画面に遷移します。オレンジの『予約する』ボタンを押してください。"
                />
                <ImageTextItem
                  imageSrc="/スクショ４２.PNG"
                  altText="Step 2"
                  number="②"
                  description="スクロールして、施術メニューの『このメニューを追加』ボタンを押して、『この内容で日時選択へ進む』を押してください。"
                />
                <ImageTextItem
                  imageSrc="/スクショ５２.PNG"
                  altText="Step 3"
                  number="③"
                  description="予約日時を選択します。カレンダー上で⭕️となっている箇所は予約が可能です。"
                />
                <ImageTextItem
                  imageSrc="/スクショ６２.PNG"
                  altText="Step 4"
                  number="④"
                  description="内容をご確認の上、大丈夫であれば、『上記に同意の上、予約を確定する』を押してください。"
                />
                <ImageTextItem
                  imageSrc="/スクショ７.png"
                  altText="Step 5"
                  number="⑤"
                  description="予約が確定すると、マイページから自身の予約の確認やキャンセルが可能となります。"
                />
                <ImageTextItem
                  imageSrc="/スクショ８２.PNG"
                  altText="Step 6"
                  number="⑥"
                  description="予約後、LINEに確定の通知メッセージが届きます。また、施術7日前、1日前に、リマインドのメッセージが届きます。メルプ問診の記入も来院までにお願いします😊"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


