import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap';
import { AppContext } from '../../AppContext';
import Swal from 'sweetalert2'

export default function Product(props) {
    const { product } = props;
    const {addCart}= useContext(AppContext)
    const handle_add =(id)=>{
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        addCart(id)
    }
    return (
        <Col lg={3} md={4} sm={6} xs={6}>
            <Card
            >
                <img
                    alt="Sample"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        <div>
                            <p>Info: {product.name}</p>
                            <Link to={`/detail/${product.id}`}>Chi tiết sản phẩm</Link>
                        </div>
                        
                    </CardText>
                    <Button onClick={()=>handle_add(product.id)}>
                        Add cart
                    </Button>
                </CardBody>
            </Card>
        </Col>
    )
}
