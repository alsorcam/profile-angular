export class MockData {
    public static readonly users = [
        {
            id: 1,
            position: 'Prof. John Smith',
            name: 'John F. Smith',
            status: 1,
            years: 68,
            sex: 'M',
            address: 'Old Country Street, 21',
            telephone: [
                '+34658995566',
                '+41555555555'
            ],
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
                'Builders\' lien law',
                'Building contract law',
                'Construction and Real Estate Law (gene...',
                'Expropiation law',
                'Public construction and planning law',
                'Rental and lease law (real state)',
                'Rights of neighbours'
            ]
        },
        {
            id: 2,
            user_id: 1,
            service_name: 'Labour law',
            sections: [
                'Disputes arising from collective labour a...',
                'Equality Law',
                'Private labour law'
            ]
        },
        {
            id: 3,
            user_id: 1,
            service_name: 'Social insurance law',
            sections: [
                'Daily sickness benefit (KTG)',
                'Disability insurance (IV)'
            ]
        }
    ];
}
