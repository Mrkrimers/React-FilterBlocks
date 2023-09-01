import Search from "../components/Search/Search";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import storage from "../components/storage/storage.json"
import { useState } from 'react';
import { Pagination } from '@mantine/core';

function JobPage() {

    const [currentPage, setCurrentPage] = useState(1);

    const size = 2;
    const LInd = currentPage * size;
    const FInd = LInd - size;
    const curCart = storage.slice(FInd, LInd)
    console.log(curCart);

    // const change = (event, value) => {
    //     console.log(value);
    //     setCurrentPage(value);
    // }


    return (
        <>
            <Search />

            <div className={style.wrapper}>
                {curCart.map((el, index) =>
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


            <Pagination
                total={Math.ceil(storage.length / size)}
                position="center"
                style={{ marginTop: "40px" }}
                onChange={setCurrentPage}
                value={currentPage}
            />
        </>
    )
}

export default JobPage;