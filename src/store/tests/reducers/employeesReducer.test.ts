import {
    addEmployee,
    editEmployee,
    employeesReducer,
    initialState,
    selectEmployeeId,
    sortEmployees
} from "../../reducers/employees/employeesReducer";
import {IEmployee} from "../../reducers/employees/types";

describe('employeesReducerTest', () => {
    it('should add a new employee', () => {
        const newEmployee: IEmployee = {role: 'waiter', name: 'New Employee', id: 999, isArchive: false, birthday: '12.12.2002', phone: '+7999999999'}
        const newState = employeesReducer(initialState, addEmployee(newEmployee));
        expect(newState.employees.length).toBe(initialState.employees.length + 1);
        expect(newState.employees[0]).toEqual(newEmployee);
    });

    it('should edit employee details', () => {
        const employee = initialState.employees[0]
        const employeeToUpdate = {...employee, isArchive: !employee.isArchive};
        const newState = employeesReducer(initialState, editEmployee(employeeToUpdate));
        const updatedEmployee = newState.employees.find(emp => emp.id === employeeToUpdate.id);
        expect(updatedEmployee).toEqual(expect.objectContaining(employeeToUpdate));
        expect(employee.isArchive).not.toBe(updatedEmployee?.isArchive);
    });
    it('should sort employees by date in ascending order', () => {
        const sortActionPayload = { sortField: 'birthday', sortType: 'asc' };

        const newState = employeesReducer(initialState, sortEmployees(sortActionPayload));

        for (let i = 0; i < newState.employees.length - 1; i++) {
            const currentEmployee = newState.employees[i];
            const nextEmployee = newState.employees[i + 1];
            const currentEmployeeDate = new Date(currentEmployee.birthday.split('.').reverse().join('-'));
            const nextEmployeeDate = new Date(nextEmployee.birthday.split('.').reverse().join('-'));
            expect(currentEmployeeDate <= nextEmployeeDate).toBe(true);
        }
    });
    it('should select an employee by ID', () => {
        const employeeIdToSelect = 1;
        const newState = employeesReducer(initialState, selectEmployeeId(employeeIdToSelect));

        expect(newState.selectEmployeeId).toBe(employeeIdToSelect);
    });
});