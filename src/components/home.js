import React, { PropTypes as T } from 'react';
import Helmet from 'react-helmet';
import { Carousel } from './carousel';
import { addComponent, removeComponent, showComponent } from '../utils';

import Container from './container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  key = 0;

  handleAdd = () =>
    addComponent(
      this.carousel,
      <Name name={`Component #${++this.key}`}
        key={this.key}
      />
    );

  handleRemove = () => removeComponent(this.carousel);

  render() {
    const style = {
      display: 'flex',
      justifyContent: 'space-between',
      height: '500px'
    };

    const elems = [
      <Name name={`Component #${this.key}`} key={this.key} />,
      <Name name={`Component #${++this.key}`} key={this.key} />,
      <Name name={`Component #${++this.key}`} key={this.key} />,
      <Name name={`Component #${++this.key}`} key={this.key} />
    ];

    return (
      <Container>
        <Helmet title="Home" />
        <Carousel
          ref={car => { this.carousel = car; }}
          style={style}
        >
          {elems}
        </Carousel>
        <button onClick={this.handleAdd}>Add Component</button>
        <button onClick={this.handleRemove}>Remove Component</button>
        <button onClick={() => showComponent(this.carousel, '0')}>Show 0</button>
      </Container>
    );
  }
}

const Name = ({ name }) => <span>Hello {name}!</span>; // eslint-disable-line

Name.propTypes = {
  name: T.string
};

export default Home;
