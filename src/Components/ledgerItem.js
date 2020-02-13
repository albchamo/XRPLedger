import React from 'react';
import CNY from '../img/CNY.png'
import XRP from '../img/XRP.png'
import Icon from '../Components/icon'



const renderFlag = (currency) => {
    if (currency == 'CNY') { return CNY} else {return XRP}
}


const LedgerItem = (props) => {
    return (
        <div className = "ledger">
            <div className = "transactionType">
                <h3>
                    {props.transactionType}
                </h3>
            </div>
            <div className = "transactionInfo">
                {props.amount} <br/>
                {props.currency} <br/>
                {props.result} <br/>
                aca <Icon src={renderFlag(props.currency)} />
            </div>

        </div>
    );
};

export default LedgerItem;
