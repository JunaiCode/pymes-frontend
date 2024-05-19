'use client';
import React, { useEffect, useState } from 'react';
import { Step } from './Step';
import { useRouter } from 'next/navigation';
const MultiStepsForm = () => {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        type: '',
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
        password: '',
    });

    let errors: { [key: string]: string }
    
    useEffect(() => {
        // Define the errors object to store the errors
        const validateForm = () => {
            if (step === 0) {
                if(formData.name === '') {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    errors = {
                        ...errors,
                        name: 'Name is required',
                    };
                }
                if(formData.address === '') {
                    errors = {
                        ...errors,
                        address: 'Address is required',
                    };
                }
                if(formData.city === '') {
                    errors = {
                        ...errors,
                        city: 'City is required',
                    };
                }
                if(formData.tel === '') {
                    errors = {
                        ...errors,
                        tel: 'Tel is required',
                    };
                }
                if(formData.nit === '') {
                    errors = {
                        ...errors,
                        nit: 'Nit is required',
                    };
                }
                if(formData.type === '0') {
                    errors = {
                        ...errors,
                        type: 'Type is required',
                    };
                }
                if(formData.city === '0') {
                    errors = {
                        ...errors,
                        city: 'City is required',
                    };
                }
                if(!RegExp('^[0-9]{10}$').test(formData.tel))
                {
                    errors = {
                        ...errors,
                        tel: 'Tel is invalid',
                    };
                }
    
                if(!RegExp('^[0-9]{10}$').test(formData.nit))
                {
                    errors = {
                        ...errors,
                        nit: 'Nit is invalid',
                    };
                }
            }
            if (step === 1) {
                if(formData.legalRep === '') {
                    errors = {
                        ...errors,
                        legalRep: 'Legal Representative is required',
                    };
                }
                if(formData.legalRepEmail === '') {
                    errors = {
                        ...errors,
                        legalRepEmail: 'Legal Representative Email is required',
                    };
                }
                if(formData.legalRepTel === '') {
                    errors = {
                        ...errors,
                        legalRepTel: 'Legal Representative Tel is required',
                    };
                }
                if(!RegExp('^[0-9]{10}$').test(formData.legalRepTel))
                {
                    errors = {
                        ...errors,
                        legalRepTel: 'Legal Representative Tel is invalid',
                    };
                }
            }
            if (step === 2) {
                return !formData.specificNeeds || !formData.expectations;
            }
            if (step === 3) {
                if(formData.termsAndConditions === false) {
                    errors = {
                        ...errors,
                        termsAndConditions: 'Terms and Conditions are required',
                    };
                }
            }
            putErrors();
        };
        validateForm();
      }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if(name === 'termsAndConditions') {
            setFormData((prevData) => ({
                ...prevData,
                [name]:!formData.termsAndConditions,
            }));
        }else{
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
        
    }
    console.log(formData);
    };

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setStep(0);
        setFormData({
            name: '',
            address: '',
            type: '',
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
            password: '',
        });
        router.push('/');
    }

    const putErrors =()=>{
        for (const key in formData) {
            // Insert error into the form
                let input = document.querySelector(`input[name=${key}]`);
                let errorElement = document.querySelector(`p[id=${key}]`);
                if (errors != undefined && Object.keys(errors).includes(key)){
                    const error = errors[key];
                    if(input && !errorElement ){
                        input.classList.add('border-red-500');
                        input.insertAdjacentHTML('afterend', `<p id="${key}" class="text-red-500 mt-2 text-xs italic">${error}</p>`);
                    }
                }else{
                    if(errorElement){
                        errorElement.remove();
                        if(input){
                            input.classList.remove('border-red-500');
                        }
                }
            }
    }
    }

    
    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log(errors);
        if (errors === undefined || Object.keys(errors).length === 0){
            setStep((prevStep) => prevStep + 1);
        } else {
            // Pop up indicating that there are fields without filling
            let modal = document.getElementById('info-popup');
            if(modal)
            modal.classList.remove('hidden');
        }
    };
    
    const handlePrev = (e: React.MouseEvent) => {
        e.preventDefault();
        setStep((prevStep) => prevStep - 1);
    };

    return (
        <div className='bg-light'>
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