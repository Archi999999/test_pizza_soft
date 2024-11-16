import { FC, ReactNode } from 'react';
import style from './TableListCell.module.scss'

interface ITableListCell<T> {
    columnName?: string;
    data: T;
    className?: string;
}

export const TableListCell: FC<ITableListCell<ReactNode | string>> = (
    {
        columnName,
        data,
        className,
    }) => {
    return (
        <td className={`${style.cell} ${className}`} data-column={columnName}>
            {data}
        </td>
    );
};