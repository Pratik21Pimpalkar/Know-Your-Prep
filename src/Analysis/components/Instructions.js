import React from 'react'
import steps from '../Assets/instruction.png'
import styled from 'styled-components'
const Wrap = styled.div`
li{
    font-weight: 300;
}
b{
    font-weight: 600;
}
`
const Instructions = () => {
    return (
        <Wrap>
            <ul>
                <li>The Aptitude Test will mostly consist of Objective type Multiple Choice Questions (MCQs).</li>
                <li>All questions are compulsory. No negative marking for wrong answers.</li>
                <li>The total number of questions, duration of examination, will differ from test to test.
                </li>
                <li>Please use only laptop/desktop while attempting the test.
                </li>
                <li>Before you take the test, <b>log out </b>of all other google accounts and login only through the account that you shared while registering.
                </li>
                <li>Recommended browsers – Chrome/Firefox.
                </li>
                <li> <b>Do not</b> use Incognito or Private Mode.
                </li>
                <li>Close all other tabs before starting the test.</li>
                <li>Extra Test Attempt <b>Will not be provided </b>if,
                    <ul style={{ marginLeft: "3rem" }}>
                        <li>Students fail to appear for the test within specified timings.
                        </li>
                        <li>Student does not appear for the test.
                        </li>
                        <li>Students appear for tests late / face lack of time. </li>
                        <li>Students ignore instructions and rules.</li>
                        <li>Students do not submit the test properly. </li>
                        <li>Students face internet power failure problems.</li>
                    </ul>
                </li>
                <br /><br />

                <li style={{ fontSize: "1.2rem", listStyle: "none" }}><b>Important: Do not click the “Submit” button unless you have completed the test.</b>
                </li>
                <li>Please enter the correct email Id when asked in the test. you will receive the score only on the email Id that you enter. so please verify it again before submitting the test</li>
                <li>Do not click the “Submit” button unless you have completed the test.</li>
                <li>Please attempt all questions. you will only get to know the correct answer when you attempt the question.</li>

                <br /><br />
                <li style={{ fontSize: "1.2rem", listStyle: "none" }}><b>How to submit the Test</b></li>
                <li>First click on the submit button at the <b>bottom</b> of the test then click the submit button at the <b>top</b> of the test window.
                </li>
                <li>If you do not click the bottom Submit button, <b>your responses will be lost!!</b> So, always click the bottom Submit button first.</li>
                <li>The test will <b>Auto Close</b> after the time limit has reached. So please submit the test within the given time limit or your responses will not be saved.</li>
            </ul>
            <img src={steps} alt="" style={{ height: "20rem" }} />
        </Wrap>
    )
}

export default Instructions