import React, { useState, useEffect, useRef } from "react";
import {Text, View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
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

            </MapView>)}


            
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