import React from "react";
import './shop.data'
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../component/collection-preview/collection-preview.component";

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        }// end of state
    }// end of constructor

    render(){
        const {collections} = this.state;
        return(
            <div className="shop-page">
              {
                  collections.map(collections =>(
                      <CollectionPreview key={collections.id} 
                        title = {collections.title}
                        item = {collections.items}
                      />
                  ))
              }
            </div>
        );
    }// end of render 

}// end of class

export default ShopPage