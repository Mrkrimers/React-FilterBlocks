import { useParams } from "react-router-dom"
import storage from "../../components/storage/storage.json"
import { useEffect, useState } from "react"
import style from "./vacancy.module.scss"

function VacancyPage() {
    const { id } = useParams();
    const [cart, setCart] = useState({ responsibilities: [], requirements: [], conditions: [] });

    function filtered() {
        const res = storage.filter((el) => el.id == id)

        setCart(res[0]);
    }

    useEffect(() => {
        filtered()
    }, [])

    return (
        <>
            <div className={style.item}>

                <h3>{cart.header}</h3>

                <div className={style.flex}>
                    <p className={style.salary}>{cart.salary}</p>
                    <p className={style.dot}>•</p>
                    <p className={style.time}>{cart.time}</p>
                </div>

                <div className={style.flex}>
                    <div className={style.icon}></div>
                    <p className={style.name}>{cart.city}</p>
                </div>

            </div>

            <div className={style.wrapper}>
                <h3>Обязанности:</h3>

                <ul>
                    {cart.responsibilities.map((el, index) => <li key={index}>{el}</li>)}
                </ul>

                <h3>Требования:</h3>

                <ul>
                    {cart.requirements.map((el, index) => <li key={index}>{el}</li>)}
                </ul>

                <h3>Условия:</h3>

                <ul>
                    {cart.conditions.map((el, index) => <li key={index}>{el}</li>)}
                </ul>
            </div>
        </>
    )
}

export default VacancyPage;