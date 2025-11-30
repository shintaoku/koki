"use client";

import { useEffect } from "react";
import Link from "next/link";
import SectionBar from "../components/SectionBar";
import { useLocale } from "../contexts/LocaleContext";

export default function Reservation() {
  const { locale } = useLocale();

  // ページ読み込み時に最上部へスクロール
  useEffect(() => {
    // 即座に実行
    window.scrollTo(0, 0);
    // 少し遅延して再実行（確実性のため）
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  const CONTENTS = {
    JP: {
      reservation: "RESERVATION",
      reserveByPhoneLabel: "お電話でのご予約",
      phoneNum: "0554-52-2781",
      reserveViaTableCheck: "TableCheckでのご予約",
      noteStay: "ご宿泊をご希望のお客様は、5日前までにご予約くださいますようお願い申し上げます。",
      noteDinner: "お食事のみをご希望のお客様は、3日前までにご予約をお願いいたします。",
      closedDayLabel: "定休日",
      closedDays: "日曜日 / 月曜日",
      hoursDinner: "ディナー 19:00〜",
      hoursBreakfast: "朝食 9:00 〜",
      checkIn: "チェックイン 15:00〜",
      checkOut: "チェックアウト 〜11:00",
      cancelPolicyLabel: "キャンセル料",
      cancel5Days: "5日前〜 ご予約料金の50%",
      cancel3Days: "3日前（72時間前）〜 ご予約料金の100%",
      dinner: "DINNER",
      mealOnly: "お食事のみのプラン",
      course: "Course",
      tastingCourse: "Tasting Course",
      price19800: "¥19,800/名",
      alcoholPairing: "- Alcohol Pairing",
      price33000: "¥33,000/名",
      nonAlcoholPairing: "- Non-Alcoholic Pairing",
      price30800: "¥30,800/名",
      priceNote: "※ 価格表記は全て税込価格、サービス料は別になります。",
      dinnerStay: "DINNER & STAY",
      mealAndStay: "お食事＋ご宿泊のプラン",
      konoma: "KONOMA",
      konomaDesc: "ワンルームの広々としたお部屋（1〜3名）",
      price39600: "¥39,600/名",
      price52800: "¥52,800/名",
      price50600: "¥50,600/名",
      breakfast: "朝食（オプション）",
      price3300: "¥3,300/名",
      konomaNote: "※ 3名宿泊の場合は、お部屋のご料金を¥55,500（税込）にてご案内させて頂きます。",
      irori: "IRORI",
      iroriDesc: "囲炉裏、ウッドデッキ付きのお部屋（1〜2名）",
      price44000: "¥44,000/名",
      price57200: "¥57,200/名",
      price55000: "¥55,000/名",
      roomDetails: "お部屋の詳細はこちら",
      tastingCourseAlcohol: "Tasting Course \n -Alcohol Pairing",
      tastingCourseNonAlcohol: "Tasting Course \n -Non-Alcoholic Pairing",
    },
    EN: {
      reservation: "RESERVATION",
      reserveByPhoneLabel: "Reserve by phone:",
      phoneNum: "+81 0554-52-2781",
      reserveViaTableCheck: "Reserve via TableCheck",
      noteStay: "For overnight stays, please make your reservation at least 5 days in advance.",
      noteDinner: "For dining-only reservations, please book at least 3 days in advance.",
      closedDayLabel: "Closed on Sundays & Mondays",
      closedDays: "(Please check our reservation system on TableCheck for the most up-to-date schedule.)",
      hoursDinner: "Dinner from 7:00 PM",
      hoursBreakfast: "Breakfast from 9:00 AM",
      checkIn: "Check-In from 3:00 PM",
      checkOut: "Check-Out by 11:00 AM",
      cancelPolicyLabel: "Cancellation Policy",
      cancel5Days: "Cancellations made 5 days prior will incur a charge of 50% of the reservation fee.",
      cancel3Days: "Cancellations made 3 days prior (72 hours before) will incur a charge of 100% of the reservation fee.",
      dinner: "DINNER",
      mealOnly: "Meal-Only Plan",
      course: "Course",
      tastingCourse: "Tasting Course",
      price19800: "¥19,800 per guest",
      alcoholPairing: "- Alcohol Pairing",
      price33000: "¥33,000 per guest",
      nonAlcoholPairing: "Non-Alcoholic Pairing",
      price30800: "¥30,800 per guest",
      priceNote: "*All prices include tax. A service charge will be added separately.",
      dinnerStay: "DINNER & STAY",
      mealAndStay: "Meal and Accomodation Plan",
      konoma: "KONOMA",
      konomaDesc: "A spacious suite for 1 to 3 guests",
      price39600: "¥39,600 per guest",
      price52800: "¥52,800 per guest",
      price50600: "¥50,600 per guest",
      breakfast: "Breakfast (Optional)",
      price3300: "¥3,300 per guest",
      konomaNote: "*For stays with 3 guests, the room rate will be ¥55,500 (tax included).",
      irori: "IRORI",
      iroriDesc: "A suite fitted with a wooden deck and irori fireplace for 1 or 2 guests",
      price44000: "¥44,000 per guest",
      price57200: "¥57,200 per guest",
      price55000: "¥55,000 per guest",
      roomDetails: "View Room Details",
      tastingCourseAlcohol: "Tasting Course \n - Alcohol Pairing",
      tastingCourseNonAlcohol: "Tasting Course \n Non-Alcoholic Pairing",
    }
  };

  const c = CONTENTS[locale];

  return (
    <div>
      {/* モバイル版（スクショ準拠） */}
      <div className="block 2xl:hidden pt-10">

      {/* 左上ロゴは共通コンポーネントで固定表示されるため削除 */}

        {/* 本文 */}
        <section className="w-full">
          <div className="w-full max-w-[640px] mx-auto px-10 pb-6">
            {/* RESERVATION */}
            <h2 className="pt-2 text-[18px] tracking-wide font-medium underline underline-offset-[6px] decoration-gray-500">{c.reservation}</h2>
            <div className="mt-8 space-y-4 text-[14px]">
              <div>
                <p className="mb-1">{c.reserveByPhoneLabel}</p>
                <a href="tel:0554522781" className="underline underline-offset-[6px] decoration-1">{c.phoneNum}</a>
              </div>
              <div>
                <a
                  href="https://www.tablecheck.com/ja/shops/koki/reserve?fbclid=PARlRTSAMyJAtleHRuA2FlbQIxMQABp-AmKhUpCPKtRZyduRntuUCn-tBNhQTTz53HNAcEdG8zr7iuStEJ-3E3OBou_aem_Cwsx_39V0CAJwx-WIB_AYg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-[6px] decoration-1"
                >
                  {c.reserveViaTableCheck}
                </a>
            <p className="text-[12px] mt-6 whitespace-pre-wrap">
              {c.noteStay}
            </p>
            <p className="text-[12px] mt-1 whitespace-pre-wrap">
              {c.noteDinner}
            </p>
              </div>
            </div>

            <div className="w-16 h-[0.5px] bg-[rgb(51,51,51)] my-9" />

            <div className="text-[14px] space-y-2">
              <div>
                <p className="whitespace-pre-wrap mb-1">{c.closedDayLabel}</p>
                <p className="whitespace-pre-wrap mb-4">{c.closedDays}</p>

                <p className="whitespace-pre-wrap">{locale === 'JP' ? `${c.hoursDinner} / ${c.hoursBreakfast}` : `${c.hoursDinner}\n${c.hoursBreakfast}`}</p>
                <p className="whitespace-pre-wrap">{locale === 'JP' ? `${c.checkIn} / ${c.checkOut}` : `${c.checkIn}\n${c.checkOut}`}</p>
              </div>
            </div>

            <div className="w-16 h-[0.5px] bg-[rgb(51,51,51)] my-9" />

            <div className="text-[14px]">
              <p className="mb-2">{c.cancelPolicyLabel}</p>
              <p className="whitespace-pre-wrap">{c.cancel5Days}</p>
              <p className="whitespace-pre-wrap">{c.cancel3Days}</p>
            </div>

            {/* DINNER */}
            <div className="mt-12">
              <h3 className="text-[18px] md:text-[24px] tracking-wide font-medium">{c.dinner}</h3>
              <p className="text-[12px]">{c.mealOnly}</p>

              <div className="mt-8">
                <h4 className="text-[16px] md:text-[20px] font-medium mb-2">{c.course}</h4>
                <div className="border-b-[0.5px] border-[rgb(51,51,51)]">
                </div>
                <ul className="text-[12px]">
                  <li className="flex items-center justify-between py-6 border-b-[0.5px] border-[rgb(51,51,51)]">
                    <span>{c.tastingCourse}</span>
                    <span className="tracking-wide">{c.price19800}</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b-[0.5px] border-[rgb(51,51,51)]">
                    <span className="whitespace-pre-line">{c.tastingCourseAlcohol}</span>
                    <span className="tracking-wide">{c.price33000}</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b-[0.5px] border-[rgb(51,51,51)]">
                    <span className="whitespace-pre-line">{c.tastingCourseNonAlcohol}</span>
                    <span className="tracking-wide">{c.price30800}</span>
                  </li>
                </ul>
                <p className="text-[12px] mt-3 whitespace-pre-wrap">{c.priceNote}</p>
              </div>
            </div>

            {/* DINNER & STAY */}
            <div>
              <h3 className="text-[18px] tracking-wide font-medium pt-16">{c.dinnerStay}</h3>
              <p className="text-[12px] mt-1">{c.mealAndStay}</p>

              {/* KONOMA */}
              <div className="mt-8">
                <h4 className="text-[16px] tracking-wide">{c.konoma}</h4>
                <div className="border-b-[0.5px] border-[rgb(51,51,51)]">
                  <p className="text-[10px] mb-3 whitespace-nowrap">{c.konomaDesc}</p>
                </div>
                <ul className="text-[14px]">
                <li className="flex items-center justify-between py-6 border-b-[0.5px] border-[rgb(51,51,51)]">
                    <span>{c.tastingCourse}</span>
                    <span className="tracking-wide">{c.price39600}</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b-[0.5px] border-[rgb(51,51,51)]">
                    <span className="whitespace-pre-line">{c.tastingCourseAlcohol}</span>
                    <span className="tracking-wide">{c.price52800}</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b-[0.5px] border-[rgb(51,51,51)]">
                    <span className="whitespace-pre-line">{c.tastingCourseNonAlcohol}</span>
                    <span className="tracking-wide">{c.price50600}</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b-[0.5px] border-[rgb(51,51,51)]">
                    <span>{c.breakfast}</span>
                    <span className="tracking-wide">{c.price3300}</span>
                  </li>
                </ul>
                <p className="text-[12px] mt-3 whitespace-pre-wrap">{c.konomaNote}</p>
              </div>

              {/* IRORI */}
              <div className="mt-10">
                <h4 className="text-[20px] tracking-wide">{c.irori}</h4>
                <div className="border-b-[0.5px] border-[rgb(51,51,51)]">
                  <p className="text-[10px] mb-3 whitespace-nowrap">{c.iroriDesc}</p>
                </div>
                <ul className="text-[14px]">
                  <li className="flex items-center justify-between py-4 border-b-[0.5px] border-[rgb(51,51,51)]">
                    <span>{c.tastingCourse}</span>
                    <span className="tracking-wide">{c.price44000}</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b-[0.5px] border-[rgb(51,51,51)]">
                    <span className="whitespace-pre-line">{c.tastingCourseAlcohol}</span>
                    <span className="tracking-wide">{c.price57200}</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b-[0.5px] border-[rgb(51,51,51)]">
                    <span className="whitespace-pre-line">{c.tastingCourseNonAlcohol}</span>
                    <span className="tracking-wide">{c.price55000}</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b-[0.5px] border-[rgb(51,51,51)]">
                    <span>{c.breakfast}</span>
                    <span className="tracking-wide">{c.price3300}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center">
                <Link href="/stay" className="text-[13px] underline underline-offset-[6px]">{c.roomDetails}</Link>
              </div>
            </div>

            {/* モバイルのコピーライトは SectionBar に任せるため、ここでは表示しない */}
          </div>
        </section>
        
        {/* モバイル版でのコンテンツ下部スペース */}
        <div className="mb-4"></div>
      </div>

      {/* タブレット/PC版（従来レイアウト） */}
      <div className="hidden 2xl:block -mt-20">
        <section className="w-full text-black">
          {/* 左上ロゴは共通コンポーネントで固定表示されるため削除 */}

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-14 xl:gap-18">
              {/* 左カラム：左レール見出し（DINNER）＋ コンテンツ */}
              <div className="w-full" style={{ marginLeft: '-80px' }}>
                <div className="flex items-start gap-2">
                  <div className="w-[200px] shrink-0 text-left leading-tight">
                    <h2 className="text-[20px] tracking-wide">{c.dinner}</h2>
                    <p className="text-[10px] text-black mt-1">{c.mealOnly}</p>
                  </div>
                  <div className="flex-1 text-[16px] space-x-30">
                    <h3 className="text-[20px] font-light mb-2">{c.course}</h3>
                    <div className="border-b border-[rgb(51,51,51)] mb-6 overflow-x-auto">
                    </div>
                    <div className="space-y-7">
                      <div className="border-b-[0.5px] border-[rgb(51,51,51)] pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px]">{c.tastingCourse}</span>
                          <span className="text-[16px] tracking-wide">{c.price19800}</span>
                        </div>
                      </div>
                      <div className="border-b-[0.5px] border-[rgb(51,51,51)] pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px] whitespace-pre-line">{c.tastingCourseAlcohol}</span>
                          <span className="text-[16px] tracking-wide">{c.price33000}</span>
                        </div>
                      </div>
                      <div className="border-b-[0.5px] border-[rgb(51,51,51)] pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px] whitespace-pre-line">{c.tastingCourseNonAlcohol}</span>
                          <span className="text-[16px] tracking-wide">{c.price30800}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] md:text-[12px] text-black mt-4">{c.priceNote}</p>

                    <h2 className="text-[24px] tracking-wide mt-20 mb-2 inline-block border-b border-gray-500 pb-2">{c.reservation}</h2>
                    <div className="space-y-6">
                      <div className="mt-4">
                        <p>{c.reserveByPhoneLabel}</p>
                        <p>
                          <a href="tel:0554522781" className="underline underline-offset-[6px] decoration-1">{c.phoneNum}</a>
                        </p>
                      </div>
                      <div>
                        <p>
                          <a
                            href="https://www.tablecheck.com/ja/shops/koki/reserve?fbclid=PARlRTSAMyJAtleHRuA2FlbQIxMQABp-AmKhUpCPKtRZyduRntuUCn-tBNhQTTz53HNAcEdG8zr7iuStEJ-3E3OBou_aem_Cwsx_39V0CAJwx-WIB_AYg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-[6px] decoration-1"
                          >
                            {c.reserveViaTableCheck}
                          </a>
                        </p>
                    <p className="md:text-[14px] text-[10px] leading-relaxed whitespace-pre-wrap mt-4">
                      {c.noteStay}
                    </p>
                    <p className="md:text-[14px] text-[10px] leading-relaxed mb-8 whitespace-pre-wrap">
                      {c.noteDinner}
                    </p>
                        <div className="w-10 h-[0.5px] bg-[rgb(51,51,51)] my-8" />
                      </div>
                      <div className="space-y-1">
                        <p className="whitespace-pre-wrap">{c.closedDayLabel}</p>
                        <p className="whitespace-pre-wrap">{c.closedDays}</p>
                        <p className="whitespace-pre-wrap">{locale === 'JP' ? `${c.hoursDinner} / ${c.hoursBreakfast}` : `${c.hoursDinner}\n${c.hoursBreakfast}`}</p>
                        <p className="whitespace-pre-wrap">{locale === 'JP' ? `${c.checkIn} / ${c.checkOut}` : `${c.checkIn}\n${c.checkOut}`}</p>
                      </div>
                      <div className="">
                        <div className="w-10 h-[0.5px] bg-[rgb(51,51,51)] my-8" />
                        <p>{c.cancelPolicyLabel}</p>
                        <p className="whitespace-pre-wrap">{c.cancel5Days}</p>
                        <p className="whitespace-pre-wrap">{c.cancel3Days}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右カラム：DINNER＆STAY＋コンテンツ */}
              <div className="w-full">
                <div className="flex items-start gap-18">
                  <div className="w-[200px] shrink-0 text-left leading-tight">
                    <h2 className="text-[20px] tracking-wide whitespace-nowrap">{c.dinnerStay}</h2>
                    <p className="text-[10px] text-black mt-1">{c.mealAndStay}</p>
                  </div>
                  <div className="flex-1 text-[16px]">
                    <h3 className="text-[20px] tracking-wide mb-2">{c.konoma}</h3>
                    <div className="border-b-[0.5px] border-[rgb(51,51,51)] mb-6 overflow-x-auto">
                      <p className="text-[12px] text-black mb-2 whitespace-nowrap">{c.konomaDesc}</p>
                    </div>
                    <div className="space-y-7">
                      <div className="border-b-[0.5px] border-[rgb(51,51,51)] pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px]">{c.tastingCourse}</span>
                          <span className="text-[16px] tracking-wide">{c.price39600}</span>
                        </div>
                      </div>
                      <div className="border-b-[0.5px] border-[rgb(51,51,51)] pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px] whitespace-pre-line">{c.tastingCourseAlcohol}</span>
                          <span className="text-[16px] tracking-wide">{c.price52800}</span>
                        </div>
                      </div>
                      <div className="border-b-[0.5px] border-[rgb(51,51,51)] pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px] whitespace-pre-line">{c.tastingCourseNonAlcohol}</span>
                          <span className="text-[16px] tracking-wide">{c.price50600}</span>
                        </div>
                      </div>
                      <div className="border-b-[0.5px] border-[rgb(51,51,51)] pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px]">{c.breakfast}</span>
                          <span className="text-[16px] tracking-wide">{c.price3300}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[12px] md:text-[12px] text-black mt-4">{c.konomaNote}</p>

                    <h3 className="text-[20px] tracking-wide mt-6 mb-2">{c.irori}</h3>
                    <div className="border-b-[0.5px] border-[rgb(51,51,51)] mb-6 overflow-x-auto">
                      <p className="text-[14px] text-black mb-2 whitespace-nowrap">{c.iroriDesc}</p>
                    </div>
                    <div className="space-y-7">
                       <div className="border-b-[0.5px] border-[rgb(51,51,51)] pb-6">
                         <div className="flex items-center justify-between">
                           <span className="text-[16px]">{c.tastingCourse}</span>
                           <span className="text-[16px] tracking-wide">{c.price44000}</span>
                         </div>
                       </div>
                       <div className="border-b-[0.5px] border-[rgb(51,51,51)] pb-6">
                         <div className="flex items-center justify-between">
                           <span className="text-[16px] whitespace-pre-line">{c.tastingCourseAlcohol}</span>
                           <span className="text-[16px] tracking-wide">{c.price57200}</span>
                         </div>
                       </div>
                       <div className="border-b-[0.5px] border-[rgb(51,51,51)] pb-6">
                         <div className="flex items-center justify-between">
                           <span className="text-[16px] whitespace-pre-line">{c.tastingCourseNonAlcohol}</span>
                           <span className="text-[16px] tracking-wide">{c.price55000}</span>
                         </div>
                       </div>
                       <div className="border-b-[0.5px] border-[rgb(51,51,51)] pb-6">
                         <div className="flex items-center justify-between">
                           <span className="text-[16px]">{c.breakfast}</span>
                           <span className="text-[16px] tracking-wide">{c.price3300}</span>
                         </div>
                       </div>
                    </div>

                    <div className="mt-6">
                      <Link href="/stay" className="text-[15px] underline hover:no-underline">{c.roomDetails}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Reservation用のWebフッター（グローバルは抑止しているためローカルに配置） */}
        <div className="hidden md:block mt-30">
          <SectionBar variant="centered" />
        </div>
      </div>

      {/* フッターは共通レイアウトで表示（ReservationのWebはローカル表示に切替） */}
    </div>
  );
}
