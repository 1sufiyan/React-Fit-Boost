// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import img2 from "../Assets/2.jpg"


// function BasicExample() {
//     return (
//         <div className='Column' style={{marginTop:"60px"}}>
//             <div className="row">
//                 <div className='col-lg-4 col-md-6 col-sm-12'>
//                     <Card style={{ width: '350px' }}>
//                         <Card.Img variant="top" src={img2} />
//                         <Card.Body>
//                             <Card.Title>Card Title</Card.Title>
//                             <Card.Text>
//                                 Some quick example text to build on the card title and make up the
//                                 bulk of the card's content.
//                             </Card.Text>
//                             <Button variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                     </Card>

//                     <Card style={{ width: '350px' }}>
//                         <Card.Img variant="top" src={img2} />
//                         <Card.Body>
//                             <Card.Title>Card Title</Card.Title>
//                             <Card.Text>
//                                 Some quick example text to build on the card title and make up the
//                                 bulk of the card's content.
//                             </Card.Text>
//                             <Button variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                     </Card>
//                     <Card style={{ width: '350px' }}>
//                         <Card.Img variant="top" src={img2} />
//                         <Card.Body>
//                             <Card.Title>Card Title</Card.Title>
//                             <Card.Text>
//                                 Some quick example text to build on the card title and make up the
//                                 bulk of the card's content.
//                             </Card.Text>
//                             <Button variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default BasicExample;



import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from "react-bootstrap";

function GroupExample() {
    return (
        <div style={{ margin: "60px 40px 60px 40px" }}>
            <h1 style={{textAlign:"center"}}>Our Featured Products</h1>
            <CardGroup>
                <Card style={{ margin: "20px", borderRadius: "25px" }}>
                    <Card.Img style={{ borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }} variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="primary">Buy Now</Button>
                    </Card.Footer>
                </Card>
                <Card style={{ margin: "20px", borderRadius: "25px" }}>
                    <Card.Img style={{ borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }} variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card style={{ margin: "20px", borderRadius: "25px" }}>
                    <Card.Img style={{ borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }} variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
}

export default GroupExample;