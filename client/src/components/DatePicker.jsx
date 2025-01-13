import react, { useState } from 'react';

function DatePicker(){
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const days = Array.from({ length: 31 }, (_, index) => index + 1);

    const months = Array.from({ length: 12 }, (_, index) => index + 1);

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1900 + 1 }, (_, index) => 1900 + index);

    const handleDayChange = (event) => setDay(event.target.value);
    const handleMonthChange = (event) => setMonth(event.target.value);
    const handleYearChange = (event) => setYear(event.target.value);

    return(
        <div className='date-container'>
            <h3>Select your date of birth</h3>

            <select value={day} onChange={handleDayChange}>
                <option value="">Day</option>
                {days.map((d) => (
                    <option key={d} value={d}>
                        {d}
                    </option>
                ))}
            </select>   

            <select value={month} onChange={handleMonthChange}>
                <option value="">Month</option>
                {months.map((m) => (
                    <option key={m} value={m}>
                        {m}
                    </option>
                ))}
            </select>

            <select value={year} onChange={handleYearChange}>
                <option value="">Year</option>
                {years.map((y) => (
                    <option key={y} value={y}>
                        {y}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DatePicker;