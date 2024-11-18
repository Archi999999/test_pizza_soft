import {Link} from "react-router-dom";

export const Error = () => {
    return(
        <>
            <h2>Данная страница не существует...</h2>
            <button>
                <Link to={'/'}>Вернуться на главную</Link>
            </button>
        </>
    )
}