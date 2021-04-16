import React from 'react';
import {View, Text} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJz_JtGdlxShMRpBLxGyJcWiM&language=EN&fields=address_component&key=AIzaSyBk57QJqOjVuy8T2qbDKB_mcPYP4vqfBW0',
    )
      .then(response => response.json())
      .then(record => console.log(record));
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

export default App;
