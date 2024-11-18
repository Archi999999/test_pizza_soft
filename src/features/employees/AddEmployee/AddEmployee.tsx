import iconAddEmployee from '../../../assets/icons/add_employee.svg'

import style from './AddEmployee.module.scss'
import {useState} from "react";
import {FormEmployee} from "../../../pages/Employees/FormEmployee/FormEmployee";

interface IAddEmployee {
    className?: string
}

export const AddEmployee = ({className}: IAddEmployee) => {
    const [showForm, setShowForm] = useState(false)

    const handleClick = () => {
        setShowForm(prev => !prev)
    }

    const handleSubmit = () => {

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
