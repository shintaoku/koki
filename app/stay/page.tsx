"use client";

import Image from "next/image";
import { useLocale } from "../contexts/LocaleContext";
import { useState, useEffect } from "react";

export default function Stay() {
  const { locale } = useLocale();
  const konomaImages = ["/konoma_1.jpg", "/konoma_2.jpg"];
  const [konomaIndex, setKonomaIndex] = useState(0);
  const iroriImages = ["/irori_1.jpg", "/irori_2.jpg"];
  const [iroriIndex, setIroriIndex] = useState(0);

  // Auto slide KONOMA
  useEffect(() => {
    const id = setInterval(() => {
      setKonomaIndex((prev) => (prev + 1) % konomaImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [konomaImages.length]);

  // Auto slide IRORI
  useEffect(() => {
    const id = setInterval(() => {
      setIroriIndex((prev) => (prev + 1) % iroriImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [iroriImages.length]);

  const CONTENTS = {
    JP: {
      konoma: "KONOMA",
      konomaTitle: "ワンルームの広々としたお部屋",
      konomaDesc: "37㎡ / 1〜3名 / セミダブルベッド2台 / ソファベッド1台",
      irori: "IRORI",
      iroriTitle: "囲炉裏とウッドデッキ付きのお部屋",
      iroriDesc: "36㎡ / 1〜2名 / セミダブルベッド2台",
      checkIn: "チェックイン 15:00〜",
      checkOut: "チェックアウト 〜11:00",
      amenitiesTitle: "設備・アメニティ",
      amenities: "ドライヤー / ソープ類（シャンプー・リンス・ボディソープ） / タオル類（フェイスタオル・バスタオル）/ ボディタオル\n歯ブラシ / メンズ用髭剃り / コーム / ティッシュケース / ハンガー / スリッパ / 冷蔵庫 / Wi-Fi 完備 / 風呂トイレ別 / 独立洗面台",
      notesTitle: "注意事項",
      noteSmoking: "・ご滞在中は終日禁煙とさせていただいております。（電子タバコ含む）\nご不便をおかけいたしますが、喫煙エリアをご利用ください。",
      noteQuiet: "・自然の静けさとともに、夜の穏やかな時間をどうぞお楽しみください。\n23時以降はお静かにお願いいたします。",
      noteAlcohol: "・客室内での飲酒は、適量をお守りください。\n万一、客室内での飲酒により客室内の汚損が発生した場合、修繕費用をご請求させていただくことがあります。",
      cancelTitle: "キャンセル料",
      cancel5Days: "5日前〜 ご予約料金の50%",
      cancel3Days: "3日前（72時間前）〜 ご予約料金の100%",
    },
    EN: {
      konoma: "KONOMA",
      konomaTitle: "Spacious One-Room Retreat",
      konomaDesc: "37㎡ | 1–3 Guests | 2 Semi-Double Beds | 1 Sofa Bed",
      irori: "IRORI",
      iroriTitle: "Lodge Room with Irori Lounge and Private Wood Deck",
      iroriDesc: "36㎡ | 1–2 Guests | 2 Semi-Double Beds", // Inferred from missing target text but consistent with first item style
      checkIn: "Check-In from 3:00 PM",
      checkOut: "Check-Out by 11:00 AM",
      amenitiesTitle: "Facilities & Amenities",
      amenities: "Hair Dryer | Toiletries (Shampoo, Conditioner, Body Soap) | Towels (Face & Bath) | Body Towel |\nToothbrush | Men's Razor | Comb | Tissue Box | Hangers | Slippers | Refrigerator | Wi-Fi |\nSeparate Bath & Toilet | Separate Washbasin",
      notesTitle: "Guidelines for a Comfortable Stay",
      noteSmoking: "Non-Smoking: Our property is entirely non-smoking, including e-cigarettes. We appreciate your understanding and ask that you use the designated smoking area.",
      noteQuiet: "Quiet Hours: Enjoy the calm of nature and a peaceful evening. Please keep noise to a minimum after 11:00 PM.",
      noteAlcohol: "Alcohol in Guest Rooms: Please consume alcohol responsibly within your room. In the event of any damage caused by drinking, repair costs may be charged.",
      cancelTitle: "Cancellation Policy",
      cancel5Days: "Cancellations made 5 days prior will incur a charge of 50% of the reservation fee.",
      cancel3Days: "Cancellations made 3 days prior (72 hours before) will incur a charge of 100% of the reservation fee.",
    }
  };

  const c = CONTENTS[locale];

  return (
    <div className="font-sans pt-6 md:-mt-30">
      {/* 左上ロゴは共通コンポーネントで固定表示されるため削除 */}
      
      {/* コンテンツエリア - 全体画面で中央配置 */}
      <div className="w-full flex flex-col items-center justify-center flex-1">

      {/* KINOMA 詳細セクション */}
        <div className="w-full mx-auto">
          {/* KINOMAタイトルとテキスト情報 */}
          <div className="text-center mb-3">
                        <h3 className="text-xl md:text-[30px] font-light mb-4 md:mb-4 text-black">{c.konoma}</h3>
            <p className="text-light md:text-[16px] text-black text-xs md:text-base">{c.konomaTitle}</p>
            <p className="text-light md:text-[16px] text-black mb-3 md:mb-8 text-xs md:text-base">{c.konomaDesc}</p>
          </div>
          
          {/* KINOMA画像 - フェード切替（ドット付き） */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-5xl md:max-w-6xl px-8 md:px-6">
              <div className="relative aspect-[16/9] md:aspect-[16/9] overflow-hidden shadow-lg">
                {konomaImages.map((src, idx) => (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-700 ${idx === konomaIndex ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image src={src} alt={`KINOMA ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
                {/* dots inside slider */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {konomaImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setKonomaIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`w-[4px] h-[4px] rounded-full transition-colors ${i === konomaIndex ? 'bg-white' : 'bg-gray-400/70'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* IRORI 詳細セクション */}
        <div className="w-full mx-auto mt-16 md:mt-34">
          {/* IROIタイトルとテキスト情報 */}
          <div className="text-center mb-3">
          <h3 className="text-xl md:text-[30px] font-light md:mb-4 mb-3 text-black">{c.irori}</h3>
                        <p className="text-light text-black text-xs md:text-[16px]">{c.iroriTitle}</p>
            <p className="text-light text-black md:mb-8 mb-3 text-xs md:text-[16px]">{c.iroriDesc}</p>
          </div>
          
          {/* IRORI画像 - フェード切替（ドット付き） */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-5xl md:max-w-6xl px-8 md:px-6">
              <div className="relative aspect-[16/9] md:aspect-[16/9] overflow-hidden shadow-lg">
                {iroriImages.map((src, idx) => (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-700 ${idx === iroriIndex ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image src={src} alt={`IRORI ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
                {/* dots inside slider */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {iroriImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIroriIndex(i)}
                      aria-label={`Go to IRORI slide ${i + 1}`}
                      className={`w-[4px] h-[4px] rounded-full transition-colors ${i === iroriIndex ? 'bg-white' : 'bg-gray-400/70'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ご利用案内セクション */}
        <div className="w-full mx-auto px-8 py-16 md:py-60">
          <div className="w-full max-w-5xl md:max-w-6xl mx-auto text-black">
            {/* チェックイン・アウト */}
            {/* Mobile: 2つのラベルを横並びで、各自の下にのみ下線 */}
            <div className="block md:hidden mb-6 text-xs px-4">
              <div className="flex items-baseline justify-between flex-nowrap w-full gap-6">
                <span className="inline-block border-b border-gray-400 pb-1 whitespace-nowrap">{c.checkIn}</span>
                <span className="inline-block border-b border-gray-400 pb-1 whitespace-nowrap">{c.checkOut}</span>
              </div>
            </div>
            {/* Desktop: 2つの項目を中央に配置 */}
            <div className="hidden md:flex md:items-center md:justify-center md:gap-60 mb-20 md:text-[20px]">
              <div className="inline-block border-b border-gray-400 pb-1">{c.checkIn}</div>
              <div className="inline-block border-b border-gray-400 pb-1">{c.checkOut}</div>
            </div>

            <hr className="border-gray-400 border-1.5 my-8 mt-16" />
            {/* 設備・アメニティ */}
            <div className="grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] gap-x-4 md:gap-x-24 gap-y-6 py-1 items-center">
              <div className="font-light text-[12px] md:text-[20px]">{c.amenitiesTitle}</div>
              <div>
                <p className="whitespace-pre-wrap leading-tight md:leading-relaxed text-[10px] md:text-[16px]">
                  {c.amenities}
                </p>
              </div>
            </div>
            <hr className="border-gray-400 border-1.5 my-8" />

            {/* 注意事項 */}
            <div className="grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] md:gap-x-24 gap-y-6 py-1 items-center">
              <div className="font-light text-[12px] md:text-[20px]">{c.notesTitle}</div>
              <div className=" whitespace-pre-wrap leading-tight md:leading-relaxed text-[10px] md:text-[16px] px-3">
                <p className="whitespace-pre-wrap mb-4">{c.noteSmoking}</p>
                
                <p className="whitespace-pre-wrap mb-4">{c.noteQuiet}</p>
                
                <p className="whitespace-pre-wrap">{c.noteAlcohol}</p>
              </div>
            </div>
            <hr className="border-gray-400 border-1.5 my-8" />

            {/* キャンセル料 */}
            <div className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] md:gap-x-24 gap-y-6 py-1 items-center">
              <div className="font-light text-[12px] md:text-[20px]">{c.cancelTitle}</div>
              <div className=" whitespace-pre-wrap leading-tight md:leading-relaxed text-[10px] md:text-[16px]">
                <p>{c.cancel5Days}</p>
                <p>{c.cancel3Days}</p>
              </div>
            </div>
            <hr className="border-gray-400 border-1.5 my-8" />
          </div>
        </div>

            {/* FLOOR GUIDE */}
            <div className="text-center mb-10">
              <h3 className="text-lg md:text-3xl font-extralight text-black">FLOOR GUIDE</h3>
            </div>
            <div className="flex items-center justify-center mb-10">
              <div className="w-full max-w-5xl md:max-w-6xl">
                <Image
                  src="/koki_map.png"
                  alt="Floor Guide"
                  width={1000}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

      </div>
      {/* フッターは共通レイアウトで表示 */}
      
      {/* Webレイアウト用のセクションバー下部スペース */}
      <div className="hidden md:block mb-1"></div>
    </div>
  );
}
