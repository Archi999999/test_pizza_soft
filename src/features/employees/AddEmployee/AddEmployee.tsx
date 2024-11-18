import {useState} from "react";

import iconAddEmployee from '../../../assets/icons/add_employee.svg'
import {FormEmployee} from "../../../pages/Employees/FormEmployee/FormEmployee";
import {IEmployee} from "../../../store/reducers/employees/types";
import {useAppDispatch} from "../../../store/store";
import {addEmployee} from "../../../store/reducers/employees/employeesReducer";

import style from './AddEmployee.module.scss'

export const AddEmployee = () => {
    const dispatch = useAppDispatch();
    const [showForm, setShowForm] = useState(false)

    const handleClick = () => {
        setShowForm(prev => !prev)
    }

    const handleSubmit = (newEmployee: IEmployee) => {
        dispatch(addEmployee(newEmployee))
        setShowForm(false)
    }

    return (
        <>
            <button className={style.btn_add_employee}>
                <img src={iconAddEmployee} alt={'add employee'} onClick={handleClick}/>
            </button>
            {showForm && <FormEmployee title={'Add Employee'} handleCloseModal={handleClick} onSubmit={handleSubmit}/>}
        </>
    );
};
