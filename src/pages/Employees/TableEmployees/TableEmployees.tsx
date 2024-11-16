import {headerCells} from "../common/utils/tableHeaderCells";
import {Table} from "../../../widgets/Table/Table";
import {employees} from "../empl";
import {TableListCell} from "../../../widgets/Table/TableListCell/TableListCell";

import style from './TableEmployees.module.scss'

export const TableEmployees = () => {
    return (
        <Table headerCells={headerCells}>
            <tbody>
            {employees.map((employee) => (
                <tr key={employee.id}>
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
