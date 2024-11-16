import arrow from '../../../assets/icons/arrow-sort.svg'
import {IColumn} from "../../../common/types/table";
import style from './TableHeaderCell.module.scss'
import {useSearchParams} from "react-router-dom";

export interface ITableHeaderCell {
    column: IColumn;
}

export const TableHeaderCell = ({column}: ITableHeaderCell) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const ascending = searchParams.get('sortBy');
    const sort = searchParams.get('sortField') ;

    const onChangeSortData = (sortValue?: string) => {
        if (sortValue === sort) {
            const sortBy = ascending === 'asc' ? 'desc' : 'asc';
            setSearchParams(`sortField=${sortValue}&sortBy=${sortBy}`)
        } else {
            setSearchParams(`sortField=${sortValue}&sortBy=asc`)
        }
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
