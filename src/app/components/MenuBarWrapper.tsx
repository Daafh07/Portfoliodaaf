"use client";

import MenuBar from "../../imports/MenuBar/MenuBar";

const contactButtonInset = "inset-[15.05%_4.94%_13.98%_52.23%]";
const middleIconInset = "inset-[15.05%_51.93%_13.98%_28.49%]";
const leftIconInset = "inset-[15.05%_75.67%_13.98%_4.75%]";

export default function MenuBarWrapper() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWork = () => {
    const workSection = document.getElementById("work-section");

    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative size-full">
      <MenuBar />

      <button
        aria-label="Ga naar contact"
        className={`absolute ${contactButtonInset} cursor-pointer rounded-[25px] border-none bg-transparent p-0`}
        onClick={scrollToContact}
        type="button"
      />

      <button
        aria-label="Ga naar work"
        className={`absolute ${middleIconInset} cursor-pointer rounded-[25px] border-none bg-transparent p-0`}
        onClick={scrollToWork}
        type="button"
      />

      <button
        aria-label="Ga naar boven"
        className={`absolute ${leftIconInset} cursor-pointer rounded-[25px] border-none bg-transparent p-0`}
        onClick={scrollToTop}
        type="button"
      />
    </div>
  );
}
