import React, { Component } from 'react';
import './Card';

// import img_1 from './images/image_1.jpg';
// import img_2 from './images/image_2.jpg';
// import img_3 from './images/image_3.jpg';

// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';

import Cards, { Card } from 'react-swipe-deck';


const data = ["img_1", "img_2", "img_3"]

class Patti extends Component {
  constructor() {
    super();

    this.action = this.action.bind(this);
  }

  action(e) {
    console.log(e);
  }


  render() {
    
    return (
      <div 
      >
        <Cards onEnd={()=> this.action('end')} className='master-root' className="cards">
        {data.map(item =>
          <Card
            onSwipeLeft={()=> this.action('swipe left')}
            onSwipeRight={()=> this.action('swipe right')}>
            <h2>{item}</h2>
            <img src={item} alt="" width="100px" height="150px" />
          </Card>
        )}
      </Cards>

      </div>
    );
  }
}

export default Patti;





// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';

// import Cards, { Card } from 'react-swipe-card'

// class App extends Component {
//   render() {
    
//     return (
//       <div className="App">
//    <Card>
//         <CardImg top width="20%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Card title</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//       </div>
//     );
//   }
// }

// export default App;




// <Swing
//   className="stack"
//   tagName="div"
//   setStack={stack => this.setState({ stack: stack })}
//   ref="stack"
//   throwout={e => console.log('throwout', e)}
// >
//   {/*
//             children elements is will be Card
//         */}
//   <div className="card clubs" ref="card1" throwout={e => console.log('card throwout', e)}>
//     ♣
//   </div>
//   <div className="card diamonds" ref="card2">
//     ♦
//   </div>
//   <div className="card hearts" ref="card3">
//     ♥
//   </div>
//   <div className="card spades" ref="card4">
//     ♠
//   </div>
// </Swing>