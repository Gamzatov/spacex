import React, { FC } from "react";
import { IResponse } from "../../types";
import StartItem from '../../components/StartItem/StartItem'
import { Link } from "react-router-dom";
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
            {active && <Popup active={active} togglePop={togglePop} />}
        </div>
    )
}
export default Home;