import {IEmployee, IRole} from "./types";
import employees from './employees.json';

export interface IFilterValues {
    role?: IRole;
    isArchive?: boolean;
}

export interface IEmployeesState {
    employees: IEmployee[];
    filterValues: IFilterValues;
    selectEmployeeId: number | null;
}

const initialState: IEmployeesState = {
    employees: employees,
    filterValues: {},
    selectEmployeeId: null,
}

export const employeesReducer = (state: IEmployeesState = initialState, action: ActionsType): IEmployeesState => {
    switch (action.type) {
        case 'SORT_EMPLOYEES' : {
            const {sortField, sortType} = action.payload;

            const sortedEmployees = [...state.employees].sort((a, b) => {
                const aValue = sortField === 'name' ? a.name : new Date(a.birthday.split('.').reverse().join('-'));
                const bValue = sortField === 'name' ? b.name : new Date(b.birthday.split('.').reverse().join('-'));

                if (sortType === 'asc') {
                    return aValue > bValue ? 1 : -1;
                } else {
                    return aValue < bValue ? 1 : -1;
                }
            });
            return {...state, employees: sortedEmployees};
        }
        case "FILTER_EMPLOYEES": {
            if (action.payload.role) {
                console.log('if')
                return {...state, filterValues: {...state.filterValues, role: action.payload.role}}
            } else {
                console.log('isArchive', action.payload.isArchive)
                return {...state, filterValues: {...state.filterValues, isArchive: action.payload.isArchive}}
            }
        }
        case 'ADD_EMPLOYEE': {
            return {...state, employees: [action.employee, ...state.employees]}
        }
        case 'SELECT_EMPLOYEE_ID': {
            return {...state, selectEmployeeId: action.employeeId}
        }
        default:
            return state;
    }
}

export const addEmployee = (employee: IEmployee) => {
    return {
        type: 'ADD_EMPLOYEE',
        employee,
    } as const
}

export const sortEmployees = (payload: { sortField: string, sortType: string }) => {
    return {
        type: 'SORT_EMPLOYEES',
        payload,
    } as const
}

export const changeFilterEmployee = (payload: { role?: IRole, isArchive?: boolean }) => {
    return {
        type: 'FILTER_EMPLOYEES',
        payload,
    } as const
}

export const selectEmployeeId = (employeeId: number | null) => {
    return {
        type: 'SELECT_EMPLOYEE_ID',
        employeeId,
    } as const
}

export type IAddEmployee = ReturnType<typeof addEmployee>
export type ISortEmployees = ReturnType<typeof sortEmployees>
export type IFilterEmployees = ReturnType<typeof changeFilterEmployee>
export type ISelectEmployeeId = ReturnType<typeof selectEmployeeId>

type ActionsType =
    | IAddEmployee
    | ISortEmployees
    | IFilterEmployees
    | ISelectEmployeeId