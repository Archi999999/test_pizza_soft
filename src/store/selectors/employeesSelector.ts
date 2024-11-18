import {RootState} from "../store";
import {IEmployee} from "../reducers/employees/types";
import {IFilterValues} from "../reducers/employees/employeesReducer";

export const employeeSelector = (state: RootState): IEmployee[] => state.employees.employees

export const filterValuesSelector = (state: RootState): IFilterValues => state.employees.filterValues

export const selectEmployeeIdSelector = (state: RootState): number | null => state.employees.selectEmployeeId