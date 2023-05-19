import {View, Text,TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

type Props = {
    name: string;
    onRemove: () => void;
}

export function Participant({name, onRemove} : Props){
    return(
        <View style={styles.container}>
                <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
            <Text style={styles.name}>
                {name}
            </Text>


            
        <TouchableOpacity>
                <Image
            source={require('../../../assets/Trash.png')}
            style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 15 }}
          />
            </TouchableOpacity>
        </View>
    )
}