import musicIcon from "/images/icon-music.svg";

function PlanSection() {
  return (
    <section className="p-4 tablet:p-6 bg-blue-50 rounded-[11px] flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <img src={musicIcon} alt="Music icon" className="h-12" />

        <div>
          <p className="font-black text-blue-950">Annual Plan</p>
          <p className="font-medium">$59.99/year</p>
        </div>
      </div>

      <button className="text-blue-700 font-bold cursor-pointer">Change</button>
    </section>
  )
}

export default PlanSection;