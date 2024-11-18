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

export const initialState: IEmployeesState = {
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
                return {...state, filterValues: {...state.filterValues, role: action.payload.role}}
            } else {
                return {...state, filterValues: {...state.filterValues, isArchive: action.payload.isArchive}}
            }
        }
        case 'ADD_EMPLOYEE': {
            return {...state, employees: [action.employee, ...state.employees]}
        }
        case 'SELECT_EMPLOYEE_ID': {
            return {...state, selectEmployeeId: action.employeeId}
        }
        case "EDIT_EMPLOYEE": {
            const { employee } = action;
            return {
                ...state,
                employees: state.employees.map(emp =>
                    emp.id === employee.id ? { ...emp, ...employee } : emp
                ),
            }
        }
        default:
            return state;
    }
}

// ACTION CREATORS

export const addEmployee = (employee: IEmployee) => {
    return {
        type: 'ADD_EMPLOYEE',
        employee,
    } as const
}

export const editEmployee = (employee: IEmployee) => {
    return {
        type: 'EDIT_EMPLOYEE',
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

// TYPES

type IAddEmployee = ReturnType<typeof addEmployee>
type ISortEmployees = ReturnType<typeof sortEmployees>
type IFilterEmployees = ReturnType<typeof changeFilterEmployee>
type ISelectEmployeeId = ReturnType<typeof selectEmployeeId>
type IEditEmployee = ReturnType<typeof editEmployee>

type ActionsType =
    | IAddEmployee
    | ISortEmployees
    | IFilterEmployees
    | ISelectEmployeeId
    | IEditEmployee
