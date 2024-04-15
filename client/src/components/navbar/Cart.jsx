export default function Cart({cartOpen,setCartOpen}){
    return (
        <section>
            <h1>CART</h1>
            <div>{/*a product*/}
                <div>
                <img src="" alt="" />
                <div>
                    <p>AXOLO LINEN</p>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <p>Beige</p>
                            <p>Size: 37</p>
                        </div>
                    </div>
                    <div>
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                    <p>$165</p>
                </div>
                </div>
                <div>
                    <button>DELETE</button>
                    <button>X</button>
                </div>
            </div>{/*a product*/}
            <div>
                <p>TOTAL</p>
                <p>$165.00</p>
            </div>
        </section>
    )
}