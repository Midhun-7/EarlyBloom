'use client'

import React from "react";
import ConcernCardsSection from "../../components/ConcernCardsSection";

export default function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-solid border-b-[#f0f3f4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111518]">
            <div className="size-4">
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
            <h2 className="text-lg font-bold tracking-[-0.015em] text-[#111518] leading-tight">Early Bloom</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              {["Home", "About Us", "Blogs", "Assessment"].map((text) => (
                <a key={text} href="#" className="text-sm font-medium text-[#111518] leading-normal">
                  {text}
                </a>
              ))}
            </div>
            <button className="flex h-10 items-center justify-center overflow-hidden rounded-xl bg-[#f0f3f4] px-2.5 text-sm font-bold tracking-[0.015em] text-[#111518]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z" />
              </svg>
            </button>
            <div
              className="size-10 rounded-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBopj_bhsXGsnoYgWzv_UH5AawEMSBmfd2zkPK4pPbquJbK3ukGjEpczUDyhjRYofJFrarRLp_T8gBg60wLsSS54icBFh6-X0qa-WyVQtyGHlhGhAhmK6vlptjhVCiBQWhmtfOdYqXvb3r_yxfqQKm1kZvhjK7EMKHQm7km5-8kXCYKvpkENDNoywRbS6oRlsxDxd8_rFpjNq07C-YWHv4JQpN2-j_WDDVnln0GqDAF5xzl2V66eOT3OH1qLhD1JQv9ZulGtFtpdPo")',
              }}
            ></div>
          </div>
        </header>

        {/* Page content placeholder */}
        <main className="flex flex-1 justify-center px-40 py-5">
          <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
            <div>Card</div>
            {/* You can modularize these sections: */}
            {/* <ConcernCardsSection></ConcernCardsSection> */}
            {/* <FamilyHistoryCTA /> */}
            {/* <InteractiveActivities /> */}
            {/* <ProgressReportCTA /> */}
            {/* Each of those can be a separate component in /components */}
            {/* You may paste or extract that content from your full HTML accordingly */}
            
          </div>
        </main>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <div className="flex flex-col gap-6 px-5 py-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-6 md:flex-row md:justify-around">
                <a className="text-base font-normal text-[#637888]" href="#">Privacy Policy</a>
                <a className="text-base font-normal text-[#637888]" href="#">Terms of Service</a>
                <a className="text-base font-normal text-[#637888]" href="#">Contact Us</a>
              </div>
              <p className="text-base font-normal text-[#637888]">© 2024 Early Bloom. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}