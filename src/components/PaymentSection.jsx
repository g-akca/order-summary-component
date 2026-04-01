function PaymentSection() {
  return (
    <section className="flex flex-col gap-6 tablet:gap-8">
      <button className="bg-blue-700 cursor-pointer text-white font-black rounded-[11px] h-12.5 shadow-[0_20px_20px_rgba(56,42,225,0.19)] transition-all hover:bg-purple-500">Proceed to Payment</button>

      <button className="self-center font-black cursor-pointer transition-all hover:text-blue-950">Cancel Order</button>
    </section>
  )
}

export default PaymentSection;