import * as react from 'react';
import './SingleProductDisplay.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface DisplayProperties {
    imageWidth?: string;
    imageHeight?: string;
    mainClass: string;

}

interface Product {
    id: number;
    product_name: string;
    quantity: string;
    brands: string;
    countries: string;
    main_category: string;
    image_url: string;
    ["energy-kj_100g"]: string;
    ["energy-kcal_100g"]: string;
    fat_100g: string;
    carbohydrates_100g: string;
    sugars_100g: string;
    proteins_100g: string;
    categories: string;
    salt_100g: string;
}

interface Info {
    id: string
}

function DisplaySingleProduct() {
    const [product, setProduct] = react.useState<Product>({
        "energy-kcal_100g": "0",
        carbohydrates_100g: "0",
        categories: "0",
        fat_100g: "0",
        image_url: "0",
        id: 0,
        product_name: "0",
        proteins_100g: "0",
        "energy-kj_100g": "0",
        brands: "0",
        countries: "0",
        main_category: "0",
        quantity: "0",
        salt_100g: "0",
        sugars_100g: "0"
    });
    const [name, setName] = react.useState<string>(product.product_name)
    const [cal, setCal] = react.useState<string>(product['energy-kcal_100g'])
    const [fat, setFat] = react.useState<string>(product.fat_100g)
    const [carb, setCarb] = react.useState<string>(product.carbohydrates_100g)
    const [protein, setProtein] = react.useState<string>(product.proteins_100g)
    const [update, setUpdate] = react.useState<Boolean>(false)
    let Id = useParams<Info>();

    const [num, setNum] = react.useState<number>(parseInt(Id.id))

    react.useEffect(() => {
        axios.get(`http://localhost:8080/product/get/${num}`)
            .then(res => {
                const result = res.data;
                setProduct(result);
            })
    }, [num]
    )
    return (
        <div className="singleProdC">
            <div className="itemInfo">
                {/* <div className="item">
                    <Button onClick={GiveMeProduct} variant="danger" size="lg"> GET RANDOM </Button>
                </div> */}
                <div className="Image">
                    <img src={product?.image_url} width="250px" height="250px" style={{ borderRadius: 20 }} />
                </div>
                <div className="Text">
                    <div className="InputField">
                        {update ? <div> <h2>Name: </h2>
                            <input type="text" value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }} /> </div> :
                            <div>
                                <h2>Name: {product?.product_name}</h2>
                            </div>}
                    </div>
                    <div className="InputField">
                        {update ? <div> <h2>Calories: </h2>
                            <input type="text" value={cal}
                                onChange={(e) => {
                                    setCal(e.target.value)
                                }} /> </div> :
                            <div>
                                <h2>Calories: {product?.['energy-kcal_100g']}</h2>
                            </div>}
                    </div>
                    <div className="InputField">
                        {update ? <div> <h2>Fats: </h2>
                            <input type="text" value={fat}
                                onChange={(e) => {
                                    setFat(e.target.value)
                                }} /> </div> :
                            <div>
                                <h2>Fats: {product?.fat_100g}</h2>
                            </div>}
                    </div>
                    <div className="InputField">
                        {update ? <div> <h2>Carbs: </h2>
                            <input type="text" value={carb}
                                onChange={(e) => {
                                    setCarb(e.target.value)
                                }} /> </div> :
                            <div>
                                <h2>Carbs: {product?.carbohydrates_100g}</h2>
                            </div>}
                    </div>
                    <div className="InputField">
                        {update ? <div> <h2>Proteins: </h2>
                            <input type="text" value={protein}
                                onChange={(e) => {
                                    setProtein(e.target.value)
                                }} /> </div> :
                            <div>
                                <h2>Proteins:  {product?.proteins_100g}</h2>
                            </div>}
                    </div>
                    {update ? <div>
                        <button
                            onClick={() => {
                                setUpdate(false)
                                setProduct({
                                    id: num,
                                    product_name: name,
                                    "energy-kcal_100g": cal,
                                    carbohydrates_100g: carb,
                                    fat_100g: fat,
                                    proteins_100g: protein,
                                    categories: product.categories,
                                    image_url: product.image_url,
                                    "energy-kj_100g": product['energy-kj_100g'],
                                    brands: product.brands,
                                    countries: product.countries,
                                    main_category: product.main_category,
                                    quantity: product.quantity,
                                    salt_100g: product.salt_100g,
                                    sugars_100g: product.sugars_100g
                                })
                                axios.post(`http://localhost:8080/product/update`, {
                                    id: num,
                                    product_name: name,
                                    "energy-kcal_100g": cal,
                                    carbohydrates_100g: carb,
                                    fat_100g: fat,
                                    proteins_100g: protein,
                                    categories: product.categories,
                                    image_url: product.image_url,
                                    "energy-kj_100g": product['energy-kj_100g'],
                                    brands: product.brands,
                                    countries: product.countries,
                                    main_category: product.main_category,
                                    quantity: product.quantity,
                                    salt_100g: product.salt_100g,
                                    sugars_100g: product.sugars_100g
                                })
                                    .then(res => {

                                    })
                            }}>Save</button>
                    </div> : <div>
                        <button
                            onClick={() => {
                                setUpdate(true)
                                setName(product.product_name)
                                setCal(product['energy-kcal_100g'])
                                setFat(product.fat_100g)
                                setCarb(product.carbohydrates_100g)
                                setProtein(product.proteins_100g)
                            }}>Edit Values</button>
                    </div>}
                </div>
            </div>
            <div className="PageButtons">
                <Button onClick={() => {
                    if (num - 1 <= 0) {

                    } else {
                        setNum(num - 1);
                    }
                }} className="btnMin">{"<="}</Button>
                <Button onClick={() => {
                    setNum(num + 1);
                    console.log(num)
                }} className="btnPlus">{"=>"}</Button>
            </div>
        </div >
    );
}

export default DisplaySingleProduct;