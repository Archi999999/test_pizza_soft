import {TableHeaderCell} from "./TableHeaderCell/TableHeaderCell";
import {IColumn} from "../../common/types/table";
import {ReactNode} from "react";
import style from "./Table.module.scss"

interface ITable {
    className?: string
    headerCells: IColumn[]
    children: ReactNode
}

export const Table = ({className, headerCells, children}: ITable) => {
    return (
        <table className={`${style.table} ${className}`}>
            <thead>
            <tr>
                {headerCells.map(column => (
                    <TableHeaderCell column={column} key={column.id}/>
                ))}
            </tr>
            </thead>
                {children}
        </table>
);
};
