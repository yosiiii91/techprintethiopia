import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { configuratorSteps, expertInsights } from '../data/configuratorData';
import '../styles.css';

const ServiceConfigurator = () => {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({});

  const handleSelection = (option) => {
    setSelections((prev) => ({
      ...prev,
      [configuratorSteps[step].id]: option.value,
    }));

    if (step < configuratorSteps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const reset = () => {
    setStep(0);
    setSelections({});
  };

  const currentStep = configuratorSteps[step] || {
    id: '',
    question: 'Error: Step not found',
    options: [],
  };

  const renderDetails = () => {
    const { industry, printerType, innovationHub } = selections;
    const details =
      expertInsights[industry]?.[printerType]?.[innovationHub];
    return (
      <div className="recommendation">
        <h3>
          {`${industry.charAt(0).toUpperCase() + industry.slice(1)} - ${
            printerType.charAt(0).toUpperCase() + printerType.slice(1)
          } - ${innovationHub}`}
        </h3>
        <p>
          {details
            ? details.content
            : 'Details not available for this selection.'}
        </p>
        <button onClick={reset} className="reset-btn">
          Start Over
        </button>
      </div>
    );
  };

  return (
    <motion.section
      className="configurator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{currentStep.question}</h2>
      {currentStep.id === 'details' ? (
        renderDetails()
      ) : (
        <div className="options">
          {currentStep.options.length > 0 ? (
            currentStep.options.map((option, index) => (
              <motion.button
                key={index}
                className="option-btn"
                onClick={() => handleSelection(option)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.label}
              </motion.button>
            ))
          ) : (
            <p>No options available for this step.</p>
          )}
          {step > 0 && (
            <button onClick={handleBack} className="back-btn">
              Back
            </button>
          )}
        </div>
      )}
    </motion.section>
  );
};

export default ServiceConfigurator;
