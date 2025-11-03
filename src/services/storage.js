const STORAGE_KEY = 'transactions';

export function loadTransactions() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch (e) {
		return [];
	}
}

export function saveTransactions(transactions) {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
	} catch (e) {
		// ignore
	}
}
