import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss';

const CollectionPreview = ({title,item}) =>{
    return (
        <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {item
            .filter((item,index) => index < 4)
            .map(item => (
                <CollectionItem key={item.id}
                    name = {item.name}
                    imageUrl = {item.imageUrl}
                    price = {item.price}
                />
            ))}
        </div>
    </div>
    );
}

export default CollectionPreview;