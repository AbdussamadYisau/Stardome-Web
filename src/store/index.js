import React, { 
	useState, 
	createContext,
	useCallBack,
	useEffect
} from 'react';

import ls, { set, get } from "local-storage";

export const StoreContext = createContext(undefined);

export default function StoreProvider({ children }) {

	const [userData, setUserData] = useState({})
	const[token, setToken] = useState(ls.get('token'))

	const updateUserData = useCallBack((updateUserDataObject) => {
		setUserData({ ...userData, ...updateUserDataObject })
	})

	const updateToken = useCallBack((token) => {
		setToken(token)
	})

	useEffect(() => {
		let localToken = ls.get('token');

		if(localToken) {
			updateToken(localToken)
		}
	}, [])

	useEffect(() => {
		ls.set('token', token)
	}, [token])

	useEffect(() => {
		if(userData && userData.id) {
			ls.set("userData", userData);
		}
	}, [userData])

	return (
		<StoreContext.Provider value={{
			token,
			updateToken,
			userData,
			updateUserData
		}}>
			{children}
		</StoreContext.Provider>

	)
}