import CreditCard from "./components/CreditCard"
import IncomeCards from "./components/IncomeCards"
import PaymentMethod from "./components/PaymentMethod"
import Invoices from "./components/Invoices"
const BillingPage = () => {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-6 min-w-0">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <CreditCard />
            <IncomeCards />
          </div>
          <PaymentMethod />
        </div>
        <Invoices />
      </div>
      
    </div>
  )
}

export default BillingPage
