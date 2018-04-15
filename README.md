# React Native Choose Image Button

* React Native wrappable component
* Choose image or take photo, the resultant image is then passed to a callback you provide
* Optional styles can be passed via props

<img width="25%" src="https://github.com/TropicalBastos/react-native-choose-image-button/blob/master/assets/screenshot.png?raw=true" />

## Getting Started

Installation

`npm install react-native-choose-image-button --save`

## Example

This library uses the `@expo/react-native-action-sheet` dependency so first wrap your app with the ActionSheetProvider class which serves as a container for
calling the native action popup that shows the options 'Take photo', 'Choose Image' etc...

```javascript
import { ActionSheetProvider, connectActionSheet } from '@expo/react-native-action-sheet';

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
        onLoading={someFunction}
        onComplete={someFunction}
        style={someStyle}>
            <Icon name="ios-add"/>
        </ChooseImageButton>
    );

}
```

## Props

| Prop       | Description                                                           |
|------------|-----------------------------------------------------------------------|
| style      | An style object to apply styles to the component                      |
| onLoading  | The function that is called when the image is buffering and loading   |
| onComplete | The function that receives the resultant base64 image                 |