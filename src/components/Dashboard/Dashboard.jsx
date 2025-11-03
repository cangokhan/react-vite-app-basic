import { useTransactions } from '../../hooks/useTransactions.js'
import { formatAmount } from '../../utils/formatters.js'

export default function Dashboard() {
	const { totals } = useTransactions()
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
			<div className="rounded-xl border border-neutral-800 bg-neutral-900/60 shadow-md p-4 flex flex-col justify-between">
				<div className="text-sm text-emerald-400">Gelir</div>
				<div className="text-2xl font-bold">{formatAmount(totals.income)}</div>
			</div>
			<div className="rounded-xl border border-neutral-800 bg-neutral-900/60 shadow-md p-4 flex flex-col justify-between">
				<div className="text-sm text-rose-400">Gider</div>
				<div className="text-2xl font-bold">{formatAmount(totals.expense)}</div>
			</div>
			<div className="rounded-xl border border-neutral-800 bg-neutral-900/60 shadow-md p-4 flex flex-col justify-between">
				<div className="text-sm">Net</div>
				<div className={`text-2xl font-bold ${totals.net >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{formatAmount(totals.net)}</div>
			</div>
		</div>
	)
}
