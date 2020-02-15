import React from 'react';
import axios from 'axios'
import LedgerItem from '../Components/ledgerItem'


class RippleAPI extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          transactions : [],
          next_ledger_index : 53438262,
          ledger_index: 1,
      };
  }

  componentDidMount = () => {
    this.timerID = setInterval(
      () => this.getLedgerInfo(),
      3800)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getLedgerInfo = () => {
      axios.get(`https://data.ripple.com/v2/ledgers/${this.state.next_ledger_index}?transactions=true&binary=false&expand=true`)
    .then((response) => {
      const transactions = response.data.ledger.transactions
      console.log(transactions)
      transactions.map(transaction => {
        transaction.tx.TransactionType == 'Payment' &&  typeof transaction.tx.Amount == 'string' ? transaction.currency = 'XRP'
        : transaction.tx.TransactionType == 'Payment' ? transaction.currency = transaction.tx.Amount.currency
        : transaction.tx.TransactionType == 'OfferCreate' && typeof transaction.tx.TakerPays == 'object' ? transaction.currency = transaction.tx.TakerPays.currency 
        : transaction.tx.TransactionType == 'OfferCreate' && typeof transaction.tx.TakerGets == 'object' ? transaction.currency = transaction.tx.TakerGets.currency
        : transaction. currency = 'none'
      transaction.tx.TransactionType == 'Payment' &&  typeof transaction.tx.Amount == 'string' ? transaction.amount = transaction.tx.Amount/(1000000) 
      : transaction.tx.TransactionType == 'Payment' ? transaction.amount = transaction.tx.Amount.value
      : transaction.tx.TransactionType == 'OfferCreate' && typeof transaction.tx.TakerPays == 'object' ? transaction.amount = transaction.tx.TakerPays.value 
        : transaction.tx.TransactionType == 'OfferCreate' && typeof transaction.tx.TakerGets == 'object' ? transaction.amount = transaction.tx.TakerGets.value
        : transaction. currency = 'none'
        transaction.result = transaction.meta.TransactionResult
      })
      const ledger_index = response.data.ledger.ledger_index
      const next_ledger_index = ledger_index + 1
      this.setState({next_ledger_index})
      this.setState({ ledger_index})
      console.log(response.data.ledger.transactions)
      this.setState({transactions})
      this.state.transactions.map(item =>
        console.log(item.tx.TransactionType))
    }).catch(error =>{
        console.log(error)
    });

  }

  

  render() {
    return (
      <div>
        <div className = " titulo p-3 mb-5">
        <h3>Ledger: {this.state.ledger_index}       Number of transactions: {this.state.transactions.length}</h3>
        </div>
        <div className = "container shadow-none p-3 mb-5 bg-light rounded">
          <div className = "row">
        { this.state.transactions.map(transaction => <div className="col-2">
          <LedgerItem
          transactionType ={transaction.tx.TransactionType} 
          amount =  {transaction.amount}
          currency = {transaction.currency} 
          result = {transaction.result} />
          </div>)}
          </div>
          </div>
             </div>
    );
  }
}

export default RippleAPI;




