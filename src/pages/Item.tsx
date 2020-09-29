import React from "react";
import TopBar from "../components/AppBar";
import Footer from "../components/Footer";
import ItemContent from "../components/ItemContent";
import {useParams} from 'react-router-dom';

const Item = (props: any) => {

    const {data} = props;

    let {itemId}: any = useParams();

    let ItemInfo = data.filter((item: any) => item.id === parseInt(itemId))

    return (
        <React.Fragment>
            <TopBar/>
            <ItemContent ItemInfo={ItemInfo}/>
            <Footer/>
        </React.Fragment>
    )
}

export default Item;
