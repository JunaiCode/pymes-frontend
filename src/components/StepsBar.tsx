const StepsBar = ({activeStep}: {activeStep: any}) => {
    const steps = [1, 2 , 3, 4, 5];
    return (
        <div>
        <div className="flex justify-center items-center bg-dark">
            {steps.map((step, index) => (
            <span className="mr-2 text-lg cursor-pointer  rounded-full border border-gray-300 px-2 py-1 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                key={step}
                style={{
                color: activeStep === index ? 'blue' : 'black',
                }}
            >
                {step}
            </span>
            ))}
        </div>
        </div>
    );
    }
export default StepsBar;