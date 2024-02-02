import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProduct(data)
            })
    }, [])

    useEffect(()=>{
        let totalCount = 0;
        cart.forEach((item) => {
            totalCount += item.price * item.quantity
        })
        setTotal(totalCount)

    },[cart])

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id)
        if (existingItem) {
            const updateCart = cart.map((item) => {

                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
            setCart(updateCart)
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
            alert("Product added to cart")
        }
    }

    console.log(cart, "cart item")

    const handleRemove = (id) => {
        const removedData = cart.filter((item) => item.id !== id)
        setCart(removedData)
    }

    

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }} >


                <div>
                    {product?.map((item) => {
                        return <div>
                            <h1>{item.title}</h1>
                            <p>{item.price}</p>
                            <button onClick={() => addToCart(item)} >Add to cart</button>
                        </div>
                    })}
                </div>
                <div>
                    <h1>Cart</h1>
                    <div>
                        <h3>{total}</h3>
                    </div>
                    {cart?.map((item) => {
                        return <>
                            <h1>{item.title}</h1>
                            <p>{item.price*item.quantity}</p>
                            <p>Quantity : {item.quantity}</p>
                            <button onClick={() => handleRemove(item.id)}  >Remove</button>
                        </>
                    })}
                </div>
            </div>
        </div>
    )
}
