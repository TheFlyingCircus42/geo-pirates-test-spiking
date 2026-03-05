import React, { useState, useEffect, useRef } from "react";
import {Text, View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function TestMap01()
{
    return(
        <View>
            <Text>HELLO From Test Map One Component File</Text>
        </View>
    )
}