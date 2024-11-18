import {TableEmployees} from "./TableEmployees/TableEmployees";
import {FilterBlock} from "./FilterBlock/FilterBlock";
import {useAppSelector} from "../../store/store";
import {selectEmployeeIdSelector} from "../../store/selectors/employeesSelector";
import {AddEmployee} from "../../features/employees/AddEmployee/AddEmployee";
import {EditEmployee} from "../../features/employees/EditEmployee/EditEmployee";

import style from './Employees.module.scss'


export const Employees = () => {
    const employeeId = useAppSelector(selectEmployeeIdSelector)
    return (
        <section>
            <div className={style.top_block}>
                <FilterBlock/>
                <AddEmployee/>
            </div>
            <TableEmployees/>
            {employeeId && <EditEmployee id={employeeId}/>}
        </section>
    )
}
