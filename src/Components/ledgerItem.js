import React from 'react';
import CNY from '../img/CNY.png'
import XRP from '../img/XRP.png'
import BTC from '../img/BTC.png'
import ETH from '../img/ETH.png'
import EUR from '../img/EUR.png'
import GBP from '../img/GBP.png'
import USD from '../img/USD.png'
import Icon from '../Components/icon'



const renderFlag = (currency) => {
    if (currency == 'CNY') { return CNY
    } else if (currency == 'BTC') { return BTC
    } else if (currency == 'ETH') { return ETH
    } else if (currency == 'EUR') { return EUR
    } else if (currency == 'GBP') { return GBP
    } else if (currency == 'USD') { return USD
    } else {return XRP}
}

const renderResult = (result) => {
    if (result != 'tesSUCCESS') {return 'text-danger'} else {return 'text-success'}
}


const LedgerItem = (props) => {
    return (
        <div className = "ledger border solid border-dark rounded mb-2 p-2 shadow-sm p-3 mb-5 bg-white rounded" >
            <div className = "transactionType">
                <h3>
                    {props.currency}
                </h3>
            </div>
            <div className = "transactionInfo">
                {props.amount} <br/>
                {props.transactionType} <br/>
               <p className={renderResult(props.result)}> {props.result} </p>
                <Icon src={renderFlag(props.currency)} />
            </div>

        </div>
    );
};

export default LedgerItem;
