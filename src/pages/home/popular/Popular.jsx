import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import '../home.scss'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';
function Popular() {

    const [endpoint,setEndPoint] = useState("movie");

    const {data,loading} = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab,idx)=>{
        setEndPoint(tab=="Movies"?"movie":"tv");
    }
    console.log(data);
  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">What's Trending?</span>
            <SwitchTabs data={['Movies','TV Shows']} onTabChange={onTabChange}></SwitchTabs>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endPoint={endpoint}></Carousel>
    </div>
  )
}

export default Popular;