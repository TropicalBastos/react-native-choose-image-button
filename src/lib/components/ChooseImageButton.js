import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ImagePicker } from 'expo';
import connectActionSheet from '@expo/react-native-action-sheet/connectActionSheet';

@connectActionSheet
class ChooseImageButton extends Component{

    constructor(props){
        super(props);
        this.pickImage = this.pickImage.bind(this);
        this.launchCamera = this.launchCamera.bind(this);
        this.onOpenActionSheet = this.onOpenActionSheet.bind(this);
        this.imageAction = this.imageAction.bind(this);
        this.callback = (props.callback) ? props.callback: null;
        this.state = {
            image: null
        };
    }

    componentDidUpdate(){
        this.imageAction();
    }

    onOpenActionSheet = () => {
        let options = ['Take Photo', 'Choose From Library', 'Cancel'];
        let cameraIndex = 0;
        let chooseIndex = 1;
        let cancelButtonIndex = 2;
        
        this.props.showActionSheetWithOptions({
          options,
          cancelButtonIndex
        },
        (buttonIndex) => {
          switch(buttonIndex){
                case chooseIndex:
                    this.pickImage();
                    break;
                case cameraIndex:
                    this.launchCamera();
                    break;
                default:
                    break;
          }
        });
      
      }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
          base64: true
        });

        if (!result.cancelled) {
          this.setState({ image: result });
        }
      };

    launchCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: true
          });

          if (!result.cancelled) {
            this.setState({ image: result });
          }
    }

    imageAction(){
        if(this.state.image && this.props.callback)
            this.callback(this.state.image);
    }

    render(){
        return(
            <TouchableOpacity 
            onPress={this.onOpenActionSheet}
            style={this.props.style}>
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

export default ChooseImageButton;