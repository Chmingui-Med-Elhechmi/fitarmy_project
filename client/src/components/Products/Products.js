import React, { useEffect } from "react";
import heart from "./heart.svg";
import "./Products.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import vid from "../../assets/180419_Boxing_A1_04.mp4";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productSlice";

export default function Products() {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <main>
      <div className="about-page">
        <video autoPlay playsInline muted loop className="about-page-hero">
          <source src={vid} type="video/mp4" />
        </video>
        <div className="container-products" style={{ paddingTop: "200px" }}>
          {product.products &&
            product.products.map((item) => {
              return (
                <Link
                  to={{
                    pathname: `/produits/${item.title
                      .replace(/\s+/g, "")
                      .trim()}`,
                  }}
                  key={item.id}
                >
                  <div className="bloc-card">
                    <div className="product-card">
                      <div className="visual-aspect">
                        <img
                          className="img-product"
                          src={item.image.imageURL}
                          alt="produit"
                        />
                        <div className="like-container">
                          <img src={heart} alt="icône j'aime" />
                        </div>
                      </div>
                      <div className="info">
                        <p>{item.title}</p>
                        <p>Price : {item.price}€</p>
                        <p>description : {item.desc}</p>
                        <p>description : {item.quantity}</p>
                      </div>
                    </div>
                    <div className="back-card"></div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <Footer />
    </main>
  );
}
