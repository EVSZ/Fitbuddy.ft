import * as react from 'react';
import './SingleProductDisplay.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

interface DisplayProperties {
    imageWidth?: string;
    imageHeight?: string;
    mainClass: string;

}

interface Product {
    image_url: string;
    product_name: string;
    ["energy-kcal_100g"]: string;
    fat_100g: string;
    carbohydrates_100g: string;
    proteins_100g: string;
    categories: string;
}
function DisplaySingleProduct({ displayProperties }: { displayProperties: DisplayProperties }) {
    const [product, setProduct] = react.useState<Product | undefined>();
    function GiveMeProduct() {
        axios.get(`http://localhost:8080/product/get/random`)
            .then(res => {
                const result = res.data;
                setProduct(result);
                console.log(result)
            })
    }
    return (
        <div className="Container">
            <div className={displayProperties.mainClass}>
                <div className="item">
                    <Button onClick={GiveMeProduct} variant="danger" size="lg"> GET RANDOM </Button>
                </div>
                <div className="item">
                    <img src={product?.image_url} width="200px" height="200px" />
                </div>
                <div className="item">
                    <h2>Name: {product?.product_name}</h2>
                    <h2>Calories: {product?.['energy-kcal_100g'] } </h2>
                    <h2>Fats: { product?.fat_100g}</h2>
                    <h2>Carbs: {product?.carbohydrates_100g }</h2>
                    <h2>Proteins: {product?.proteins_100g }</h2>
                    <h5>categories: { product?.categories}</h5>
                </div>

            </div>

        </div>
    );
}

export default DisplaySingleProduct;