import {ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {IRole} from "../../../store/reducers/employees/types";
import {changeFilterEmployee} from "../../../store/reducers/employees/employeesReducer";

import style from './FilterBlock.module.scss'
import {filterValuesSelector} from "../../../store/selectors/employeesSelector";

export const FilterBlock = () => {
    const {role, isArchive} = useAppSelector(filterValuesSelector)

    const dispatch = useAppDispatch();

    const handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeFilterEmployee({role: event.target.value as IRole}))
    };

    const handleFilterStatus = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeFilterEmployee({isArchive: event.target.checked}))
    }

    const handleResetFilters = () => {
        dispatch(changeFilterEmployee({isArchive: undefined}))
        dispatch(changeFilterEmployee({role: 'none'}))
    };

    return (
        <div className={style.filter_block}>
            <select id="filter-select" value={role} onChange={handleChangeOption}>
                <option value="none">Выберите должность</option>
                <option value="cook">Повар</option>
                <option value="waiter">Официант</option>
                <option value="driver">Водитель</option>
            </select>
            <label className={'no-select'}>
                в архиве
                <input type={'checkbox'} checked={!!isArchive} onChange={handleFilterStatus}/>
            </label>
            <button onClick={handleResetFilters}>сбросить фильтры</button>
        </div>
    );
};
