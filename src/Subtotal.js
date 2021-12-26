import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "./StateProvider";
import { getBaskeTotal } from './reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                      <p>
                          Subtotal ({basket.length} items):
                          <strong>{` ${value}`}</strong>
                      </p>
                      {/* Part of the homework */}
                      <small className='subtotal_gift'>
                          <input type="checkbox" />
                          This order contains a gift
                      </small>
                    </>
                )}
                decimalScale={2}
                value={getBaskeTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proced to checkout</button>
        </div>
    )
}

export default Subtotal
