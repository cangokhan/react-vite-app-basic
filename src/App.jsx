import './App.css'
import { TransactionsProvider } from './context/TransactionsContext.jsx'
import AddTransactionForm from './components/AddTransactionForm/AddTransactionForm.jsx'
import TransactionList from './components/TransactionList/TransactionList.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Reports from './components/Reports/Reports.jsx'

function App() {
	return (
		<TransactionsProvider>
			<div className="min-h-screen w-full max-w-5xl mx-auto px-4 py-6 flex flex-col items-center gap-6">
				<h1 className="text-3xl font-bold tracking-tight">Gelir-Gider Takip Uygulaması</h1>
				<Dashboard />
				<AddTransactionForm />
				<TransactionList />
				<Reports />
			</div>
		</TransactionsProvider>
	)
}

export default App
