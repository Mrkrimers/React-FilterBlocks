import Search from "../components/Search/Search";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import storage from "../components/storage/storage.json"
import Pagination from "../components/Pagination/Pagination";

function JobPage() {

    return (
        <>
            <Search />

            <div className={style.wrapper}>
                {storage.map((el, index) =>
                    <Link to={`/vacancy/${el.id}`} key={index} >

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

            <Pagination />
        </>
    )
}

export default JobPage;