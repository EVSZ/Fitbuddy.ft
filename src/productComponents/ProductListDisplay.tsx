import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './ProductListDisplay.css'

type Product = {
    image_url: string;
    product_name: string;
    ["energy-kcal_100g"]: string;
    fat_100g: string;
    carbohydrates_100g: string;
    proteins_100g: string;
    categories: string;
}

function ProductListDisplay() {

    const [productList, setProductList] = useState<Product[] | undefined>();
    // const [product, setProduct] = useState<Product>();
    const [page, setPage] = useState<string>("1");

    useEffect(() => {
        axios.get(`http://localhost:8080/product/getAll`)
            .then(res => {
                const data = res.data;
                setProductList(data);
                console.log(data);
            })
        return function cleanup() {
        }
    }, []);

    function ProductListDisplay() {
        return (
            <div className="ProductListContainer">
                {productList?.map((param) => {
                    return(                    
                    <h2>{param.product_name}</h2>
                    )
                })}
            </div>
        )
    };
    return (
        <div className="Main">
            {ProductListDisplay()}
            <div className="PageButtons">
                <Button onClick={() => {
                    setPage((parseInt(page)-10).toString());
                }} className="btnMin">{"<="}</Button>
                <Button onClick={() => {
                    setPage((parseInt(page)+10).toString());
                }} className="btnPlus">{"=>"}</Button>
            </div>
        </div>
    );
}

export default ProductListDisplay;