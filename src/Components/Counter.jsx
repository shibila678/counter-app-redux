// import React, { useState } from 'react'
// import { Button } from 'semantic-ui-react'
// import { connect } from 'react-redux'
// import {incre, decre } from '../action'

// const Counter = ({value, incre, decre }) => {
//     //let [value, setValue] = useState(0)
//     // const incre = () => {
//     //     setValue(value++)
//     // }
//     // const decre = () => {
//     //     setValue(value--)
//     // }
//     return (
//         <div className='App'>
//             <h1>Counter</h1>
//             <h2>{value}</h2>
//             <br />
//             <Button positive onClick={incre}>+ Increment</Button>
//             <span></span>
//             <Button negative onClick={decre}>- Decremnet</Button>

//         </div>
//     )
// }
// debugger
// const mapStatetoProps = (state=1) => ({
//     value:  state
// })
// const mapDispatchToProp = {
//     incre,
//     decre

// }

// export default connect(mapStatetoProps, mapDispatchToProp)(Counter)
import React from 'react'
import {increment, decrement } from '../action'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'

const Counter = () => {
    const value=useSelector(state=>state.counter)//replacing mapStatetoProps and mapDispatchToProp
    const dispatch=useDispatch();
     return (
        <div className='App'>
            <h1>Counter</h1>
            <h2>{value}</h2>
            <br />
            <Button positive onClick={()=>dispatch(increment())}>+ Increment</Button>
            <span></span>
            <Button negative onClick={()=>dispatch(decrement())}>- Decrement</Button>

        </div>
    )
}

export default Counter