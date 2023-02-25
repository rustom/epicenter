import { StyleSheet, Text, View } from "react-native";

const steps = [
    {
        number: 1,
        title: "Stay Indoors",
        body: "Stay indoors until the shaking stops. If you are in a building, stay there until the shaking stops and it is safe to exit. "
    },
    {
        number: 2,
        title: "Drop, Cover, and Hold On",
        body: "If you are indoors, drop to the ground, take cover under a sturdy table or desk, and hold on until the shaking stops. "
    },
    {
        number: 3,
        title: "Stay Informed",
        body: "Listen to the radio or television for the latest emergency information. If you have a cell phone, use it to call friends and family. "
    }
];

export const WarningPage = () => (
    <View style={{ flex: 1, backgroundColor: '#161819' }}>
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Earthquake Advisory:</Text>
                <Text style={styles.cardBody}>A minor earthquake has been recorded in your area. Please stay alert and be prepared for potential aftershocks. If you experience any damage to your property or see any signs of damage to infrastructure, report it immediately to local authorities. Stay safe and stay informed.</Text>
            </View>

            <View style={styles.helpSteps}>
                <Text style={styles.helpStepTitle}>Here are the steps you should take:</Text>

                {
                    steps.map(({ number, title, body }, index) => {
                        return (<View style={styles.step}>
                            <View style={styles.stepNumberContainer}><Text style={styles.stepNumber}>{number}</Text></View>
                            <View style={{
                                width: 14
                            }} />
                            <View style={styles.stepText}>
                                <Text style={styles.stepTitle}>{title}</Text>
                                <Text style={styles.stepBody}>{body}</Text>
                            </View>
                        </View>
                        )

                    })


                }




            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
        color: 'white',
        borderTopWidth: 1,
        borderColor: "#4B4B4B",
    },
    card: {
        backgroundColor: "#1F1F1F",
        padding: 16,
        borderWidth: 1,
        borderColor: "#4B4B4B",
    },
    cardTitle: {
        color: "#F4B000",
        fontSize: 16,
        fontWeight: "bold",
        paddingBottom: 10
    },
    cardBody: {
        fontSize: 15,
        color: "#9D9D9D",
    },
    helpSteps: {
        width: "100%",
    },
    helpStepTitle: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        paddingVertical: 16,
    },
    stepNumberContainer: {
        display: "flex",
        width: 32,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#473913",
        height: 32,
        borderRadius: 4,
    },
    stepNumber: {
        color: "#F4B000",
        fontSize: 20,
        fontWeight: "bold",
        opacity: 1,
    },
    step: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 16,
    },
    stepText: {
        width: "100%",
    },
    stepTitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff",
        paddingBottom: 6
    },
    stepBody: {
        fontSize: 15,
        width: "90%",
        color: "#9D9D9D",
        paddingBottom: 8
    }
});