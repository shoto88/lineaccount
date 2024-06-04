import Image from "next/image";
import Header from "../components/header";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Footer from "../components/footer";
export default function IndexPage() {
  return (
    <>
      <Header />
      <section className="text-center text-lg font-bold mt-3 border-double border-b-4 border-sky-500">
        会員登録の方法
      </section>
      <section className="container grid grid-cols-2 items-center gap-0 p-2">
        <div className="flex flex-col items-center p-1 gap-4">
          <Image
            src="/新２のコピー２.PNG"
            alt="haru"
            width={200}
            height={300}
            className="rounded-md"
          />
          <h1 className="text-sm min-h-[10rem]">
            <p className="text-blue-700 font-bold text-base">①</p>
            下記の登録画面へ進むボタンを押すと、上記のような画面が表示されます
          </h1>
        </div>
        <div className="flex flex-col items-center p-1 gap-4">
          <Image
            src="/新１のコピー２.PNG"
            alt="haru"
            width={200}
            height={300}
            className="rounded-md"
          />
          <h1 className="text-xs min-h-[10rem]">
            <p className="text-blue-700 font-bold text-base">②</p>
            上記の空欄を埋めてください。
            <br />
            <span className="text-base text-red-500 font-extrabold border-1 border-red-500">
              ↓重要↓
            </span>
            <br />
            画像中央の『会員番号』には、当院の診察券IDの入力をお願いします。
            <br />
            院内システムとの円滑な連携にご協力お願いします😊
          </h1>
        </div>
      </section>
      <div className="container flex flex-col">
        <div className="items-center flex justify-center mt-10 mb-10">
          <Link
            href="https://ohori-pc.kalonade.com/ohori-pc/register"
            className={buttonVariants({ variant: "outline" })}
          >
            このまま登録画面に進む
          </Link>
          </div>
          <section className="text-center text-lg font-bold mt-3 border-double mb-3 border-4 border-sky-500">
            予約の手順について
          </section>
        
      </div>
      <section className="container grid grid-cols-2 items-center gap-0 p-2">
        <div className="flex flex-col items-center p-1 gap-4">
          <Image
            src="/スクショ３２.PNG"
            alt="haru"
            width={200}
            height={300}
            className="rounded-md"
          />
          <h1 className="text-xs min-h-[8rem]">
            <p className="text-blue-700 font-bold text-base">①</p>
             LINEの『新規予約/予約状況』<br />ボタンから進むと、上記画面に遷移します。<br />オレンジの『予約する』ボタンを押してください。
          </h1>
        </div>
        <div className="flex flex-col items-center p-1 gap-4">
          <Image
            src="/スクショ４２.PNG"
            alt="haru"
            width={200}
            height={300}
            className="rounded-md"
          />
          <h1 className="text-xs min-h-[8rem]">
            <p className="text-blue-700 font-bold text-base">②</p>
            スクロールして、施術メニューの『このメニューを追加』ボタンを押して、<br />『この内容で日時選択へ進む』を押してください。
          </h1>
        </div>
        <div className="flex flex-col p-1 items-center gap-4">
          <Image
            src="/スクショ５２.PNG"
            alt="haru"
            width={200}
            height={300}
            className="rounded-md"
          />
          <h1 className="text-xs min-h-[8rem]">
            <p className="text-blue-700 font-bold text-base">③</p>
            予約日時を選択します。<br />カレンダー上で⭕️となっている箇所は予約が可能です。
          </h1>
        </div>{" "}
        <div className="flex flex-col p-1 items-center gap-4">
          <Image
            src="/スクショ６２.PNG"
            alt="haru"
            width={200}
            height={300}
            className="rounded-md"
          />
          <h1 className="text-xs min-h-[8rem]">
            <p className="text-blue-700 font-bold text-base">④</p>
            内容をご確認の上、大丈夫であれば、<br />『上記に同意の上、予約を確定する』を押してください。
          </h1>
        </div>
        <div className="flex flex-col p-1 items-center gap-4">
          <Image
            src="/スクショ７.PNG"
            alt="haru"
            width={200}
            height={300}
            className="rounded-md"
          />
          <h1 className="text-xs min-h-[8rem]">
            <p className="text-blue-700 font-bold text-base">⑤</p>
            予約が確定すると、<br />マイページから自身の予約の確認やキャンセルが可能となります。
          </h1>
        </div>{" "}
        <div className="flex flex-col p-1 items-center gap-4">
          <Image
            src="/スクショ８２.PNG"
            alt="haru"
            width={200}
            height={300}
            className="rounded-md"
          />
          <h1 className="text-xs min-h-[8rem]">
            <p className="text-blue-700 font-bold text-base">⑥</p>
            予約後、LINEに確定の通知メッセージが届きます。<br />また、施術7日前、1日前に、リマインドのメッセージが届きます。
            <br />メルプ問診の記入も来院までにお願いします😊
          </h1>
        </div>
      </section>
      <Footer />
    </>
  );
}
