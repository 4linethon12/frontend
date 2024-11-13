// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // 로컬 스토리지 사용
import userReducer from './userSlice'; // userSlice 리듀서 임포트

const persistConfig = {
    key: 'root', // Redux persist의 키 설정
    storage, // 로컬 스토리지 사용
    whitelist: ['user'], // 필요한 상태만 저장 (옵션)
};  

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
    reducer: {
        user: persistedReducer, // user 리듀서를 persistedReducer로 설정
    },
    serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], 
    }
});

export const persistor = persistStore(store); // persistStore 설정
export default store;