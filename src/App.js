import React from 'react';
import "./App.css";

import FileUpload from './components/FileUpload/index';
import RegisterForm from './components/RegistrationForm/index';

const App = () => {
  return (
    <div className='App'>
      <FileUpload />
      <RegisterForm />
    </div>
  )
}

export default App