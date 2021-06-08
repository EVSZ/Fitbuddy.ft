import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './ProductListDisplay.css'
import { Link } from "react-router-dom";

type Product = {
    id: number;
    image_url: string;
    product_name: string;
    ["energy-kcal_100g"]: string;
    fat_100g: string;
    carbohydrates_100g: string;
    proteins_100g: string;
}

function ProductListDisplay() {
    const [productList, setProductList] = useState<Product[]>([]);
    // const [product, setProduct] = useState<Product>();
    const [page, setPage] = useState<string>("5");

    useEffect(() => {
        axios.get(`http://localhost:8080/product/getPage/${page}`)
            .then(res => {
                const data = res.data;
                setProductList(data);
                console.log(data);
            })
        return function cleanup() {
        }
    }, [page]);

    return (
        <div className="Main">
            <div>
                <table className="Table">
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((param, key) => {
                            return (
                                <tr key={key + 1}>
                                    <td key={key + 2}>
                                        <img key={key + 3} alt="Food Unavailable" src={param.image_url} style={{ width: 115, height: 115, borderRadius: 25 }} />
                                    </td>
                                    <td key={key + 4}>
                                        <h2 key={key}>{param.product_name}</h2>
                                    </td>
                                    <td key={key + 5}>
                                        <Link to={`/product/${param.id}`}>
                                            <div onClick={() => {
                                                console.log(param.id)
                                            }}className="Btn Select" key={key + 6}
                                            >Select</div>
                                            </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="PageButtons">
                <Button onClick={() => {
                    if (parseInt(page) - 5 <= 0) {

                    } else {
                        setPage((parseInt(page) - 5).toString());
                        console.log(page)
                    }
                }} className="btnMin">{"<="}</Button>
                <Button onClick={() => {
                    setPage((parseInt(page) + 5).toString());
                    console.log(page)
                }} className="btnPlus">{"=>"}</Button>
            </div>
        </div>
    );
}

export default ProductListDisplay;