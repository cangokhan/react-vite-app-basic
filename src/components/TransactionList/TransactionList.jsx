import { useTransactions } from '../../hooks/useTransactions.js'
import { formatAmount, formatDate } from '../../utils/formatters.js'

export default function TransactionList() {
	const { transactions, deleteTransaction } = useTransactions()

	if (!transactions.length) {
		return <p className="text-sm text-neutral-400">Henüz kayıt yok.</p>
	}

	return (
		<ul className="w-full max-w-3xl">
			{transactions.map((t) => (
				<li key={t.id} className="flex items-center gap-3 justify-between py-3 px-3 rounded-lg border border-neutral-800 bg-neutral-900/40 shadow-sm mb-2">
					<div className="flex min-w-0 flex-col sm:flex-row sm:items-center sm:gap-3">
						<span className="text-xs sm:text-sm text-neutral-400 whitespace-nowrap">{formatDate(t.date)}</span>
						<span className="truncate">{t.category}{t.note ? ` - ${t.note}` : ''}</span>
					</div>
					<div className="flex items-center gap-3">
						<span className={`text-right font-semibold ${t.type === 'income' ? 'text-emerald-400' : 'text-rose-400'}`}>
							{t.type === 'income' ? '+' : '-'}{formatAmount(t.amount)}
						</span>
						<button aria-label="Sil" className="rounded-md border border-neutral-700 px-3 py-1 text-sm hover:bg-neutral-800" onClick={() => deleteTransaction(t.id)}>Sil</button>
					</div>
				</li>
			))}
		</ul>
	)
}
