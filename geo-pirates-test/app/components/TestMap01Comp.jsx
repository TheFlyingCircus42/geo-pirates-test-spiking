import React, { useState, useEffect, useRef } from "react";
import {Text, View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, Circle, Polygon } from "react-native-maps";
import * as Location from "expo-location";

export default function TestMap01()
{
    const [location, setLocation] = useState(null);
    const locationSubscription = useRef(null);

    useEffect(()=>
        {
            startWatchingLocation();
            return () => 
                {
                    if (locationSubscription.current) 
                        {
                            locationSubscription.current.remove()
                        }
                }
        },[]);

        async function startWatchingLocation () 
        {
            const permissionResp = await Location.requestForegroundPermissionsAsync();
            if (permissionResp.status !== "granted") return;

            locationSubscription.current = await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    timeInterval: 2000,
                    distanceInterval: 1,
                } ,
                (newLocation) => 
                    {
                        setLocation(newLocation.coords);                        
                    }
            );
        }

        let inBox = false;

if (location) {
  if (
    location.latitude < 51.57752793530087 &&
    location.latitude > 51.57696119513244 &&
    location.longitude > -0.11025236697706796 &&
    location.longitude < -0.10914729691404394
  ) {
    inBox = true;
  }
}

    return(<View>
        <View>
            <Text>HELLO From Test Map One Component File</Text>
        </View>
        <View>
            <Text>MAP:</Text>
        </View>
        <View  >
           
           {location && (
            <MapView 
            style={styles.map}
            region=
            {
                {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                }
            }>
                <Marker 
                coordinate={location} 
                title="This is you!"
                pinColor="red"/>

                <Marker
                coordinate={{latitude: 51.57622609061976, longitude: -0.11429785672570954 }}
                title="This is treasure"
                pinColor="yellow" />

                <Circle 
                center={{latitude: 51.57607439925355, longitude: -0.11417912090093232}}
                radius={50}
                strokeWidth={2}
                strokeColor="rgb(19, 21, 6)"
                fillColor="rgba(241, 255, 112, 0.33)"/>


                <Marker
                coordinate={{latitude: 51.576554471358136, longitude: -0.1123659476897354}}
                title="This is treasure"
                pinColor="yellow" />

                <Circle 
                center={{latitude: 51.576554471358136, longitude: -0.1123659476897354}}
                radius={50}
                strokeWidth={2}
                strokeColor="rgb(19, 21, 6)"
                fillColor="rgba(241, 255, 112, 0.33)"/>
    
                <Polygon
                    coordinates={[
                       {latitude: 51.57722789726852, longitude: -0.11025236697706796},
                       {latitude: 51.57752793530087, longitude: -0.10937260246087407},
                       {latitude: 51.577221229734185, longitude: -0.10914729691404394},
                       {latitude: 51.57696119513244, longitude: -0.10982321355453437}
                    ]}
                      strokeColor="red"
                        fillColor="rgba(255,0,0,0.3)"
                        strokeWidth={2} />

               
            </MapView>)}

{location && (
<Text>
  Lat: {location.latitude.toFixed(6)} | 
  Lon: {location.longitude.toFixed(6)} |
  Accuracy: {location.accuracy}m
</Text>
)}



{inBox && (
  <Text style={{fontSize: 20, padding: 10}}>
    You are inside the treasure zone!
  </Text>
)}
            
        </View>
    </View>)
}

const styles = StyleSheet.create(
    {
        container: { flex: 1},
        map: {
            width: Dimensions.get("window").width,
            height: 300,
        }
    });