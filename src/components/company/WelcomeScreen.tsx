"use client";
import { useRouter } from "next/navigation";
import React from 'react';

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <input type="text" placeholder="Buscar" style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '20px' }}>Evalúe su madurez digital</h1>
          <p style={{ fontSize: '1.2em', lineHeight: '1.5', marginBottom: '20px' }}>
            Comprenda en qué punto se encuentra su empresa en su viaje hacia la transformación digital con nuestro completo modelo de madurez digital. 
            Nuestro marco de evaluación le ayuda a evaluar sus capacidades digitales, identificar carencias y crear una hoja de ruta para la innovación digital.
          </p>
          <button
            style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1em' }}
            onClick={() => router.push("/evaluation")}
          >
            Evaluarse
          </button>
        </div>
        <div>
          <img src="https://dummyimage.com/800x1500" alt="Evalúe su madurez digital" style={{ width: '300px', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;


