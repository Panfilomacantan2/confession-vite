import React, { useContext, createContext, useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

const addToStorageContext = createContext();

const addToStorageProvider = ({ children }) => {
	const [confessionsLength, setConfessionsLength] = useState(0);

	const [confessionsData, setConfessionsData] = useState([]);

	useEffect(() => {

        let LS = localStorage.getItem('confessions');
		fetch('http://localhost:8080/api/posts')
			.then((res) => res.json())
			.then((data) => {
                if (LS) {
                    localStorage.setItem('confessions', JSON.stringify(data));
                }
                
				return setConfessionsData(data);
			})
			.catch((error) => {
				console.log({ error });
			});
	}, [confessionsData]);

	return <addToStorageContext.Provider value={{ confessionsLength, confessionsData }}>{children}</addToStorageContext.Provider>;
};
const useStorage = () => {
	const context = useContext(addToStorageContext);

	if (!context) {
		throw new Error('useModal must be used within a addToStorageProvider');
	}

	return context;
};

export { addToStorageProvider, useStorage };
