import axios from 'axios'
import { useEffect, useState } from 'react'
import Transaction from './Transaction/Transaction'
import './TransactionsUseDefi.css'
const TransactionsUseDefi = () => {

  const [fetchTransactions, setFetchTransactions] = useState([])


  useEffect(() => {
    getTransactions()
  },[])

  const getTransactions = async function() {
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
  }
  return (
    <div className='transactions-use-defi'>
      <div className='container'>
          <div className='transactions-container'>
            <div className='trn-header-text'>Your Transactions</div>
            {fetchTransactions.reverse().map((data) => {

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