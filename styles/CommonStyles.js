import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create ({container: {flex: 1, backgroundColor: '#fff', marginTop: 10, width: '100%'},scrollContainer: {width: '90%'},

itemsContainer: {marginTop: 10, padding: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10, alignItems: 'stretch', backgroundColor: '#fff'},

inputContainer: {flex: 1, marginTop: 30, marginLeft: '5%', width: '90%', padding: 20, alignItems: 'stretch', backgroundColor: '#fff'},

buttonsContainer: {flexDirection: 'row-reverse', alignItems: 'flex-end', borderBottomWidth: 1, borderBottomColor: '#CCC', paddingBottom: 10, marginTop: 10},

input: {marginTop: 10, height: 60, backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 24, fontSize: 16, alignItems: 'stretch'},

button: {marginTop: 10, marginBottom: 10, height: 60, backgroundColor: 'blue', borderRadius: 10, paddingHorizontal: 24, fontSize: 16, alignItems: 'center', justifyContent: 'center', elevation: 20, shadowOpacity: 20, shadowColor: '#ccc'},

buttonText: {color: '#fff', fontWeight: 'bold'},

buttonTextBig: {color: '#fff', fontWeight: 'bold', fontSize: 24},

textItem: {fontSize: 20},

deleteButton: {marginLeft: 10, height: 40, width: 40, backgroundColor: 'red', borderRadius: 10, padding: 10, fontSize: 12, elevation: 10, shadowOpacity: 10, shadowColor: '#ccc', alignItems: 'center'},

});