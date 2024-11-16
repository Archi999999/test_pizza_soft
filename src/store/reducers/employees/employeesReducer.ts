import {IEmployee, IRole} from "./types";
import initialState from './employees.json';

export const employeesReducer = (state: IEmployee[] = initialState, action: ActionsType): IEmployee[] => {
    switch (action.type) {
        case 'FILTER-BY-STATUS': {
            return [...state.filter(el => el.isArchive === action.status)];
        }
        case 'FILTER-BY-ROLE' : {
            return [...state.filter(el => el.role === action.role)];
        }
        case 'ADD_EMPLOYEE' : {
            return [action.employee, ...state]
        }
        default: return state;
    }
}

export const filterByStatus = (status: boolean) => {
    return {
        type: 'FILTER-BY-STATUS',
        status,
    } as const
}

export const filterByRole = (role: IRole) => {
    return {
        type: 'FILTER-BY-ROLE',
        role,
    } as const
}

export const addEmployee = (employee: IEmployee) => {
    return {
        type: 'ADD_EMPLOYEE',
        employee,
    } as const
}

export type IFilterByStatus = ReturnType<typeof filterByStatus>
export type IFilterByRole = ReturnType<typeof filterByRole>
export type IAddEmployee = ReturnType<typeof addEmployee>

type ActionsType = IFilterByStatus | IFilterByRole | IAddEmployee