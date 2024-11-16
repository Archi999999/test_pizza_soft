import arrow from '../../../assets/icons/arrow-sort.svg'
import {IColumn} from "../../../common/types/table";
import style from './TableHeaderCell.module.scss'

export interface ITableHeaderCell {
    column: IColumn;
}

export const TableHeaderCell = ({column}: ITableHeaderCell) => {
    const onChangeSortData = (sortValue?: string) => {
        console.log(sortValue)
    }

    return (
        <th key={column.id} data-column={column.name} className={`no-select ${style.th}`}>
            {column.isSortable ? (
                <div
                    className={style.button_sort}
                    onClick={() => onChangeSortData(column.sortValue)}
                >
                    {column.name}
                    <img src={arrow} alt={'arrow sort'}/>
                </div>
            ) : (
                <div className={style.wrapper_head}>{column.name}</div>
            )}
        </th>
    );
};
