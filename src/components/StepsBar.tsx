const StepsBar = ({activeStep}: {activeStep: any}) => {
    const steps = [1, 2 , 3, 4, 5];
    return (
        <>
        <div className="flex justify-around items-center bg-light_bg h-24 overflow-x-hidden">
        {steps.map((step, index) => (
          <div key={step} className={`relative z-0 flex-shrink-0`}>
            <span
              className={`text-lg cursor-pointer rounded-full py-4 px-6 text-center ${
                index <= activeStep ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-300 hover:text-gray-900'
                }`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <span
                className={` pr-20 sm:pr-32 md:pr-20 lg:pr-20 xl:pr-52 absolute top-1/2 h-3 stepbar w-full    ${
                  activeStep >= index + 1 ? 'bg-primary' : 'bg-gray_80'
                  }`}
              ></span>
            )}
          </div>
        ))}
      </div>
        </>
    );
    }
export default StepsBar;