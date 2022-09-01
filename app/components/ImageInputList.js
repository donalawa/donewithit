import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Imageinput from "./Imageinput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();
    
  return (
   <View>
        <ScrollView ref={scrollView} horizontal={true} onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        <View style={styles.container}>
        {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
                <Imageinput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
                />
            </View>
        ))}
        <Imageinput onChangeImage={(uri) => onAddImage(uri) } />
        </View>
      </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10
  }
});
export default ImageInputList;
