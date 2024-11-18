import {TableEmployees} from "./TableEmployees/TableEmployees";
import {FilterBlock} from "./FilterBlock/FilterBlock";
import {useAppSelector} from "../../store/store";
import {selectEmployeeIdSelector} from "../../store/selectors/employeesSelector";
import {FormEmployee} from "./FormEmployee/FormEmloyee";

export const Employees = () => {
    const employeeId = useAppSelector(selectEmployeeIdSelector)
    console.log(employeeId)
    return (
        <section>
            <FilterBlock/>
            <TableEmployees/>
            {employeeId && <FormEmployee/>}
        </section>
    )
}
