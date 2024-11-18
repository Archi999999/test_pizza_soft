import {FormEmployee} from "../../../pages/Employees/FormEmployee/FormEmployee";
import {editEmployee, selectEmployeeId} from "../../../store/reducers/employees/employeesReducer";
import {useAppDispatch} from "../../../store/store";
import {IEmployee} from "../../../store/reducers/employees/types";

interface IEditEmployee {
    id: number
}

export const EditEmployee = ({id}: IEditEmployee) => {
    const dispatch = useAppDispatch();

    const handleCloseModal = () => {
        dispatch(selectEmployeeId(null))
    }

    const handleSubmit = (employee: IEmployee) => {
        dispatch(editEmployee(employee))
        dispatch(selectEmployeeId(null))
    }

    return (
        <FormEmployee id={id} title={'Edit Employee'} handleCloseModal={handleCloseModal} onSubmit={handleSubmit}/>
    );
};
