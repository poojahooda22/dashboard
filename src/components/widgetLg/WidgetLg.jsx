import React from 'react'
import './WidgetLg.css'
import User1 from '../../assets/User1.png';
import User2 from '../../assets/User2.png';
import User3 from '../../assets/User3.png';
import User4 from '../../assets/User4.png';

function WidgetLg() {

  const Button = ({type}) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }


  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={User1} alt="" className='widgetLgImg'/>
            <span className='widgetLgName'>Natali Craig</span>
          </td>
          <td className='widgetLgDate'>2 Apr 2022</td>
          <td className='widgetLgAmount'>$242.56</td>
          <td className='widgetLgStatus'><Button type="Approved" /></td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={User2} alt="" className='widgetLgImg'/>
            <span className='widgetLgName'>Andi Lane</span>
          </td>
          <td className='widgetLgDate'>2 Jan 2022</td>
          <td className='widgetLgAmount'>$542.06</td>
          <td className='widgetLgStatus'><Button type="Pending" /></td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={User3} alt="" className='widgetLgImg'/>
            <span className='widgetLgName'>Demi Wikinson</span>
          </td>
          <td className='widgetLgDate'>2 Mar 2022</td>
          <td className='widgetLgAmount'>$342.26</td>
          <td className='widgetLgStatus'><Button type="Declined" /></td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={User4} alt="" className='widgetLgImg'/>
            <span className='widgetLgName'>Rene wells</span>
          </td>
          <td className='widgetLgDate'>2 Feb 2022</td>
          <td className='widgetLgAmount'>$242.56</td>
          <td className='widgetLgStatus'><Button type="Approved" /></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
