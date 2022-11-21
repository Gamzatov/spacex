import React, { FC } from "react";
import { IResponse } from "../../types";
import StartItem from '../../components/StartItem/StartItem'
import { Link, useNavigate } from "react-router-dom";
import Popup from "../../components/Popup/Popup";


interface IHome {
    active?: boolean;
    togglePop: Function;
    isLoading?: boolean;
    response?: IResponse[];
}

const Home: FC<IHome> = ({ isLoading, response, active, togglePop }) => {
    const [searchValue, setSearchValue] = React.useState('');
    const onChangeSearchValue = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
        console.log('text', searchValue)
    };
    const navigate = useNavigate();
    const closePopup = () => {
        togglePop()
        navigate(-1)
    }

    return (
        <div className="grid_box">
            <div className="search_wrapper">
                <input
                    value={searchValue}
                    onChange={onChangeSearchValue}
                    type="text"
                    placeholder="Search by rocket name" />
            </div>
            {
                isLoading ? 'LOADING' : <div className="main_wrapper">

                    {
                        response?.filter((obj) => {
                            const valueSearch = obj?.name?.toLowerCase();
                            if (valueSearch?.includes(searchValue.toLowerCase())) {
                                return true
                            }
                        }).map((el: IResponse) => (
                            <Link key={el.id} to={`/launches/${el.id}`} onClick={() => togglePop()}>
                                <StartItem
                                    date_local={el.date_local}
                                    links={el.links}
                                    name={el.name}
                                    active={active}
                                />
                            </Link>))
                    }
                </div>
            }
            {active &&
                <div className="overlay">
                    <div className='back_btn_wrapper'>
                        <button className='backBtn' onClick={closePopup}>X</button>
                    </div>
                    <Popup active={active} />
                </div>}
        </div>
    )
}
export default Home;