import './App.css'
import { TransactionsProvider } from './context/TransactionsContext.jsx'
import AddTransactionForm from './components/AddTransactionForm/AddTransactionForm.jsx'
import TransactionList from './components/TransactionList/TransactionList.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Reports from './components/Reports/Reports.jsx'

function App() {
	return (
		<TransactionsProvider>
			<div className="min-h-screen w-full mx-auto px-4 md:px-6 py-5 flex flex-col items-center gap-6 sm:gap-8 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
				<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center">Gelir-Gider Takip Uygulaması</h1>
				<Dashboard />
				<AddTransactionForm />
				<TransactionList />
				<Reports />
			</div>
		</TransactionsProvider>
	)
}

export default App
