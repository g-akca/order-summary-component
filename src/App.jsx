import SummaryCard from "./components/SummaryCard";

function App() {
  return (
    <div className="min-h-screen bg-blue-100 bg-[url('/images/pattern-background-mobile.svg')] desktop:bg-[url('/images/pattern-background-desktop.svg')] bg-no-repeat bg-size-[100%_auto] bg-top px-6 flex justify-center items-center text-base tablet:text-[16px] leading-base text-gray-600">
      <SummaryCard />
    </div>
  )
}

export default App;