import { CDN_URL } from '../utils/constants';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
  const { resData } = props;

  // console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="res-card m-4 p-4 w-[260px] h-[450px] rounded-lg bg-gray-200 hover:bg-gray-400"
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo rounded-lg h-56 w-full object-cover"
      />
      <div className="text-container flex-grow flex flex-col justify-center items-center text-center overflow-auto">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
        <h4>User : {loggedInUser}</h4>
      </div>
    </div>
  );
};

//Higher Order Component
//Input - RestaurantCard ==> RestaurantCardPromoted(Output)

//OFFER LABEL - SWIGGY JSON DATA(UPDATED)
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
      aggregatedDiscountInfoV3,
    } = resData?.info;
    return (
      <div className="relative">
        <label className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-opacity-50  rounded-lg  text-xl text-nowrap pb-6 font-extrabold">
          {aggregatedDiscountInfoV3.header +
            ' ' +
            aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
