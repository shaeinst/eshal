/*
This exporter is user to export the native packages (provided by react native).
Meaning instead of importing directly from the package, we import from this file.

example:
instead of:
    import { useQuery } from 'react-query'
we use:
    import { useQuery } from '$native'
**/

export { default as React, useEffect, useState, useRef, useLayoutEffect } from 'react'

export { StyleSheet, View, Text, Linking, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
