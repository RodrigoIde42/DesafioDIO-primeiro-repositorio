import {useState} from 'react';

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
                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={sum}
                >
                    Add
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={sub}
                >
                    Remove
                </button>
                <p>{number}</p>
            </div>
        </div>
    )
}

export default Card;