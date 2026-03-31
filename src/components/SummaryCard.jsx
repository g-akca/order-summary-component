import heroImg from "/images/illustration-hero.svg";

import SummarySection from "./SummarySection";
import PlanSection from "./PlanSection";
import PaymentSection from "./PaymentSection";

function SummaryCard() {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden grow max-w-112.5">
      <img src={heroImg} alt="Illustration of someone listening to music" />

      <div className="p-6 flex flex-col gap-6">
        <SummarySection />
        <PlanSection />
        <PaymentSection />
      </div>
    </div>
  )
}

export default SummaryCard;