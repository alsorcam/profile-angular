export class MockData {
    public static readonly users = [
        {
            id: 1,
            position: 'Prof. John Smith',
            name: 'John F. Smith',
            available: 'Y',
            years: 68,
            sex: 'M',
            address: 'Old Country Street, 21',
            telephone: '+34658995566',
            email: 'johnsmith@mail.com',
            web: 'http://www.profile.com'
        }
    ];


    public static readonly languages = [
        {
            id: 1,
            user_id: 1,
            language: 'DE',
            level: 1
        },
        {
            id: 2,
            user_id: 1,
            language: 'EN',
            level: 2
        }
    ];

    public static readonly qualifications = [
        {
            id: 1,
            user_id: 1,
            lawyers_license: 1,
            year_license: 1995,
            qualifications: [
                'Certified Specialist SAV Labour Law',
                'Specialist lawyer SAV Inheritance Law',
                'Specialist Lawyer SAV Construction and Real Estate Law'
            ]
        }
    ];

    public static readonly geographical_cover = [
        {
            id: 1,
            user_id: 1,
            geographical_cover: [
                'CH - Aargovia',
                'Appenzell Ausserrhoden',
                'Zurich',
                'Basel-Landschaft',
                'Appenzell Innerrhoden'
            ]
        }
    ];

    public static readonly bank_account = [
        {
            id: 1,
            user_id: 1,
            owner: 'John F. Smith',
            IBAN: 'CH48 00700 0110 0009 7178 4',
            VAT_number: '47529348238'
        }
    ];

    public static readonly user_services = [
        {
            id: 1,
            user_id: 1,
            service_name: 'Construction and Real Estate Law',
            sections: [
                {
                    section_name: 'Builders\' lien law',
                    section_rate: 0
                },
                {
                    section_name: 'Building contract law',
                    section_rate: 1
                },
                {
                    section_name: 'Construction and Real Estate Law (gene...',
                    section_rate: 2
                },
                {
                    section_name: 'Public construction and planning law',
                    section_rate: 3
                },
                {
                    section_name: 'Rental and lease law (real state)',
                    section_rate: 4
                },
                {
                    section_name: 'Rights of neighbours',
                    section_rate: 5
                }
            ]
        },
        {
            id: 2,
            user_id: 1,
            service_name: 'Labour law',
            sections: [
                {
                    section_name: 'Disputes arising from collective labour a...',
                    section_rate: 0
                },
                {
                    section_name: 'Equality Law',
                    section_rate: 1
                },
                {
                    section_name: 'Private labour law',
                    section_rate: 2
                }
            ]
        },
        {
            id: 3,
            user_id: 1,
            service_name: 'Social insurance law',
            sections: [
                {
                    section_name: 'Daily sickness benefit (KTG)',
                    section_rate: 3
                },
                {
                    section_name: 'Disability insurance (IV)',
                    section_rate: 1
                }
            ]
        }
    ];
}
