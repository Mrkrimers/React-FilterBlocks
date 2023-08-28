import Search from "../components/Search/Search";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

function JobPage() {
    const arr = [{ header: "Менеджер-дизайнер", salary: "з/п от 70000 rub", city: "Новый Уренгой", time: "Полный рабочий день" },
    { header: "Ведущий графический дизайнер НЕ УДАЛЕННО", salary: "з/п от 80000 rub", city: "Москва", time: "Полный рабочий день" },
    { header: "Работник декорации, дизайнер (ТЦ Амбар)", salary: "з/п 29000 rub", city: "Самара", time: "Сменный график работы" },
    { header: "Менеджер-дизайнер", salary: "з/п 55000 - 95000 rub", city: "Тюмень", time: "Полный рабочий день" }]

    return (
        <>
            <Search />

            <div className={style.wrapper}>
                {arr.map((el, index) =>
                    <Link to={`/vacancy/${el.header}`} key={index} >

                        <div className={style.item}>

                            <h3>{el.header}</h3>

                            <div className={style.flex}>
                                <p className={style.salary}>{el.salary}</p>
                                <p className={style.dot}>•</p>
                                <p className={style.time}>{el.time}</p>
                            </div>

                            <div className={style.flex}>
                                <div className={style.icon}></div>
                                <p className={style.name}>{el.city}</p>
                            </div>

                        </div>


                    </Link>

                )}
            </div >
        </>
    )
}

export default JobPage;