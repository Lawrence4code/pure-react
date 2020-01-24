import React from 'react';
import ReactDOM from 'react-dom';


function Data() {
  return (
    <>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
    </>
  )
}


function MyThing () {
  return (
    <div className='book'>
      <div className='title'>
        The title
      </div>
      <div className='author'>
        The Author
      </div>
      <ul className='stats'>
        <li className='rating'>
          5 stats
        </li>
        <li className='isbn'>
          12-34568-910
        </li>
      </ul>
      <div>
        New
        Test
      </div>
      <div>
        New
        ""
        Empty
        { alert('5')}
        Lines
      </div>

      <div>
        &nbsp;Non breaking
        &nbsp;Space &nbsp;
      </div>

      <table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <Data />
  </tr>
</table>
    </div>
  )
}



ReactDOM.render(<MyThing></MyThing>, document.querySelector('#root'));