'use client';
import React, { useState } from 'react';
import { Step } from './Step';
import { useRouter } from 'next/navigation';
const MultiStepsForm = () => {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        type: '1',
        city: '',
        tel: '',
        nit: '',
        legalRep: '',
        legalRepEmail: '',
        legalRepTel: '',
        economicSector: '',
        numberEmployees: '',
        opsYears: '',
        specificNeeds: '',
        expectations: '',
        termsAndConditions: false,
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setStep(0);
        setFormData({
            name: '',
            address: '',
            type: '1',
            city: '',
            tel: '',
            nit: '',
            legalRep: '',
            legalRepEmail: '',
            legalRepTel: '',
            economicSector: '',
            numberEmployees: '',
            opsYears: '',
            specificNeeds: '',
            expectations: '',
            termsAndConditions: false,
        });
        router.push('/');
    }

    
    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };
    
    const handlePrev = () => {
        setStep((prevStep) => prevStep - 1);
    };
    
    return (
        <div>
        {step === 0 && (
            <Step
            step={step}
            formData={formData}
            handleChange={handleChange}
            handlePrev={handlePrev}
            handleNext={handleNext}
            handleCancel={handleCancel}
            />
        )}
        {step === 1 && (
            <Step
            step={step}
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
            />
        )}
        {step === 2 && (
            <Step
            step={step}
            formData={formData}
            handleNext={handleNext}
            handleChange={handleChange}
            handlePrev={handlePrev}
            />
        )}
        {step === 3 && (
            <Step
            step={step}
            formData={formData}
            handleNext={handleNext}
            handleChange={handleChange}
            handlePrev={handlePrev}
            />
        )}
        {step === 4 && (
            <Step
            step={step}
            formData={formData}
            handleNext={handleNext}
            handleChange={handleChange}
            handlePrev={handlePrev}
            />
        )}
        </div>
    );
    };
    export default MultiStepsForm;