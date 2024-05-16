import { React } from 'react';
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';


const PopUp = ({ options, setToggle, actual, setActual }) => {
  return (
    <div>
      <div className={`p-6 bg-gray-200
        absolute top-20 right-0 mx-4 my-5 min-w-[140px] border border-black rounded-xl sidebar`}>
        <ul className="list-none flex flex-1 flex-col justify-center gap-5 items-start">
          {options?.map((option, index) => (
            <li 
            onClick={() => {setActual(index); setToggle(false)}}
            className = {`font-medium cursor-pointer ${actual === index ? 'text-blue-600' : 'text-black'}`}>
              {option.action 
              ? 
              <span onClick={option.action}>{option.text}</span>
              :
              <Link to={`${option.route}`}>
                {option.text}
              </Link>
              }
            </li>
          ))}
        </ul>
      </div> 
    </div>
  )
};

export default PopUp;