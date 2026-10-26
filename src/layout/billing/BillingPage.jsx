import CreditCard from "./components/CreditCard"
import IncomeCards from "./components/IncomeCards"
import PaymentMethod from "./components/PaymentMethod"
import Invoices from "./components/Invoices"
const BillingPage = () => {
  return (
    <div>
      <CreditCard />
      <IncomeCards />
      <PaymentMethod />
      <Invoices />
    </div>
  )
}

export default BillingPage
