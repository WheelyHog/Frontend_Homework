import s from './ProductItem.module.css'
import image from './assets/no-image.png'

function ProductItem({id, name, price, count, incr_count, decr_count, deleteProduct}) {
    return (
        <div className={s.card} onDoubleClick={(event) => deleteProduct(id, event)}>
            <img src={image}/>
            <h2>{name}</h2>
            <h4>Price: {price} $</h4>
            <div className={s.triggers}>
                <button onClick={(event) => incr_count(id, event)}>+</button>
                {count}
                <button onClick={() => decr_count(id)}>-</button>
            </div>
        </div>
    )
}

export default ProductItem