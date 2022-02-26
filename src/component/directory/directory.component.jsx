import React from "react";
import MenuItem from "../menu-item/menu-item.component.jsx";
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: '/hats'
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: '/jackets'
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: '/sneakers'
                },
                {
                    title: 'Womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: '/womens',
                },
                {
                    title: 'Mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: '/mens',
                }
            ],

        }//end of state
    }//end of constructor

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map((sections) => (
                    <MenuItem key={sections.id} 
                    title={sections.title} 
                    imageUrl={sections.imageUrl} 
                    size = {sections.size}
                    linkUrl = {sections.linkUrl} />
                ))
                }
            </div>
        );
    }
}// end of class

export default Directory;