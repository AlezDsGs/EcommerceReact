import React, { Component } from 'react';
import { Media, CardDeck } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class ListaProductos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                    id: 9,
                    name: 'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 1,
                    name: 'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 2,
                    name: 'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 3,
                    name: 'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                }
            ],
        };
    }

    render() {
        const listaDeProductos = this.state.dishes.map((dish, index) => {

            let contarCard = ++index;


            return (
                <div key={dish.id} className="col-sm-4" >
                    <Card className="mt-4">
                        <CardImg variant="top" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardSubtitle>{dish.price}$</CardSubtitle>
                            <CardText className="d-none d-md-block">{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <CardDeck >
                {listaDeProductos}
            </CardDeck>
        );
    }
}

export default ListaProductos;