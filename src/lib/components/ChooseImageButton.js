import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { ImagePicker } from 'expo';
import connectActionSheet from '@expo/react-native-action-sheet/connectActionSheet';

@connectActionSheet
class ChooseImageButton extends Component{

    constructor(props){
        super(props);
        this.onLoading = (props.onLoading) ? props.onLoading: null;
        this.pickImage = this.pickImage.bind(this);
        this.launchCamera = this.launchCamera.bind(this);
        this.onOpenActionSheet = this.onOpenActionSheet.bind(this);
        this.imageAction = this.imageAction.bind(this);
        this.onComplete = (props.onComplete) ? props.onComplete: null;
        this.cancel = this.cancel.bind(this);
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

    cancel(){
        if(this.onComplete){
            this.onComplete();
        }
    }

    pickImage = async () => {
        if(this.onLoading) this.onLoading();
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
          base64: true
        });

        if (!result.cancelled) {
          this.setState({ image: result });
        }else{
            this.cancel();
        }
      };

    launchCamera = async () => {
        if(this.onLoading) this.onLoading();
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: true
          });

          if (!result.cancelled) {
            this.setState({ image: result });
          }else{
              this.cancel();
          }
    }

    imageAction(){
        if(this.state.image && this.props.onComplete){
            this.onComplete(this.state.image);
            this.setState({
                image: null
            });
        }
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