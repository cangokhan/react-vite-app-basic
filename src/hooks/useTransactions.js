import { useMemo } from 'react'
import { useTransactionsContext } from '../context/TransactionsContext.jsx'
import { TransactionActionTypes } from '../context/transactionsReducer.js'

export function useTransactions() {
	const { transactions, dispatch } = useTransactionsContext()

	const totals = useMemo(() => {
		let income = 0
		let expense = 0
		for (const t of transactions) {
			if (t.type === 'income') income += t.amount
			else if (t.type === 'expense') expense += t.amount
		}
		return { income, expense, net: income - expense }
	}, [transactions])

	function addTransaction(tx) {
		dispatch({ type: TransactionActionTypes.ADD_TRANSACTION, payload: tx })
	}
	function deleteTransaction(id) {
		dispatch({ type: TransactionActionTypes.DELETE_TRANSACTION, payload: { id } })
	}
	function updateTransaction(tx) {
		dispatch({ type: TransactionActionTypes.UPDATE_TRANSACTION, payload: tx })
	}

	return { transactions, totals, addTransaction, deleteTransaction, updateTransaction }
}
