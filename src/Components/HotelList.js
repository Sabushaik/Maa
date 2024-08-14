import React from 'react';
import HotelCard from './HotelCard';

const hotelsData = [
  { id: 1, name: 'Hotel A', location: 'Manali', image: 'https://th.bing.com/th/id/OIP.-y33HaHKGwFepW3WHTeg6AAAAA?rs=1&pid=ImgDetMain' },
  { id: 2, name: 'Hotel B', location: 'Manali', image: 'https://th.bing.com/th/id/OIP.ISgwOzeDuaGyQ1IbCyufrAHaEJ?rs=1&pid=ImgDetMain' },
  { id: 3, name: 'Hotel C', location: 'Shimla', image: 'https://media.cntraveler.com/photos/56980a98c58591430b12b283/master/pass/best-pools-miami-1-hotel-cr-courtesy.jpg' },
  { id: 4, name: 'Hotel D', location: 'Shimla', image: 'https://q-cf.bstatic.com/xdata/images/xphoto/max1440/48351447.jpg?k=569e0fadb1c0d3df0bca757f033472783e659a6e2f91fa19bce31b0b973ada29&o=' },
  { id: 5, name: 'Hotel E', location: 'Manali', image: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/10/GkK8XarS-hotelbalconyviewsindubaiaddressbeachresort_1.jpg' },
  { id: 6, name: 'Hotel F', location: 'Shimla', image: 'https://th.bing.com/th/id/OIP.MN1kd2balC2Kt2A81OR6lgHaFj?w=1200&h=900&rs=1&pid=ImgDetMain' },
];

const HotelList = ({ location }) => {
  const filteredHotels = hotelsData.filter(hotel => hotel.location.toLowerCase().includes(location.toLowerCase()));

  return (
    <div className="hotel-list">
      {filteredHotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
