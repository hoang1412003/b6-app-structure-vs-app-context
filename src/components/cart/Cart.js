import React, { useContext } from 'react'
import { AppContext } from "../../AppContext"
import { Button, Container, Table } from 'reactstrap'
export default function Cart() {
    const { cart, deleteCart, updateById } = useContext(AppContext)
    return (
        <div>
            <Container>
                <Table hover>
                    <thead>
                        <tr>
                            <th>
                                id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                action
                            </th>

                        </tr>
                    </thead>
                    <tbody>

                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <Button onClick={()=>updateById(item.id, 0)}>-</Button>
                                <span>{item.quatity}</span>
                                <Button onClick={()=>updateById(item.id, 1)}>+</Button>
                                <td>
                                    <Button className='btn btn-danger' onClick={()=>deleteCart(item.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
