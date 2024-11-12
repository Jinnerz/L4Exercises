import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// ==========EXERCISE 1==========
// const Exercise1 = () => {
//   return (
//       <View>
//         <Text>Exercise 1</Text>
//         <Text style={{fontSize: 24}}>RP Values</Text>
//         <Text style={{color:'green'}}>Excellence</Text>
//         <Text style={{backgroundColor:'yellow'}}>Customer-Centric</Text>
//         <Text style={{fontStyle:'italic'}}>Integrity</Text>
//         <Text style={{alignSelf:'center'}}>Teamwork</Text>
//         <Text style={{backgroundColor:'black',color:'white'}}>Enterprising</Text>
//       </View>
//   )
// }

// ==========EXERCISE 2==========
// const styles = StyleSheet.create({
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     backgroundColor: "green",
//     borderColor: "black",
//     borderWidth: 1
//   },
//   boxText: {
//     textAlign: "center",
//     color: "white"
//   },
//   title: {
//     fontWeight: "bold"
//   },
// });
//
// const Exercise2 = () => {
//   return (
//       <View style={{marginTop: 50, marginLeft: 20}}>
//         <View>
//           <Text style={[styles.greenBox, styles.boxText, styles.title]}>Who We Are</Text>
//         </View>
//         <View>
//           <Text style={[styles.greenBox, styles.boxText, styles.title]}>Our People</Text>
//         </View>
//         <View>
//           <Text style={[styles.greenBox, styles.boxText, styles.title]}>Our Campus</Text>
//         </View>
//       </View>
//   )
// };

// ==========EXERCISE 3A==========
// const styles = StyleSheet.create({
//   Parent: {
//     marginTop: 50,
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });
//
// const Exercise3A = () => {
//   return (
//       <View style={styles.Parent}>
//         <Text style={[styles.Child, {backgroundColor:"powderblue"}]}>Child One</Text>
//         <Text style={[styles.Child, {backgroundColor:"skyblue"}]} >Child Two</Text>
//         <Text style={[styles.Child, {backgroundColor:"steelblue"}]}>Child Three</Text>
//       </View>
//   )
// };

// ==========EXERCISE 3B==========
// const styles = StyleSheet.create({
//   Parent: {
//     marginTop: 50,
//     flexDirection: 'column',
//     flex: 1,
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     flex: 1
//   }
// });
//
// const Exercise3B = () => {
//   return (
//       <View style={styles.Parent}>
//         <Text style={[styles.Child, {backgroundColor:"powderblue"}]}>Child One</Text>
//         <Text style={[styles.Child, {backgroundColor:"skyblue"}]} >Child Two</Text>
//         <Text style={[styles.Child, {backgroundColor:"steelblue"}]}>Child Three</Text>
//       </View>
//   )
// };

// ==========EXERCISE 3C==========
// const styles = StyleSheet.create({
//   Parent: {
//     marginTop: 50,
//     flexDirection: 'column',
//     flex: 1,
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     flex: 1
//   }
// });
//
// const Exercise3C = () => {
//   return (
//       <View style={styles.Parent}>
//         <Text style={[styles.Child, {backgroundColor:"powderblue", maxWidth: 90}]}>Child One</Text>
//         <Text style={[styles.Child, {backgroundColor:"skyblue"}]} >Child Two</Text>
//         <Text style={[styles.Child, {backgroundColor:"steelblue", maxHeight: 120}]}>Child Three</Text>
//       </View>
//   )
// };

// ==========EXERCISE 3D==========
// const styles = StyleSheet.create({
//   Parent: {
//     marginTop: 50,
//     flexDirection: 'row',
//
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//
//   }
// });
//
// const Exercise3D = () => {
//   return (
//       <View style={styles.Parent}>
//         <Text style={[styles.Child, {backgroundColor:"powderblue", flex: 1}]}>Child One</Text>
//         <Text style={[styles.Child, {backgroundColor:"skyblue", flex: 2}]} >Child Two</Text>
//         <Text style={[styles.Child, {backgroundColor:"steelblue", flex: 3}]}>Child Three</Text>
//       </View>
//   )
// };

// ==========EXERCISE 3E==========
// const styles = StyleSheet.create({
//   Parent: {
//     marginTop: 50,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex:1,
//     justifyContent: 'flex-start',
//     // justifyContent: 'flex-end',
//     // justifyContent: 'space-around',
//     // justifyContent: 'space-between',
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//
//   }
// });
//
// const Exercise3E = () => {
//   return (
//       <View style={styles.Parent}>
//         <Text style={[styles.Child, {backgroundColor:"powderblue"}]}>Child One</Text>
//         <Text style={[styles.Child, {backgroundColor:"skyblue"}]} >Child Two</Text>
//         <Text style={[styles.Child, {backgroundColor:"steelblue"}]}>Child Three</Text>
//       </View>
//   )
// };

// ==========EXERCISE 4==========
const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    Child: {
        width: 80,
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

const Exercise4 = () => {
    return (
        <View style={styles.Parent}>
            <Text style={[styles.Child, {backgroundColor: "lightblue"}]}>Square 1</Text>
            <Text style={[styles.Child, {backgroundColor:"lightgreen"}]}>Square 2</Text>
            <Text style={[styles.Child, {backgroundColor:"red"}]}>Square 3</Text>
        </View>
    )
};

export default Exercise4;
