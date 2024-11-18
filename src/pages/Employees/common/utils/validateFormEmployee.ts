import {IEmployee} from "../../../../store/reducers/employees/types";

export const validateFormEmployee = (employee: IEmployee): string | null => {
    if (employee.name.length < 5) {
        return "Имя должно быть не менее 5 символов.";
    }
    const phoneNumber = employee.phone.replace(/\D/g, '')
    if (phoneNumber.length < 11) {
        return "Телефон обязателен.";
    }
    const regexDate = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/;

    if (!regexDate.test(employee.birthday)) {
        return 'Введите корректную дату'
    }

    if (employee.role === 'none') {
        return 'Выберите должность'
    }

    return null
}