import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Container, Row} from 'reactstrap'
import Product from "../product/Product"
export default function Products() {
    const [data, setData] =useState([]);
    const url = "https://66a077917053166bcabb8106.mockapi.io/student"
    const fetchData = () =>{
        axios.get(url)
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        fetchData()
    }, [])
  return (
    <div>
        <Container>
            <h1>Product</h1>
            <Row>
                {
                    data.map((item, index)=>(
                    <Product 
                    key={index}
                    product={item}
                    />
                    ))
                }
            </Row>
            
        </Container>
    </div>
  )
}
