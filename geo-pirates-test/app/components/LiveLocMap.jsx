import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function LiveLocMap() {
  const [location, setLocation] = useState(null);
  const locationSubscription = useRef(null);

    

  useEffect(() => {
    startWatchingLocation();

    return () => {
      // cleanup when component unmounts
      if (locationSubscription.current) {
        locationSubscription.current.remove();
      }
    };
  }, []);

  const startWatchingLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") return;

    locationSubscription.current = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 2000,     // update every 2 seconds
        distanceInterval: 1,    // or when moved 1 meter
      },
      (newLocation) => {
        setLocation(newLocation.coords);
      }
    );
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          // does not work - need api key or something?        
          // provider = { MapView.PROVIDER_GOOGLE }
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={location} title="You are here" />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    width: Dimensions.get("window").width,
    height: 300,
  },
});