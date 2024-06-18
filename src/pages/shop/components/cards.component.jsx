import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <main>
      <h1>Page Home</h1>
      {data.offers.map((offer) => {
        // return console.log(offer.owner.account.username);
        return (
          <Link to={`/offers/${offer._id}`} key={offer._id}>
            <div className="card">
              <div className="name">
                <span>{offer.owner.account.username}</span>
              </div>
              <img
                src={offer.product_image.secure_url}
                alt={offer.product_name}
              />
              <div>
                <p>{offer.product_price} €</p>
                <p>{offer.product_details[1].TAILLE}</p>
                <p>{offer.product_details[0].MARQUE}</p>
              </div>
            </div>
          </Link>
        );
        // <Link to={`/offers/${offer._id}`} key={offer._id}>
        //   <article>
        //     <div>
        //       <img
        //         src={offer.owner.account.avatar.secure_url}
        //         alt={offer.owner.account.username}
        //       />
        //       <span>{offer.owner.account.username}</span>
        //     </div>
        //     <img
        //       src={offer.product_image.secure_url}
        //       alt={offer.product_name}
        //     />
        //     <div>
        //       <p>{offer.product_price} €</p>
        //       <p>{offer.product_details[1].TAILLE}</p>
        //       <p>{offer.product_details[0].MARQUE}</p>
        //     </div>
        //   </article>
        // </Link>
      })}
    </main>
  );
};

export default Cards;
