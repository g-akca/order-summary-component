function PaymentSection() {
  return (
    <section className="flex flex-col gap-6 tablet:gap-8">
      <button className="bg-blue-700 text-white font-black rounded-[11px] h-12.5 shadow-[0_20px_20px_rgba(56,42,225,0.19)]">Proceed to Payment</button>

      <button className="self-center font-black">Cancel Order</button>
    </section>
  )
}

export default PaymentSection;