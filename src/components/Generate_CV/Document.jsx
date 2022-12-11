import {useContext} from 'react'
import { Document, Page, Text, View, StyleSheet,  Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
        backgroundColor: '#F0F8FF'

	},
    section1: {
        display:'flex',
        flexDirection: 'row',
        padding:'20px',
        borderBottom:'1px solid #5c5fbc',
        width:'90%',
        marginLeft:'10px'
    },
    section1_part1:{
        display:'flex',
        flexDirection:'column',
        marginRight:'10px',
        width:'50%',
        paddingRight:'20px',
        borderRight:'1px solid black',

    },
    section1_part2:{
        display:'flex',
        flexDirection:'column',
        width:'50%'
    },
    names:{
        color:'#5c5fbc',
        fontSize:'18px',
        fontWeight:'500',
        // borderBottom:'2px solid #5c5fbc',
        // width:'fit-content'
    },
    position:{
        fontSize:'15px',
        fontWeight:'400',
        marginBottom:'5px'
    },
    description:{
        fontSize:'10px',
        fontWeight:'300'
    },
    contact:{
        fontSize:'12px'
    },
    section2:{
        display:'flex',
        flexDirection: 'row',
        padding:'20px',
        borderBottom:'1px solid #5c5fbc',
        width:'90%',
        marginLeft:'10px',
    },
    skill:{
        marginRight:'10px',
        backgroundColor:'#5c5fbc',
        color:'white',
        padding:'5px',
        borderRadius:'5px',
        fontSize:'12px'
    },
    section3:{
        display:'flex',
        flexDirection: 'row',
        padding:'20px',
        borderBottom:'1px solid #5c5fbc',
        width:'90%',
        marginLeft:'10px',
    },
    education:{
        display:'flex',
        flexDirection:'column',
        width:'50%',
        marginRight:'10px'
    },
    subcategory:{
        display:'flex',
        flexDirection:'column',
        padding:'5px'
    },
    degree:{
        fontSize:'15px',
        fontWeight:'700',
        color:'#5c5fbc'
    },
    institue:{
        fontSize:'13px',
        fontWeight:'500',
        color:'#5c5fbc'
    },
    dateview:{
        display:'flex',
        flexDirection:'row'
    },
    date:{
        fontSize:'10px',
        fontStyle:'italic'
    },
    section4:{
        display:'flex',
        flexDirection: 'column',
        padding:'20px',
        borderBottom:'1px solid #5c5fbc',
        width:'90%',
        marginLeft:'10px',
    },
    project:{
        fontSize:'15px',
        fontWeight:'400',
        marginTop:'5px'
    },
    
   
});

const Documents = ({value}) => {
    console.log(value)
  return (
    <Document>
		<Page style={styles.page} size="A4">

            <View style={styles.section1}>
                <View style={styles.section1_part1}>
                    <Text style={styles.names}>{value.names}</Text>
                    <Text style={styles.position}>{value.position}</Text>
                    <Text style={styles.description}>{value.description}</Text>
                </View>
                <View style={styles.section1_part2}>
                    <Text style={styles.contact}>{value.contact.email}</Text>
                    <Text style={styles.contact}>{value.contact.phone}</Text>
                    <Text style={styles.contact}>{value.contact.location}</Text>
                    <Text style={styles.contact}>{value.contact.linkedin}</Text>
                    <Text style={styles.contact}>{value.contact.github}</Text>
                    <Text style={styles.contact}>{value.contact.twitter}</Text>
                </View>
            </View>

            <View style={styles.section2}>
                {value.skills.map((skill,index)=>(
                    <Text style={styles.skill} key={index}>{skill.label}</Text>
                ))}
            </View>

            <View style={styles.section3}>
                <View style={styles.education}>
                <Text style={styles.names}>EDUCATION</Text>
                    {value.education.map((edu,index)=>(
                        <View key='firstview' style={styles.subcategory}>
                            <Text key={index} style={styles.degree}>{edu.degree}</Text>
                            <Text key={index} style={styles.institue}>{edu.institute}</Text>
                            <View key='firstdate' style={styles.dateview}>
                                <Text key={index} style={styles.date}>{edu.start}-</Text>
                                <Text key={index} style={styles.date}>{edu.end}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={styles.education}>
                <Text style={styles.names}>WORK EXPERIENCE</Text>
                    {value.work.map((wk,index)=>(
                            <View key='secondview' style={styles.subcategory}>
                                <Text key={index} style={styles.degree}>{wk.position}</Text>
                                <Text key={index} style={styles.institue}>{wk.company}</Text>
                                <View key='firstdate' style={styles.dateview}>
                                    <Text key={index} style={styles.date}>{wk.start}-</Text>
                                    <Text key={index} style={styles.date}>{wk.end}</Text>
                                </View>
                            </View>
                        ))}
                </View>
            </View>

            <View style={styles.section4}>
                <Text style={styles.names}>PROJECTS</Text>
                {value.projects.map((project,ind)=>(
                    <Text style={styles.project} key={ind}>- {project.project}</Text>
                ))}
            </View>

            <View style={styles.section4}>
                <Text style={styles.names}>CERTIFICATES</Text>
                {value.certificates.map((cert,ind)=>(
                    <Text style={styles.project} key={ind}>- {cert.certificate}</Text>
                ))}
            </View>


		</Page>
    </Document>
  )
}

export default Documents