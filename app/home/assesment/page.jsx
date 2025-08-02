'use client';
import React from 'react';

export default function Assessment0to1Page() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-[#f0f3f5] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111518]">
            <div className="size-4">
              {/* Logo */}
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_319">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-[-0.015em] text-[#111518]">Early Bloom</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              {["Home", "About Us", "Blogs", "Assessment"].map((text) => (
                <a key={text} href="#" className="text-sm font-medium text-[#111518] leading-normal">
                  {text}
                </a>
              ))}
            </div>
            <button className="flex h-10 items-center justify-center overflow-hidden rounded-full bg-[#f0f3f5] px-2.5 text-sm font-bold text-[#111518] gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z" />
              </svg>
            </button>
            <div
              className="size-10 rounded-full bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCr4W6SAhRNUKocKCl4bOPpXmy5trdegrY7S9lJmG7LC6nFyFrlF2cZCYrq8dSr9wj5btdNPc8iCRdXqDCOfNyKIx_C0IIzWFTfE46LPYkrRafYuZNB0MBnOQ3CkKLFSWAf-9IK5nDYGmK4J9uZlZGFP8TWkbgl6ecXlgDieG3oqc7S9s4yhc-BdvF1-v979iGO7e2dhJ93FQ60fakDXET-808rCZieu9QwXXqPi_8wEA1OVEH3gCDHSvTYyqQTd6c9rMU5U2MSBP8")',
              }}
            />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 justify-center gap-1 px-6 py-5">
          {/* Left */}
          <div className="layout-content-container flex flex-1 max-w-[920px] flex-col">
            {/* Hero */}
            <div className="rounded-xl bg-cover bg-center overflow-hidden min-h-[218px] flex flex-col justify-end text-white"
              style={{
                backgroundImage:
                  'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCwM_vyDHsMfX36k7FOWliqICsndIUaX4DiCaHYa814NeaTomsKXH4pouNbYS8oDzEjQDq7mGEV-Yioo7jBQ3UXC8YDxx5POTAZ9tnvRja0tRvpU5tgQHsgHOHKPIr831VyFma87a966bUVfy5E80TIDKH4wyKjpxlDvqzyUEGTpAtH-PZqEOJ4-K4RuaC19ir8ZWoEEeblh8KT0tk0sjopFyJMrgBJAIdDNfQWRa3ppxd7zmm_7DfcL6SESzBQ-DJ3H2RI_5hWTU")',
              }}
            >
              <div className="p-4 text-[28px] font-bold leading-tight">
                Development Watch: 0–1 Year Olds
              </div>
            </div>

            {/* Headline */}
            <h3 className="px-4 pt-5 pb-2 text-left text-2xl font-bold text-[#111518]">Know what to expect. Catch the signs early.</h3>

            {/* Card */}
            <div className="p-4">
              <div className="flex flex-col items-stretch justify-start rounded-xl shadow bg-white xl:flex-row xl:items-start">
                <div
                  className="aspect-video w-full rounded-xl bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDI2_pGQOwSRbipeVgWNa_TASgaeieyA6echKEDKIMinbUIEjzrb41EOV4izSH762J6j24biQPXhV9WoJ_8AwtbbQSmwRJ0TGJ6ETw4hCE4T8RS0-Y1YcjN9BWThgkAL9H61dNj57oCpMXndLrKBMeY8GP_VgDw-XeQDbfXSTCjDXWfoZCRKHUNeJlCDw7QiEoGk0mYQ3KRr5hG1lvOnxz8eqqIJJhELjx06HVNN2XLzC_xgNF-FqG25gz8t9ejizVtuJdtNGy2-f4")',
                  }}
                />
                <div className="flex grow flex-col gap-1 px-4 py-4">
                  <p className="text-lg font-bold leading-tight text-[#111518]">
                    Is your baby not making eye contact yet?
                  </p>
                  <div className="flex flex-col gap-1 justify-between xl:flex-row xl:items-end">
                    <div className="text-base font-normal text-[#60798a]">
                      <p>
                        It's natural to worry, but remember, every child develops at their own pace. If you're
                        concerned, our experts are here to help. "Eye contact is a crucial early social skill.
                        If your baby isn't engaging in eye contact, it's worth exploring further." - Dr. Amelia
                        Carter, Pediatric Neurologist
                      </p>
                      <p>Possible early sign of ASD</p>
                    </div>
                    <button className="mt-2 h-8 min-w-[84px] rounded-full bg-[#34a3f3] px-4 text-sm font-medium text-[#111518]">
                      Eye-Tracking Activity
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="layout-content-container flex w-[360px] flex-col">
            <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold text-[#111518]">Related Articles</h2>

            {[
              {
                title: 'Understanding Early Social Cues',
                author: 'Dr. Evelyn Reed',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuA4EGL9m1hTZrPwXIbijiHVOuyJQniLEqOceaRDFPvhsGIQpzvbioIm6gigkfqt--hwkfOowBU-Za4zLWXpVM_z1l0Ute6kw-uR7qk7dsKkZhMoaIKB7oX6a6CxSWfSg2mjF_aFFFuG8VOds6zdFvbN4hvsaBmZltg_4diz4ElzPolxmzaKHgpXQNOnqlO4krkEWHdgriKIdB6ImiRrF5_SpSAXGa2zbGu5zRCqtaYQRT8QgPQ_hpvEFWwD_MoV3EgwWoB4c7VX2NM',
              },
              {
                title: 'The Importance of Play in Development',
                author: 'Dr. Evelyn Reed',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuABo81ihp5-DVGdREEIM6gCF15r-_VdkbY-zc-GdF4xTDuJW8VYjf3OyAqO993HY4kGQLosMgYr1cZKM-3e7Ivo0zyDElqzDtUvXRxXYPZbLRfNrFH8RJr8nQeON3ojWP7m4wY8u0cv8xeiVaN9ZmBtdaEPBROF29BI6RdjDdpw-HGW4HZNl1BOjoF7iGmCvufKtantrpolc3iDhEiRFR9MuCkYw6BnZt3pdLCtR5EwdJSt2bTzX_9PP0kXHcLL6SaV_wDLBhniPJg',
              },
              {
                title: 'Nutrition for Optimal Brain Growth',
                author: 'Dr. Evelyn Reed',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuBLyFuRCa11uZ4yyhSl6L2lPIIu2eOg7GFchtXOde7TcUnTyWPKcI6BHKj7wWcv92thH3_nnWB1rxyiBSr58B5Ag7-rghahqLj-FJc08RDW2v4uevOyrNmX9UqDGhaOZlCRhHbF1igAzUZrI6gij_ryWiUfi-Tvwe0MuUcjeFhnZpevbu5zIr6ZTpw_mS6cNcYBnPzrU5pZj2mEEFocdDASXq8zFYNRSBI4J72UIdSKC1mAZ4fJZlL3NU6IzUaclJ422TynM_2CZTw',
              },
            ].map((article, i) => (
              <div className="p-4" key={i}>
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-col gap-1 flex-[2_2_0px]">
                    <p className="text-base font-bold text-[#111518]">{article.title}</p>
                    <p className="text-sm font-normal text-[#60798a]">{article.author}</p>
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
      </div>
    </div>
  );
}
