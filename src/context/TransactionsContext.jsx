import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { transactionsReducer } from './transactionsReducer.js'
import { loadTransactions, saveTransactions } from '../services/storage.js'

const TransactionsContext = createContext(null)

export function TransactionsProvider({ children }) {
	const [transactions, dispatch] = useReducer(transactionsReducer, [], () => loadTransactions())

	useEffect(() => {
		saveTransactions(transactions)
	}, [transactions])

	const value = useMemo(() => ({ transactions, dispatch }), [transactions])
	return (
		<TransactionsContext.Provider value={value}>{children}</TransactionsContext.Provider>
	)
}

export function useTransactionsContext() {
	const ctx = useContext(TransactionsContext)
	if (!ctx) {
		throw new Error('useTransactionsContext must be used within TransactionsProvider')
	}
	return ctx
}
