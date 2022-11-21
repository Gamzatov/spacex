import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { IResponse } from '../../types'
import StartItem from '../StartItem/StartItem';
import { useParams, useNavigate } from 'react-router-dom'
interface IPop {
  active?: boolean;
  togglePop?: Function;
  isLoading?: boolean;
  response?: IResponse[];
  id?: string;
  children?: React.ReactNode;
  setActive?: Function

}

const Popup: FC<IPop> = ({
  children,
  response,
  togglePop,
  setActive,
  active
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (<>
    <div className='pop_wrapper'>
      {
        response?.filter(el => el.id == id).map((el) => <div key={el.id} className='pop_outer'>
          <div className='pop_inner'>
           
            <div className="pop_image">
              <img src={el.links?.patch?.small} alt={el.date_precision} />
            </div>
            <div className="pop_info">
              <p className='pop_name'>
                {el.name}
              </p>
              <p>
                {el.details}
              </p>
              <div className="youtube_link">
                <a href={el?.links?.webcast}>
                  <button>
                    Watch on Youtube
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  </>)
}


export default Popup