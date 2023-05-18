import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems:'center', 
      justifyContent:'center', 
      flex: 1,
      backgroundColor: '#1a1a1a',
      padding: 24,
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },
    input: {
        flex: 1,/*ocupar todo o espaço */
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:'#310F67',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginBottom: 42,
        marginTop: '26%', 
    },
    listEmptyText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center',
    },
    logo:{
        position: 'absolute',
        top: 0,
        backgroundColor: '#0d0d0d',
        display:'flex',
        justifyContent:'center',
        width:'150%',
        alignItems: 'center',
        paddingBottom:30,
        paddingTop:20,

    },
    container2:{
        marginBottom: 500
    },
    textTask:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#4eaae2',
        marginRight: 150,
        marginBottom:3,
    },
    textTask2:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#7d7ff0',
        marginBottom:3,
    }
  });