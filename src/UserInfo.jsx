import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from './components/ui/input';
import { SelectSymptoms } from './constants/options';
import { Button } from './components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from './components/navbar';

function UserInfo() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({});
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Load Google Maps script
  useEffect(() => {
    const handleScriptLoad = () => setScriptLoaded(true);

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = handleScriptLoad;
      document.body.appendChild(script);
    } else {
      handleScriptLoad();
    }
  }, []);

  const handleSymptomToggle = (itemName) => {
    setSelectedSymptoms((prev) => {
      if (prev.includes(itemName)) {
        return prev.filter((name) => name !== itemName);
      } else {
        return [...prev, itemName];
      }
    });
  };

  useEffect(() => {
    handleInputChange('symptoms', selectedSymptoms);
  }, [selectedSymptoms]);

  const onFindMatches = () => {
    handleInputChange('location', place?.label || ''); 

    const existingData = JSON.parse(localStorage.getItem('userData')) || [];
    existingData.push(formData); 

    const csvRows = [];
    const headers = Object.keys(existingData[0] || {});
    csvRows.push(headers.join(',')); 

    existingData.forEach(data => {
      const values = headers.map(header => {
        const escapedValue = String(data[header] || '')
          .replace(/"/g, '""') 
          .replace(/(\r\n|\n|\r)/g, ' '); 
        return `"${escapedValue}"`; 
      });
      csvRows.push(values.join(',')); 
    });

    const csvString = csvRows.join('\n');

    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'user_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <Navbar />
      <h2 className='font-bold text-3'>Tell us about you</h2>

      <div>
        {/* Name input */}
        <div>
          <h2 className='text-xl my-3 font-semibold' id='name'> Your Name: </h2>
          <Input 
            placeholder={'Enter your name'} 
            type="text" 
            onChange={(e) => handleInputChange('name', e.target.value)} 
          />
        </div>

        {/* Location input */}
        <div>
          <h2 className='text-xl my-3 font-bold' id='location'> Location: </h2>
          {scriptLoaded ? (
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                place,
                onChange: (value) => {
                  setPlace(value);
                  handleInputChange('location', value?.label || ''); 
                },
                value: place,
              }}
            />
          ) : (
            <p>Loading location input...</p>
          )}
        </div>

        {/* Age input */}
        <div>
          <h2 className='text-xl my-3 font-semibold' id='age'> Insert your age: </h2>
          <Input placeholder={'Ex. 3'} type="number" onChange={(e) => handleInputChange('age', e.target.value)} />
        </div>

        {/* Symptoms selection */}
        <div>
          <h2 className='text-xl my-3 font-semibold' id='symptoms'> Select Symptoms
            <span className='font-thin'> select all that apply </span> 
          </h2>
          <div className='grid grid-cols-3 gap-5 mt-5' id='symptoms'>
            {SelectSymptoms.map((item, index) => (
              <div 
                key={index} 
                onClick={() => handleSymptomToggle(item.name)} 
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer 
                  ${selectedSymptoms.includes(item.name) ? 'shadow-lg border-black' : ''}`}>
                <h2>{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Submit button */}
      <div className='my-10 justify-center flex' type="submit">
        <Link to='./similar-users'> 
          <Button onClick={onFindMatches}>
            Find Matches
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default UserInfo;
