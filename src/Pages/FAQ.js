import React from 'react';
import { Accordion } from 'react-bootstrap';
import Newheader from '../Components/header';
import Footer from '../Components/footer';

const styles = {
    item: {
        marginBottom: '20px',
        borderRadius: '10px', // Add this line to include border radius
        overflow: 'hidden', // Ensure that overflow is hidden to avoid issues with border-radius
    },
    header: {
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    },
    body: {
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        fontFamily: 'Playfair Display',
    },
};

function FAQ() {
    return (
        <>
            <Newheader />
            <div className='container mt-4 mb-5'>
                <div style={{ backgroundColor: '#1F2937', color: '#fff', padding: '20px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Frequently Asked Questions</h2>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0" style={styles.item}>
                            <Accordion.Header style={styles.header}>What’s the most suitable drug test panel to test for?</Accordion.Header>
                            <Accordion.Body style={styles.body}>The drug free policies of a company often dictate the test panel you will be testing for. You can test for DOT five panel drug test, DOT 10 panel drug test or a ten panel drug test with expanded opiates.</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" style={styles.item}>
                            <Accordion.Header style={styles.header}>What is DOT drug testing?</Accordion.Header>
                            <Accordion.Body style={styles.body}>DOT drug testing is a drug and alcohol testing for safety sensitive employees. The agencies working under the department of transportation are required to have DOT drug testing.

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" style={styles.item}>
                            <Accordion.Header style={styles.header}>What is consortium DOT drug testing?</Accordion.Header>
                            <Accordion.Body style={styles.body}>The consortium drug testing is a program for independent CDL operators. Owner operators can join a consortium where they are randomly tested for drug and alcohol abuse. It is handled by a third-party administrator.</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" style={styles.item}>
                            <Accordion.Header style={styles.header}>What are the signs that drug or alcohol abuse is becoming a major problem at the workplace?</Accordion.Header>
                            <Accordion.Body style={styles.body}>The symptoms may vary from drug to drug. Drug abuse affects the work behaviour in several ways. Some of the signs that indicate that the employee is abusing drugs are:


                                -Late arrival at work.
                                -Not performing the assigned task.
                                -Making mistakes frequently.
                                -Not following the health and safety measures.
                                -Unwilling to take up the responsibilities.
                                -Involved in damaging the property.</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" style={styles.item}>
                            <Accordion.Header style={styles.header}>What are DOT’S procedures and guidelines for direct observation?</Accordion.Header>
                            <Accordion.Body style={styles.body}>The Department of transportation makes it mandatory for employees to be screened for drug abuse pre-employment, post accident and sometimes on random basis. Direct observation tests may be required if there are certain grounds to believe that the sample has been tampered or there is a suspicion of foul play. The DOT’S direct observation policy is outlined below:


                                The direct observation test is required when:
                                -The sample has been tampered at the collection site.
                                -The specimen contains unusual odor and discoloration.
                                The following are the rules governing direct observation:
                                -The observer and the person who is to be tested must be of the same gender.
                                -If the collector and observer are different, the collector must guide the observer on how to identify foul play.
                                -The observer can check the employee to ensure that there isn’t any hidden tampering device.
                                -The observer will inform the collector if there is any hidden evidence found with the employee. If no hidden device is found, the observer may continue -observing the specimen until it is handed to the collector.

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" style={styles.item}>
                            <Accordion.Header style={styles.header}>Is it right to drug test a new employer after an offer of employment is made?</Accordion.Header>
                            <Accordion.Body style={styles.body}>Yes, it’s legal to drug test a new hire after making an offer of employment. There aren’t any state or federal laws prohibiting it.</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" style={styles.item}>
                            <Accordion.Header style={styles.header}>What consequences will the driver have to face if he doesn’t have a pre-employment test for DOT?</Accordion.Header>
                            <Accordion.Body style={styles.body}>It’s mandatory for DOT covered employees to have a negative pre-employment test for DOT. In case of failure, the carrier may be charged with non-compliance, monetary fine, or placed out of service. So, if your drivers do not have a negative pre-employment test, you must immediately get them tested.

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7" style={styles.item}>
                            <Accordion.Header style={styles.header}>How to identify if I want my employees to have a DOT drug test or Non DOT drug test?</Accordion.Header>
                            <Accordion.Body style={styles.body}>The employees who are designated as “safety sensitive” employees qualify for DOT drug and alcohol testing. A safety sensitive employee is the one who holds a position that impacts his own safety as well as the safety of the public.</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8" style={styles.item}>
                            <Accordion.Header style={styles.header}>Who decides whether a DOT drug or alcohol test is required post accident or not?</Accordion.Header>
                            <Accordion.Body style={styles.body}>The supervisor available at the accident scene decides whether a drug test is required post an accident or not. He must be aware of the testing criteria and make a good decision on the basis of information available. Additionally, he must also give proper reasons if the test isn’t conducted within the required time.</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9" style={styles.item}>
                            <Accordion.Header style={styles.header}>What is meant by DOT Five panel test?</Accordion.Header>
                            <Accordion.Body style={styles.body}>5 Panel drug test is a urine test to detect the presence of common drugs in employees. Initially, the five panel test included the following drugs for detection:
                                1. Marijuana metabolites
                                2. Cocaine metabolites
                                3. Phencyclidine
                                4. Opioids
                                5. Amphetamines



                                From January 1, 2018, the 5 panel drug test screens for the following drugs:
                                1. Marijuana
                                2. Cocaine

                                3. Amphetamines
                                * Amphetamine
                                * Methamphetamine
                                * MDMA
                                * MDA

                                4. Opioids
                                * Codeine
                                * Morphine
                                * 6-AM (heroin)
                                * Hydrocodone
                                * Hydromorphone
                                * Oxycodone
                                * Oxymorphone

                                5. Phencyclidine</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FAQ;
