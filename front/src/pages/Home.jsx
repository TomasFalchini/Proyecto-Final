import React from 'react';
import HomeList from '../components/HomeList';
import PopularPlants from '../components/PopularPlants';
import SearchBox from '../components/SearchBox';


const Home = () => {
  

    return (
        <div className='home'>
        
          <SearchBox/>
          <PopularPlants/>
          <HomeList/>
            
        </div>
    );
};

export default Home;