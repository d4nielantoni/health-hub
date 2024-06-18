import { useState } from "react";

export function useForm(steps){
    const [currentStep, setCurrentStep] = useState[0];

    function changeStep(i, e){
        if (e) e.preventDefault();

        if(i < 0 || i>=steps.lenght) return

        setCurrentStep(i)
    }

    return{
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.lenght ? true : false,
        isFirstStep: currentStep === 0 ? true : false,
    };
}