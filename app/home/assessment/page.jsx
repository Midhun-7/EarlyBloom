"use client";
import React from "react";
import Layout from "../layout";
import { useRouter } from "next/navigation";

export default function Assessment0to1Page() {
  const router = useRouter();
  return (
    <div className="flex flex-1 justify-center gap-1 px-6 py-5">
      {/* Left Section */}
      <div className="layout-content-container flex flex-1 max-w-[920px] flex-col">
        {/* Hero */}
        <div
          className="rounded-xl bg-cover bg-center overflow-hidden min-h-[218px] flex flex-col justify-end text-white"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCwM_vyDHsMfX36k7FOWliqICsndIUaX4DiCaHYa814NeaTomsKXH4pouNbYS8oDzEjQDq7mGEV-Yioo7jBQ3UXC8YDxx5POTAZ9tnvRja0tRvpU5tgQHsgHOHKPIr831VyFma87a966bUVfy5E80TIDKH4wyKjpxlDvqzyUEGTpAtH-PZqEOJ4-K4RuaC19ir8ZWoEEeblh8KT0tk0sjopFyJMrgBJAIdDNfQWRa3ppxd7zmm_7DfcL6SESzBQ-DJ3H2RI_5hWTU")',
          }}
        >
          <div className="p-4 text-[28px] font-bold leading-tight">
            Development Watch: 3–4 Year Olds
          </div>
        </div>

        {/* Headline */}
        <h3 className="px-4 pt-5 pb-2 text-left text-2xl font-bold text-[#111518]">
          Know what to expect. Catch the signs early.
        </h3>

        {/* Concern Card */}
        {/* Concern Card */}
        <div className="p-4">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow bg-white xl:flex-row xl:items-start gap-4 p-4">
            {/* Image */}
            <div
              className="w-full xl:w-[45%] rounded-xl bg-cover bg-center bg-no-repeat min-h-[200px]"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDI2_pGQOwSRbipeVgWNa_TASgaeieyA6echKEDKIMinbUIEjzrb41EOV4izSH762J6j24biQPXhV9WoJ_8AwtbbQSmwRJ0TGJ6ETw4hCE4T8RS0-Y1YcjN9BWThgkAL9H61dNj57oCpMXndLrKBMeY8GP_VgDw-XeQDbfXSTCjDXWfoZCRKHUNeJlCDw7QiEoGk0mYQ3KRr5hG1lvOnxz8eqqIJJhELjx06HVNN2XLzC_xgNF-FqG25gz8t9ejizVtuJdtNGy2-f4")',
              }}
            />

            {/* Text */}
            <div className="flex grow flex-col gap-4 px-2 py-1">
              <p className="text-lg font-bold leading-tight text-[#111518]">
                Is your child easily distracted?
              </p>

              <div className="flex flex-col gap-3 justify-between xl:flex-row xl:items-end">
                <div className="text-base font-normal text-[#60798a] leading-relaxed">
                  <p>
                    It's natural to worry, but remember, every child develops at
                    their own pace. If you're concerned, our experts are here to
                    help.
                    <span className="italic">
                      {" "}
                      "Short attention spans are common, but if your child
                      struggles to focus even during quiet play or structured
                      activities, it's worth looking into further."
                    </span>{" "}
                    – Dr. Amelia Carter, Pediatric Neurologist.
                  </p>
                  <p className="mt-2 font-medium text-[#f97316]">
                    Possible early sign of Attention Deficit Hyperactivity
                    Disorder (ADHD)
                  </p>
                </div>

                <button
                  onClick={() => router.push("https://go-nogo-test.streamlit.app/")}
                  className="mt-2 rounded-full bg-[#34a3f3] px-5 py-2 text-sm font-medium text-white whitespace-nowrap"
                >
                  Attention Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="layout-content-container flex w-[360px] flex-col">
        <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold text-[#111518]">
          Related Articles
        </h2>

        {[
          {
            title: "Understanding Early Social Cues",
            author: "Dr. Evelyn Reed",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuA4EGL9m1hTZrPwXIbijiHVOuyJQniLEqOceaRDFPvhsGIQpzvbioIm6gigkfqt--hwkfOowBU-Za4zLWXpVM_z1l0Ute6kw-uR7qk7dsKkZhMoaIKB7oX6a6CxSWfSg2mjF_aFFFuG8VOds6zdFvbN4hvsaBmZltg_4diz4ElzPolxmzaKHgpXQNOnqlO4krkEWHdgriKIdB6ImiRrF5_SpSAXGa2zbGu5zRCqtaYQRT8QgPQ_hpvEFWwD_MoV3EgwWoB4c7VX2NM",
          },
          {
            title: "The Importance of Play in Development",
            author: "Dr. Evelyn Reed",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuABo81ihp5-DVGdREEIM6gCF15r-_VdkbY-zc-GdF4xTDuJW8VYjf3OyAqO993HY4kGQLosMgYr1cZKM-3e7Ivo0zyDElqzDtUvXRxXYPZbLRfNrFH8RJr8nQeON3ojWP7m4wY8u0cv8xeiVaN9ZmBtdaEPBROF29BI6RdjDdpw-HGW4HZNl1BOjoF7iGmCvufKtantrpolc3iDhEiRFR9MuCkYw6BnZt3pdLCtR5EwdJSt2bTzX_9PP0kXHcLL6SaV_wDLBhniPJg",
          },
          {
            title: "Nutrition for Optimal Brain Growth",
            author: "Dr. Evelyn Reed",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBLyFuRCa11uZ4yyhSl6L2lPIIu2eOg7GFchtXOde7TcUnTyWPKcI6BHKj7wWcv92thH3_nnWB1rxyiBSr58B5Ag7-rghahqLj-FJc08RDW2v4uevOyrNmX9UqDGhaOZlCRhHbF1igAzUZrI6gij_ryWiUfi-Tvwe0MuUcjeFhnZpevbu5zIr6ZTpw_mS6cNcYBnPzrU5pZj2mEEFocdDASXq8zFYNRSBI4J72UIdSKC1mAZ4fJZlL3NU6IzUaclJ422TynM_2CZTw",
          },
        ].map((article, i) => (
          <div className="p-4" key={i}>
            <div className="flex items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-base font-bold text-[#111518]">
                  {article.title}
                </p>
                <p className="text-sm font-normal text-[#60798a]">
                  {article.author}
                </p>
              </div>
              <div
                className="aspect-video w-full flex-1 rounded-xl bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${article.image}")` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
