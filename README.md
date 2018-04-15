# React Native Choose Image Button

* React Native wrappable component
* Choose image or take photo, the resultant image is then passed to a callback you provide
* Optional styles can be passed to props

## Getting Started

Installation

`npm install react-native-choose-image-button --save`

## Example

First wrap your app with the ActionSheetProvider class which serves as a container for
calling the native action popup that shows the options 'Take photo' 'Choose Image' etc...

```javascript
export default class App extends React.Component {
  render() {
    return (
      <ActionSheetProvider>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </ActionSheetProvider>
    );
  }
}
```

Then wrap your target button with the choose image button:

```javascript
import Icon from 'react-native-vector-icons/Ionicons';
import ChooseImageButton from '../other/ChooseImageButton';

const UploadButton = () => {

    return(
        <ChooseImageButton>
            <Icon name="ios-add"/>
        </ChooseImageButton>
    );

}
```

# Props
`callback`: `The function that receives the resultant base64 image`
`style`: `An style object to apply styles to the component`