import React, { useState, useEffect } from 'react';

function CartPage() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
    const [otp, setOtp] = useState('');
    const [paymentInitiated, setPaymentInitiated] = useState(false);

    // Fetch products from the Fake Store API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProducts(data)
            })
    }, []);

    //s Calculate total price whenever the cart changes
    useEffect(() => {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        setTotal(totalPrice);
    }, [cart]);

    //  Add item to cart
    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    // Handle payment initiation
    const handlePaymentInitiation = () => {
        setPaymentInitiated(true);
    };

    // Handle OTP verification
    const handleOTPVerification = () => {
        if (otp === '1234') {
            alert('Payment Successful!');
            setIsPaymentSuccess(true);
        } else {
            alert('Invalid OTP. Please try again.');
        }
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div>
                {products?.map(product => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <div>
                <h2>Cart</h2>
                {cart.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price * item.quantity}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                    
                ))}
                <h3>Total: ${total}</h3>
                {!paymentInitiated && <button onClick={handlePaymentInitiation}>Proceed to Payment</button>}
                {paymentInitiated && (
                    <div>
                        <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                        <button onClick={handleOTPVerification}>Verify OTP</button>
                    </div>
                )}
            </div>
            {isPaymentSuccess && <p>Payment Successful!</p>}
        </div>
    );
}

export default CartPage;


function AddtoCart() {
    const [produt, setProduct] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProduct(data)
            })
    })

    const addToCart = (product) => {

        const existingItem = cart.find((item) => item.id === product.id)
        if (existingItem) {
            const updatedCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
            setCart(existingItem)
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
        }
    }



    return (
        <div>
            <div>
                {produt.map((product) => {
                    retrun(
                        <>
                            <p>{product.id}</p>
                            <h1>{product.title}</h1>
                            <p>${product.price}</p>
                            <button onClick={() => addToCart(product)} >Add to Cart</button>
                        </>
                    )
                })}
            </div>
            <div>
                <h2>Cart</h2>
                {cart.map((item) => {
                    <div key={item.id} >
                        <h3>{item.title}</h3>
                        <p>Quantity : {item.quantity}</p>
                        <p>Price : Rs {item.price * item.quantity }</p>

                    </div>

                })}
            </div>
        </div>
    )



}