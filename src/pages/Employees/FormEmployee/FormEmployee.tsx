import {Modal} from "../../../shared/Modal/Modal";
import {useAppSelector} from "../../../store/store";
import {InputMask} from '@react-input/mask';
import {getEmployeeByIdSelector} from "../../../store/selectors/employeesSelector";
import {ChangeEvent, FormEvent, useState} from "react";
import {IEmployee} from "../../../store/reducers/employees/types";
import {generateNumberId} from "../common/utils/generateNumberId";
import style from './FormEmployee.module.scss'
import {validateFormEmployee} from "../common/utils/validateFormEmployee";

interface IFormEmployee {
    id?: number
    title: string
    handleCloseModal: () => void
    onSubmit: (employee: IEmployee) => void
}

export const FormEmployee = ({id, title, handleCloseModal, onSubmit}: IFormEmployee) => {
    const employee = useAppSelector((state)=>getEmployeeByIdSelector(state, id));
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: employee?.name || '',
        phone: employee?.phone || '',
        birthday: employee?.birthday || '',
        role: employee?.role || 'none',
        isArchive: employee?.isArchive || false,
    });

    const handleChangeFormInputs = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFormData(prevState => ({ ...prevState, role: e.target.value }));
    };

    const handleCheckboxChange = () => {
        setFormData(prevState => ({ ...prevState, isArchive: !prevState.isArchive }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const employee = {...formData, id: id || generateNumberId()}

        const validationError = validateFormEmployee(employee);
        if (validationError) {
            setError(validationError);
            return;
        }

        setError(null);

        onSubmit(employee);
    }

    return (
        <Modal onClose={handleCloseModal} title={title}>
            <form className={style.form} onSubmit={handleSubmit}>
                {error && <div className={style.error}>{error}</div>}
                <label className={style.label}>
                    Имя сотрудника
                    <input     type={'text'}
                               placeholder={'Имя Фамилия'}
                                name="name"
                               className={style.input_mask}
                               value={formData.name}
                               onChange={handleChangeFormInputs}/>
                </label>
                <label className={style.label}>
                    Телефон
                    <InputMask mask={'+7 (___) ___-____'}
                               showMask replacement={{_: /\d/}}
                               required defaultValue={employee?.phone}
                               name="phone"
                               className={style.input_mask}
                               onChange={handleChangeFormInputs}/>
                </label>
                <label className={style.label}>
                    Дата рождения
                    <InputMask mask={'dd.mm.yyyy'} showMask replacement={{d: /\d/, m: /\d/, y: /\d/}} separate
                               defaultValue={employee?.birthday}
                               className={style.input_mask}
                               name="birthday"
                               required
                               onChange={handleChangeFormInputs}/>
                </label>
                <label className={style.label}>
                    Должность
                    <select id="form-edit-select"
                            defaultValue={employee?.role}
                            onChange={handleSelectChange}
                            className={style.select}
                    >
                        <option value="none">Выберите должность</option>
                        <option value="cook">Повар</option>
                        <option value="waiter">Официант</option>
                        <option value="driver">Водитель</option>
                    </select>
                </label>

                <label className={'no-select'}>
                    в архиве
                    <input type={'checkbox'}
                           checked={formData.isArchive}
                           onChange={handleCheckboxChange}/>
                </label>
                <button type={'submit'}>Сохранить</button>
            </form>
        </Modal>
    );
};
