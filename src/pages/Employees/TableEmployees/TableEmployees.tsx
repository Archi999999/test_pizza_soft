import {headerCells} from "../common/utils/tableHeaderCells";
import {Table} from "../../../widgets/Table/Table";
import {TableListCell} from "../../../widgets/Table/TableListCell/TableListCell";

import style from './TableEmployees.module.scss'
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {employeeSelector, filterValuesSelector} from "../../../store/selectors/employeesSelector";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {selectEmployeeId, sortEmployees} from "../../../store/reducers/employees/employeesReducer";

export const TableEmployees = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const sortField = searchParams.get('sortField')
    const sortType = searchParams.get('sortType')
    const employees = useAppSelector(employeeSelector)
    const filterValues = useAppSelector(filterValuesSelector)

    useEffect(() => {
        if (sortField && sortType)
        dispatch(sortEmployees({sortField, sortType}))
    }, [sortField, sortType]);

    let finalEmployees = employees

    // TODO need refactor(simplify)
    if (filterValues.isArchive !== undefined || filterValues.role !== undefined) {
        console.log(filterValues.role, filterValues.isArchive);
        finalEmployees = employees
            .filter(emp => filterValues.isArchive !== undefined ? emp.isArchive === filterValues.isArchive : true)
            .filter(emp => filterValues.role !== 'none' && filterValues.role !== undefined ? emp.role === filterValues.role : true)
    }

    const handlerEditEmployee = (employeeId: number) => {
        dispatch(selectEmployeeId(employeeId))
    }


    return (
        <Table headerCells={headerCells}>
            <tbody>
            {finalEmployees.map((employee) => (
                <tr key={employee.id} className={style.row} onClick={()=>handlerEditEmployee(employee.id)}>
                    <TableListCell data={employee.name} columnName={'name'}/>
                    <TableListCell data={employee.role} columnName={'role'} className={style.center}/>
                    <TableListCell data={employee.phone} columnName={'phone'} className={style.center}/>
                    <TableListCell data={employee.birthday} columnName={'birthday'} className={style.center}/>
                    <TableListCell data={<input type={'checkbox'} checked={employee.isArchive} readOnly/>}
                                   columnName={'isArchive'} className={style.center}/>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};
