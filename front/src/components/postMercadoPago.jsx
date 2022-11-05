import React, { useReducer } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { purchase } from "../Redux/actions/shopCart";

export default function PostMercadoPago() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const status = searchParams.get("status");
  const payment_id = searchParams.get("payment_id");
  const payment_type = searchParams.get("payment_type");
  const cart = useSelector((state) => state.shopCartReducer.products);
  const user = useSelector((state) => state.usersReducer.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      cart.length > 0 &&
      user &&
      (status === "approved" || status === "in_process")
    ) {
      dispatch(purchase(cart[0].orderID, cart, status, user.email));
    }
  }, [cart, dispatch, status, user]);

  const goHome = (e) => {
    e.preventDefault();

    navigate("/");
  };
  if (status === "approved" || status === "in_process") {
    return (
      <div>
        <p>
          Juanma inserta una imagen dependiendo de si el estado es aproved o
          pending
        </p>
        <h1>Thank you so much for buying at Calathea.</h1>
        <h3>YOUR PURCHASE WAS {status}</h3>
        <p>
          The payment id is {payment_id}. The payment method was: {payment_type}
        </p>
        <p>Total Amount: todavia nada pero ya voy a ver como se lo mando</p>
        <button onClick={goHome}>GO BACK TO HOME</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>FAILURE</p>
        <h1>Thank you so much for buying at Calathea.</h1>
        <h3>YOUR PURCHASE WAS {status}</h3>
        <p>
          We are sorry but it has failed for some reason. Meanwhile, we save
          your cart so you can try to purchase it in another ocasion.
        </p>
        <button onClick={goHome}>GO BACK TO HOME</button>
      </div>
    );
  }
}

/* https://api-plants-b6153.web.app/failure?collection_id=1310577355&collection_status=rejected&payment_id=1310577355&status=rejected&external_reference=null&payment_type=credit_card&merchant_order_id=6383678273&preference_id=209498569-0017a0dc-1fde-4270-8186-0cee769052d6&site_id=MLA&processing_mode=aggregator&merchant_account_id=null */
