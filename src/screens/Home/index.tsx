import { styles } from './styles';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image} from 'react-native';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {
    
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');
    const [participantsCount, setParticipantsCount] = useState(0);

    function handleParticipantAdd(){
        
        if(participants.includes(participantName)){
            return Alert.alert('Participante existe', 'Já existe o participante cadastrado!')
        }
        setParticipants(prevState => [...prevState,participantName])
        //return Alert.alert("Participante Cadastrado","Participante cadastrado com sucesso!")
        setParticipantsCount(prevCount => prevCount +1);

        //limpar o campo - precisa alterar no value do TextInput
        setParticipantName('');

    }
    
    function handleParticipantRemove(name: string){
        //return console.log(participants.filter(participant => participant !== name));
        
        
        return Alert.alert("Remover",`Deseja remover o ${name}?`,[
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },{
                text: 'Não',
                style: 'cancel'
            }
        ]);

        //console.warn(`Vc removeu o participante ${name}`);
    }

    return ( 
      <View style={styles.container}>
        <View style={styles.logo}>
        <Image source = {require('../../../assets/Logo.png')} style= {{width: 150, height: 90, resizeMode:'contain', }}/>
        
        </View>

        <View style={styles.container2}>

        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Adicione uma nova Tarefa"
                placeholderTextColor="#6B6B6B"
                //onChangeText={text => setParticipantName(text)}//evento para quando alterar algo no componente
                onChangeText={setParticipantName}
                value={participantName}
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}> +  </Text>
            </TouchableOpacity>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 8, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
             
        <Text style={styles.textTask}>Criadas <View style = {{paddingHorizontal:8, backgroundColor: '#333333', borderRadius: 10}}><Text style={{color:'white'}}>{participantsCount}</Text></View></Text>

                <Text style={styles.textTask2}>Concluídas</Text>
            </View>

        <View style={{ borderColor: '#6F6F6F', borderWidth: 1, width: '98%', marginBottom: 30, opacity: 0.8, borderRadius: 100,}}></View>

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant 
                key={item}
                name= {item}
                onRemove={() => handleParticipantRemove(item)}
        
            />
            )}
            showsVerticalScrollIndicator= {false}
            ListEmptyComponent={() => (
                
                <View style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                    <View><Image source= {require('../../../assets/LIST.png')}style = {{alignItems: 'center', resizeMode:'contain',top: 0, justifyContent:'center', height:50 , width:290, marginBottom:20 }}/></View>
                    <Text style={{color: '#797979', fontSize: 14, textAlign: 'center', fontWeight: 'bold'}}>
                        Você ainda não tem tarefas cadastradas
                    </Text>
                    <Text style= {{fontWeight: '400', color: '#6b6b6b'}}>
                        Crie tarefas e organize seus itens a fazer
                    </Text> 
                </View>

                
            )}
        />
    
        
        {/*<ScrollView showsVerticalScrollIndicator={false}>
            {
                participants.map(participant => (
                    <Participant 
                        key={participant}
                        name= {participant}
                        onRemove={() => handleParticipantRemove("Ana Maria")}
                    />
                ))
            }
        </ScrollView>*/}

        
       
      </View>
      </View>
    )
  }
  