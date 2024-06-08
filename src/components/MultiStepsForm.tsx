'use client';
import React, { useEffect, useState } from 'react';
import { Step } from './Step';
import { useRouter } from 'next/navigation';

async function register(data: any) {
    const res = await fetch('http://18.218.220.138:8081/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const json = await res.json();
    return json;
}


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
            if(!RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$').test(formData.legalRepEmail))
            {
                errors = {
                    ...errors,
                    legalRepEmail: 'Legal Representative Email is invalid',
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
            if(formData.password === '') {
                errors = {
                    ...errors,
                    password: 'Password is required',
                };
            }
            if(!RegExp('^[a-zA-Z0-9]{8,}$').test(formData.password))
            {
                errors = {
                    ...errors,
                    password: 'Password must be at least 8 characters long and contain only letters and numbers',
                };
            }
        }
        if(step === 2) {
            if(formData.economicSector === '') {
                errors = {
                    ...errors,
                    economicSector: 'Economic Sector is required',
                };
            }
            if(formData.numberEmployees === '') {
                errors = {
                    ...errors,
                    numberEmployees: 'Number of Employees is required',
                };
            }
            if(formData.opsYears === '') {
                errors = {
                    ...errors,
                    opsYears: 'Operation Years is required',
                };
            }
            if(!RegExp('^[0-9]{1,3}$').test(formData.numberEmployees))
            {
                errors = {
                    ...errors,
                    numberEmployees: 'Number of Employees is invalid',
                };
            }
            if(!RegExp('^[0-9]{1,3}$').test(formData.opsYears))
            {
                errors = {
                    ...errors,
                    opsYears: 'Operation Years is invalid',
                };
            }
        }
        if (step === 3) {
            if(formData.specificNeeds === '') {
                errors = {
                    ...errors,
                    specificNeeds: 'Specific Needs are required',
                };
            }
            if(formData.expectations === '') {
                errors = {
                    ...errors,
                    expectations: 'Expectations are required',
                };
            }
        }
        if (step === 4) {
            if(formData.termsAndConditions === false) {
                errors = {
                    ...errors,
                    termsAndConditions: 'Terms and Conditions are required',
                };
            }
        }
        putErrors();
    };
    useEffect(() => {
        validateForm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const putErrors = () => {
        for (const key in formData) {
                if(errors !== undefined) {
                const input = document.querySelector(`input[name=${key}]`);
                const errorElement = document.querySelector(`p[id=${key}]`) as HTMLElement;
                const error = errors[key];
                if(error != undefined && errorElement && input) {
                    
                    errorElement.innerText = error;
                    errorElement.classList.add('opacity-1');
                    errorElement.classList.remove('opacity-0');
                    input.classList.add('border-red-500');
                }else if(error == undefined && errorElement && input) {
                    errorElement.classList.add('opacity-0');
                    errorElement.classList.remove('opacity-1');
                    input.classList.remove('border-red-500');
                }
            }else{
                const elements = document.querySelectorAll('.opacity-1');
                elements.forEach(element => {
                    const input = element.previousElementSibling as HTMLElement;
                    element.classList.remove('opacity-1');
                    element.classList.add('opacity-0');
                    if(input)
                    input.classList.remove('border-red-500');
                });
            }
        }
    };
    

    
    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault();
        validateForm();
        if (errors === undefined || Object.keys(errors).length === 0){
            if(step === 4) {
            
                // Send data to backend
                register(formData).then((data) => {
                    
                    localStorage.setItem('user', JSON.stringify(data))
                    router.push('/home');
                });
            }
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
        <div className='bg-[#c5c8cc]' >
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