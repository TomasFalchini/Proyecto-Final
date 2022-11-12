import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import img from "../images/popular.webp";
import ScrollAnimation from 'react-animate-on-scroll';
import s from "../styles/popularPlants.module.css";

const PopularPlants = () => {
  const navigate = useNavigate();
  const allPlants = useSelector(
    (state) => state.productsReducer.productsBackUp
  );
  const plants = allPlants.filter((p) => !p.data.logicalDeletion).slice(27, 30);

  return (
    <div className={s.popular}>
      <ScrollAnimation animateIn="fadeInLeft" className={s.image}>
      <img src={img} className={s.image}  alt="plant" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" >
     
      <h3 className={s.title} >Most Popular</h3>
            </ScrollAnimation>
      <div className={s.list}>
        {plants.map((plant) => {
          return (
            <div className={s.container_card} key={plant.id}>
                  <ScrollAnimation animateIn="fadeInRight" className={s.card}>
                  <div className={s.card_overlay}>
                  <button
                    onClick={() => navigate(`/plants/details/${plant.id}`)}
                  >
                    more details
                  </button>
                </div>
                
                <img src={plant.data?.image} alt="img" />
                <div className={s.specs}>
                  <p>{plant.data?.name}</p>
                  <b>${plant.data?.price}</b>
                </div>
            </ScrollAnimation>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularPlants;
