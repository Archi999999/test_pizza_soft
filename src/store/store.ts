import {combineReducers, legacy_createStore as createStore} from "redux";
import {employeesReducer} from "./reducers/employees/employeesReducer";
import {useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
    employees: employeesReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()