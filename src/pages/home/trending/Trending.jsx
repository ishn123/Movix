import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import '../home.scss'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';
function Trending() {

    const [endpoint,setEndPoint] = useState("day");

    const {data,loading} = useFetch(`/trending/all/${endpoint}`);

    const onTabChange = (tab)=>{
        setEndPoint(tab==="Day"?"day":"week");
    }
    console.log(data);
  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data={['Day','Week']} onTabChange={onTabChange}></SwitchTabs>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}></Carousel>
    </div>
  )
}

export default Trending;