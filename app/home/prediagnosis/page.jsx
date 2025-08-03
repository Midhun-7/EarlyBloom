"use client";
import ConcernCardsSection from "../../../components/ConcernCardsSection";

export default function Diagnosis() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Page content placeholder */}
        <main className="flex flex-1 justify-center px-40 py-5">
          <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
            {/* You can modularize these sections: */}
            <ConcernCardsSection />
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
                <a className="text-base font-normal text-[#637888]" href="#">
                  Privacy Policy
                </a>
                <a className="text-base font-normal text-[#637888]" href="#">
                  Terms of Service
                </a>
                <a className="text-base font-normal text-[#637888]" href="#">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
