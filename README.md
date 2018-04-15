# React Native Choose Image Button

* React Native wrappable component
* Choose image or take photo, the resultant image is then passed to a callback you provide
* Optional styles can be passed via props

## Getting Started

Installation

`npm install react-native-choose-image-button --save`

## Example

First wrap your app with the ActionSheetProvider class which serves as a container for
calling the native action popup that shows the options 'Take photo', 'Choose Image' etc...

```javascript
export default class App extends React.Component {
  render() {
    return (
      <ActionSheetProvider>
        <RootApp />
      </ActionSheetProvider>
    );
  }
}
```

Then wrap your target button with the choose image button:

```javascript
import Icon from 'react-native-vector-icons/Ionicons';
import ChooseImageButton from 'react-native-choose-image-button';

const UploadButton = () => {

    return(
        <ChooseImageButton
        callback={someFunction}
        style={someStyle}>
            <Icon name="ios-add"/>
        </ChooseImageButton>
    );

}
```

## Props

| Prop     | Description                                           |
|----------|-------------------------------------------------------|
| style    | An style object to apply styles to the component      |
| callback | The function that receives the resultant base64 image |