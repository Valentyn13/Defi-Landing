import axios from 'axios'
import { useState } from 'react'
import Transaction from './Transaction/Transaction'
import './TransactionsUseDefi.css'
const TransactionsUseDefi = () => {

  const [fetchTransactions, setFetchTransactions] = useState([])

  const getTransactions = async () => {
    try {
      await axios.get('/api/swap/getTransactions').then((response) => {
        if (response.status === 200) {
          const data = response.data
          setFetchTransactions(data)
        }
      })
    } catch (error) {
      console.log(error)
    }
    console.log(fetchTransactions)
  }
  return (
    <div className='transactions-use-defi'>
      <div className='container'>
          <div className='transactions-container'>
            <button onClick={getTransactions}>get transactions</button>
            {fetchTransactions.map((data) => {

              return (
                <Transaction key={data._id} transaction={data}/>
              )
            })}
          </div>
      </div>
    </div>

  )
}

export default TransactionsUseDefi