import React, {useState} from "react";
import {data} from "./data/data";
import ProductItem from "./components/ProductItem/ProductItem";
import s from './App.module.css'


function App() {

    let [products, setProducts] = useState(data)


    const submit_form = event => {
        event.preventDefault()
        const {name, price, count} = event.target

        const product = {
            id: products.length + 1,
            name: name.value,
            price: price.value,
            count: count.value
        }
        products = [...products, product]
        setProducts(products)

        name.value = ''
        price.value = ''
        count.value = ''
    }

    const incr_count = (id) => {
        const newProducts = products.map(elem => {
            if (elem.id == id) {
                elem.count += 1
            }
            return elem
        })
        setProducts(newProducts)
    }

    const decr_count = (id) => {
        const newProducts = products.map(elem => {
            if (elem.id == id) {
                if (elem.count > 0) {
                    elem.count -= 1
                }

            }
            return elem
        })
        setProducts(newProducts)
    }

    const deleteProduct = (id, event) => {
        event.preventDefault()
        const newProducts = products.filter(elem => elem.id != id)
        setProducts(newProducts)
    }

    return (
        <div className={s.form_container}>
            <form onSubmit={submit_form}>
                <input type='text' name='name'/>
                <input type='number' name='price'/>
                <input type='number' name='count'/>
                <button type='submit'>Add Product</button>
            </form>
            <div className={s.container}>
                {products.map((elem, index) => <ProductItem
                    key={index}
                    name={elem.name}
                    price={elem.price}
                    count={elem.count}
                    incr_count={incr_count}
                    decr_count={decr_count}
                    deleteProduct={deleteProduct}
                    id={elem.id}
                />)}

            </div>
        </div>
    );
}

export default App;
