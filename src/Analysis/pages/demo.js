import React, { useState, useEffect } from "react";
import { Steps } from "intro.js-react";
function Demo(props) {
  const [state, setState] = useState({
    stepsEnabled: false,
    initialStep: 0,
    showProgress: true,
    steps: [
      {
        element: ".user-detail",
        intro:
          "<b>About User</b><br/> Share your public profile with friends and on social media",
        position: "right",
      },
      {
        element: ".overall-analysis",
        intro:
          "<b>Score Distribution</b><br/> Distribution of score between different subjects/topics",
      },
      {
        element: ".levelwise-analysis",
        intro:
          "<b>Levelwise Distribution</b><br/> Distribution of score according to level - easy, medium and hard",
      },
      {
        element: ".correct-analysis",
        intro:
          "<b>No of correct and incorrect questions</b> of each subject/topic",
        position: "right",
      },
      {
        element: ".subjectWise-analysis",
        intro:
          "<b>Hard and weak topics</b><br/> Analyze your weakness and improve on them",
      },
    ],
  });
  const options = {
    showProgress: true,
  };

  useEffect(() => {
   toggleSteps();
  },[props.demoStatus]);
  const onExit = () => {
    setState((prev) => ({ ...prev, stepsEnabled: false }));
  };

const toggleSteps = () => {
    setState(prev => ({...prev,stepsEnabled: !prev.stepsEnabled }));
  
};
  return (
    <div>
      <Steps
        enabled={state.stepsEnabled}
        // enabled={true}
        options={options}
        steps={state.steps}
        initialStep={state.initialStep}
        onExit={onExit}
      />
      {/* <button class="world" onClick={toggleSteps}>
        Start Tutorial
      </button> */}
    </div>
  );
}

export default Demo;
