import PropTypes from 'prop-types';
import { LineTable } from './transaction.styled';
export const Transaction = ({ type, amount, currency, id }) => {
  return (
    <>
      <LineTable>{type}</LineTable>
      <LineTable>{amount}</LineTable>
      <LineTable>{currency}</LineTable>
    </>
  );
};

Transaction.propTypes ={
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    id: PropTypes.string,
}