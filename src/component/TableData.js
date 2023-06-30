import React, { useState } from 'react'
import "./Table.css"

const TableData = () => {

    const data =
        [
            {
                "country":
                    "Afghanistan",
                "state1": [
                    {
                        "Badakhshan": [
                            "Jarm",
                            "Fayzabad",
                            "Ashkasham"
                        ]
                    },
                    {
                        "Badghis": [
                            "Muqur ",
                            "Jawand",
                            "Ghormach "
                        ]
                    },
                    {
                        "Baghlan": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Balkh": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    },
                    {
                        "Bamian": [
                            "Jawand",
                            "Dawlatabad",
                            "Fayzabad"
                        ]
                    },
                    {
                        "Daykondi": [
                            "Jalalabad",
                            "Kandahar",
                            "Herat"
                        ]
                    },
                    {
                        "Farah": [
                            "Mazar",
                            "Khost",
                            "Jalalabad"
                        ]
                    },
                    {
                        "Ghazni": [
                            "Waghaz",
                            "Rashidan",
                            "Qarabagh"
                        ]
                    },
                    {
                        "Bamian": [
                            "Jawand",
                            "Dawlatabad",
                            "Fayzabad"
                        ]
                    },
                    {
                        "Balkh": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    }
                ]
            },
            {
                "country": "Bangladesh",


                "state1": [
                    {
                        "Barisal": [
                            "Jarm",
                            "Fayzabad",
                            "Ashkasham"
                        ]
                    },
                    {
                        "Chittagong": [
                            "Khulna ",
                            "Chattogram",
                            "Dhaka "
                        ]
                    },
                    {
                        "Dhaka": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Khulna": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    },
                    {
                        "Rajshahi": [
                            "Jawand",
                            "Dawlatabad",
                            "Fayzabad"
                        ]
                    },
                    {
                        "Sylhet": [
                            "Jalalabad",
                            "Kandahar",
                            "Herat"
                        ]
                    },
                    {
                        "Barisal": [
                            "Mazar",
                            "Khost",
                            "Jalalabad"
                        ]
                    },
                    {
                        "Dhaka": [
                            "Waghaz",
                            "Rashidan",
                            "Qarabagh"
                        ]
                    },
                    {
                        "Rajshahi": [
                            "Jawand",
                            "Dawlatabad",
                            "Fayzabad"
                        ]
                    },
                    {
                        "Sylhet": [
                            "Jalalabad",
                            "Kandahar",
                            "Herat"
                        ]
                    }
                ]
            },
            {
                "country": "Brazil",


                "state1": [
                    {
                        "Acre": [
                            "Jarm",
                            "Fayzabad",
                            "Ashkasham"
                        ]
                    },
                    {
                        "Alagoas": [
                            "Muqur ",
                            "Jawand",
                            "Ghormach "
                        ]
                    },
                    {
                        "Amapa": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Amazonas": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    },
                    {
                        "Bahia": [
                            "Jawand",
                            "Dawlatabad",
                            "Fayzabad"
                        ]
                    },
                    {
                        "Ceara": [
                            "Jalalabad",
                            "Kandahar",
                            "Herat"
                        ]
                    },
                    {
                        "Maranhao": [
                            "Mazar",
                            "Khost",
                            "Jalalabad"
                        ]
                    },
                    {
                        "Espirito": [
                            "Waghaz",
                            "Rashidan",
                            "Qarabagh"
                        ]
                    },
                    {
                        "Amapa": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Amazonas": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    }
                ]
            },
            {
                "country": "Canada",


                "state1": [
                    {
                        "Alberta": [
                            "Jarm",
                            "Fayzabad",
                            "Ashkasham"
                        ]
                    },
                    {
                        "British": [
                            "Muqur ",
                            "Jawand",
                            "Ghormach "
                        ]
                    },
                    {
                        "Manitoba": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Nunavut": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    },
                    {
                        "Nova": [
                            "Jawand",
                            "Dawlatabad",
                            "Fayzabad"
                        ]
                    },
                    {
                        "Northwest": [
                            "Jalalabad",
                            "Kandahar",
                            "Herat"
                        ]
                    },
                    {
                        "Newfoundland": [
                            "Mazar",
                            "Khost",
                            "Jalalabad"
                        ]
                    },
                    {
                        "Brunswick": [
                            "Waghaz",
                            "Rashidan",
                            "Qarabagh"
                        ]
                    },
                    {
                        "Manitoba": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Nunavut": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    }
                ]
            },
            {
                "country": "China",

                "state1": [
                    {
                        "Anhui": [
                            "Jarm",
                            "Fayzabad",
                            "Ashkasham"
                        ]
                    },
                    {
                        "Fujian": [
                            "Muqur ",
                            "Jawand",
                            "Ghormach "
                        ]
                    },
                    {
                        "Gansu": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Guangdong": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    },
                    {
                        "Guizhou": [
                            "Jawand",
                            "Dawlatabad",
                            "Fayzabad"
                        ]
                    },
                    {
                        "Hainan": [
                            "Jalalabad",
                            "Kandahar",
                            "Herat"
                        ]
                    },
                    {
                        "Hebei": [
                            "Mazar",
                            "Khost",
                            "Jalalabad"
                        ]
                    },
                    {
                        "Heilongjiang": [
                            "Waghaz",
                            "Rashidan",
                            "Qarabagh"
                        ]
                    },
                    {
                        "Gansu": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Guangdong": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    }
                ]
            },
            {
                "country": "India",

                "state1": [
                    {
                        "Gujarat": [
                            "Surat",
                            "Ahmedabad",
                            "Vadodara",
                            "Bhavnagar"
                        ]
                    },
                    {
                        "Delhi": [
                            "Muqur ",
                            "Jawand",
                            "Ghormach "
                        ]
                    },
                    {
                        "Daman": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Bihar": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    },
                    {
                        "Assam": [
                            "Jawand",
                            "Dawlatabad",
                            "Fayzabad"
                        ]
                    },
                    {
                        "Haryana": [
                            "Jalalabad",
                            "Kandahar",
                            "Herat"
                        ]
                    },
                    {
                        "Punjab": [
                            "Mazar",
                            "Khost",
                            "Jalalabad"
                        ]
                    },
                    {
                        "Rajasthan": [
                            "Waghaz",
                            "Rashidan",
                            "Qarabagh"
                        ]
                    },
                    {
                        "Daman": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Bihar": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    }
                ]
            },
            {
                "country": "Nepal",

                "state1": [
                    {
                        "Bagmati": [
                            "Jarm",
                            "Fayzabad",
                            "Ashkasham"
                        ]
                    },
                    {
                        "Bheri": [
                            "Muqur ",
                            "Jawand",
                            "Ghormach "
                        ]
                    },
                    {
                        "Dhawalagiri": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Gandaki": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    },
                    {
                        "Janakpur": [
                            "Jawand",
                            "Dawlatabad",
                            "Fayzabad"
                        ]
                    },
                    {
                        "Karnali": [
                            "Jalalabad",
                            "Kandahar",
                            "Herat"
                        ]
                    },
                    {
                        "Kosi": [
                            "Mazar",
                            "Khost",
                            "Jalalabad"
                        ]
                    },
                    {
                        "Lumbini": [
                            "Waghaz",
                            "Rashidan",
                            "Qarabagh"
                        ]
                    },
                    {
                        "Bheri": [
                            "Muqur ",
                            "Jawand",
                            "Ghormach "
                        ]
                    },
                    {
                        "Dhawalagiri": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    }
                ]
            },
            {
                "country": "New Zealand",

                "state1": [
                    {
                        "Auckland": [
                            "Jarm",
                            "Fayzabad",
                            "Ashkasham"
                        ]
                    },
                    {
                        "Canterbury": [
                            "Muqur ",
                            "Jawand",
                            "Ghormach "
                        ]
                    },
                    {
                        "Gisborne": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Northland": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    },
                    {
                        "Nelson": [
                            "Jawand",
                            "Dawlatabad",
                            "Fayzabad"
                        ]
                    },
                    {
                        "Marlborough": [
                            "Jalalabad",
                            "Kandahar",
                            "Herat"
                        ]
                    },
                    {
                        "Islands": [
                            "Mazar",
                            "Khost",
                            "Jalalabad"
                        ]
                    },
                    {
                        "Manawatu": [
                            "Waghaz",
                            "Rashidan",
                            "Qarabagh"
                        ]
                    },
                    {
                        "Canterbury": [
                            "Muqur ",
                            "Jawand",
                            "Ghormach "
                        ]
                    },
                    {
                        "Gisborne": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    }
                ]
            },
            {
                "country": "Russia",


                "state1": [
                    {
                        "Amur": [
                            "Jarm",
                            "Fayzabad",
                            "Ashkasham"
                        ]
                    },
                    {
                        "Arkhangel": [
                            "Muqur ",
                            "Jawand",
                            "Ghormach "
                        ]
                    },
                    {
                        "Astrakhan": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Belgorod": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    },
                    {
                        "Bryansk": [
                            "Jawand",
                            "Dawlatabad",
                            "Fayzabad"
                        ]
                    },
                    {
                        "Chelyabinsk": [
                            "Jalalabad",
                            "Kandahar",
                            "Herat"
                        ]
                    },
                    {
                        "Chita": [
                            "Mazar",
                            "Khost",
                            "Jalalabad"
                        ]
                    },
                    {
                        "Irkutsk": [
                            "Waghaz",
                            "Rashidan",
                            "Qarabagh"
                        ]
                    },
                    {
                        "Astrakhan": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Belgorod": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    }
                ]
            },
            {
                "country": "Pakistan",


                "state1": [
                    {
                        "Balochistan": [
                            "Jarm",
                            "Fayzabad",
                            "Ashkasham"
                        ]
                    },
                    {
                        "Punjab": [
                            "Muqur ",
                            "Jawand",
                            "Ghormach "
                        ]
                    },
                    {
                        "Sindh": [
                            "Dowshi",
                            "Nahrin",
                            "Baghlani "
                        ]
                    },
                    {
                        "Islamabad": [
                            "Marmul",
                            "Dawlatabad",
                            "Kaldar"
                        ]
                    },
                    {
                        "kashmir": [
                            "Jawand",
                            "Dawlatabad",
                            "Fayzabad"
                        ]
                    },
                ]
            },
        ]

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCountry1, setSelectedCountry1] = useState(null);
    // console.log('selectedCountry1::: ', selectedCountry1);

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
    };
    const handleCountryClick1 = (country) => {
        const obj = Object.keys(country)[0];
        // console.log('obj::: ', country[obj]);
        setSelectedCountry1(country[obj]);

    };
    return (
        <>
            <div style={ { display: 'flex', marginLeft: "550px", marginTop: "50px" } }>
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map((item, index) => (
                            <tr key={ index } onClick={ () => handleCountryClick(item) }>
                                <td>{ item.country }</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
                { selectedCountry && (
                    <table>
                        <thead>
                            <tr>
                                <th>state</th>
                            </tr>
                        </thead>
                        <tbody>
                            { selectedCountry.state1.map((state, index) => (
                                <tr onClick={ () => handleCountryClick1(state) }>
                                    <td key={ index }>{ Object.keys(state)[0] }</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                ) }
                { selectedCountry1 && (
                    <table>
                        <thead>
                            <tr>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            { selectedCountry1.map((state, index) => (
                                <tr onClick={ () => handleCountryClick1(state) }>
                                    <td key={ index }>{ state }</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                ) }
            </div>

        </>
    )
}

export default TableData