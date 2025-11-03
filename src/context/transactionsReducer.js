export const TransactionActionTypes = {
	ADD_TRANSACTION: 'ADD_TRANSACTION',
	UPDATE_TRANSACTION: 'UPDATE_TRANSACTION',
	DELETE_TRANSACTION: 'DELETE_TRANSACTION',
	LOAD_FROM_STORAGE: 'LOAD_FROM_STORAGE',
};

export function transactionsReducer(state, action) {
	switch (action.type) {
		case TransactionActionTypes.LOAD_FROM_STORAGE: {
			return Array.isArray(action.payload) ? action.payload : state;
		}
		case TransactionActionTypes.ADD_TRANSACTION: {
			return [action.payload, ...state];
		}
		case TransactionActionTypes.UPDATE_TRANSACTION: {
			return state.map((t) => (t.id === action.payload.id ? { ...t, ...action.payload } : t));
		}
		case TransactionActionTypes.DELETE_TRANSACTION: {
			return state.filter((t) => t.id !== action.payload.id);
		}
		default:
			return state;
	}
}
