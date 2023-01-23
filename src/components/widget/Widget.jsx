import React from 'react'
import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
const Widget = ({type}) => {

    let data;
    const amount=20
    const diff = 30

    switch(type){
        case"user":
        data={
            title:"USERS",
            isMoney: false,
            link:"See all users",
            icon:(<Person2OutlinedIcon className='icon'
            style={{backgroundColor:"rgba(128, 0 ,128, 0.2)",
          color:"purple"}}/>
        )};
        break;
        case"order":
        data={
            title:"ORDER",
            isMoney: false,
            link:"See all orders",
            icon:<AddShoppingCartIcon className='icon'style={{backgroundColor:"rgba(0, 128 ,128, 0.2)",
            color:"green"}}/>
        };
        break;
        case"earning":
        data={
            title:"EARNINGS",
            isMoney: true,
            link:"View net earning",
            icon:<AttachMoneyIcon className='icon'style={{backgroundColor:"rgba(0, 0 ,124, 0.2)",
            color:"blue"}}
            />
        };
        break;
        case"balance":
        data={
            title:"BALANCE",
            isMoney: true,
            link:"See details",
            icon:<RequestQuoteIcon className='icon'style={{backgroundColor:"rgba(128, 128 ,128, 0.2)",
            color:"black"}}/>
        };
        break;
        default:
          break;

    }

  return (
    <div className='widget'>
        <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>

        </div>

        <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpOutlinedIcon/>{diff}%</div>

            {data.icon}
        </div>





    </div>
  )
}

export default Widget