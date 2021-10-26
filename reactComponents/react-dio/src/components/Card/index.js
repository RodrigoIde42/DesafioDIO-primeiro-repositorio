import {useState} from 'react';
import Button from '../Button/index'

const Card = () => {

    const [number, setNumber] = useState(0);

    function sum() {
        setNumber(number + 1);
    }

    function sub() {
        setNumber(number - 1);
    }

    return (
        <div className="card">
            <div className="card-header">
                My first card
            </div>
            <div className="card-body">
                <Button
                    className="btn btn-success" 
                    onClick={sum}
                >
                    Sum
                </Button>
                <Button
                    className="btn btn-danger"
                    onClick={sub}
                >
                    Sub
                </Button>
                <p>{number}</p>
            </div>
        </div>
    )
}

export default Card;