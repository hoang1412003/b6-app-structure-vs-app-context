import React, { useContext } from 'react'
import { AppContext } from "../../AppContext"
import { Button, Container, Table } from 'reactstrap'
export default function Cart() {
    const { cart, deleteCart } = useContext(AppContext)
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
                                <span>{item.quatity}</span>
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
