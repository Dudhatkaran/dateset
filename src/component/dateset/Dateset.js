import React, { useState } from 'react'

const Dateset = () => {

    const [startDate, setStartDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [numberOfDays, setNumberOfDays] = useState(0);

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleNumberOfDaysChange = (event) => {
        setNumberOfDays(event.target.value);
        calculateDueDate(event.target.value);
    };

    const calculateDueDate = (days) => {
        if (startDate && days) {
            const startDateObj = new Date(startDate);
            const dueDateObj = new Date(startDateObj.getTime() + days * 24 * 60 * 60 * 1000);
            const year = dueDateObj.getFullYear();
            const month = String(dueDateObj.getMonth() + 1).padStart(2, '0');
            const day = String(dueDateObj.getDate()).padStart(2, '0');
            const formattedDueDate = `${year}-${month}-${day}`;
            setDueDate(formattedDueDate);
        } else {
            setDueDate('');
        }
    };


    return (
        <>
            <h2 className='text-center my-5 text-xl'>Select Dates</h2>
            <div className='flex  justify-around w-3/12 gap-4 container mx-auto'>

                <div className='w-full'>
                    <label>Start Date:</label>
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5'
                        type="date"
                        value={ startDate }
                        onChange={ handleStartDateChange }
                    />
                </div>
                <div className='w-full'>
                    <label>Number of Days:</label>
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5'
                        type="number"
                        value={ numberOfDays }
                        onChange={ handleNumberOfDaysChange }
                    />
                </div>
                <div className='w-full'>
                    <label>Due Date:</label>
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5'
                        type="date"
                        value={ dueDate }
                        disabled
                    />
                </div>
            </div>

        </>
    )
}

export default Dateset
