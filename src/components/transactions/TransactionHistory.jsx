import { Transaction } from "components/Transaction/Transaction";
import { TransactionTable } from "./TransactionHistory.styled";

export const TransactionHistory = props => (
<TransactionTable className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {props.items.map(row=>{
        return(
            <tr key={row.id}>
                <Transaction type={row.type} amount={row.amount} currency={row.currency} id={row.id} />
            </tr>
        )
    })}
  </tbody>
</TransactionTable>
)