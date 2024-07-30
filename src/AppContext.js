import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(1)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const url = "https://66a077917053166bcabb8106.mockapi.io/student"
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = () => {
    axios.get(url)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const addCart = (id) => {
    const res = products.find((item) => item.id === id)
    const index = cart.findIndex(item=>item.id===id)
    console.log("index", index)
    // cart=[{id:2, name: iphoen, quatity:1}, {id:6, name: sámum, quatity:1}]
    if(index >= 0){// trường hợp id này đã tồn tại trong cart
      //cart=[{id:2, name: iphoen, quatity:1}, {id:6, name: sámum, quatity:2}] 
      let newCart=cart;
      newCart[index].quatity++
    }
    else{
      setCart([...cart, {...res, quatity: 1}])
    }
  }
  const deleteCart =(id)=>{
    setCart(cart.filter(item=>item.id!==id))
  }

  const updateById = (id, flag)=> {
    let index=cart.findIndex(item=>item.id === id)
    let newCart = cart
    if(flag==0){
      if(newCart[index].quatity>1){
        newCart[index].quatity--;
      }
    }
    else{
      newCart[index].quatity++;
    }
    setCart([...newCart])
  }

  // const updateById = (id, num)=> {
  //   const kq=cart.map((item)=>(item.id==id && !(num==-1&& item["quantity"]==1))?{...item,quantity:item["quantity"]+num}:item)
  //   setCart([...kq])
  // }
  return (
    <AppContext.Provider value={{ count, setCount, cart, addCart, deleteCart, updateById }}>
      {children}
    </AppContext.Provider>
  )
}
