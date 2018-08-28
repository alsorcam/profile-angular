export class MockData {
    public static readonly users = [
        {
            id: 1,
            position: 'Prof. Juanjo Marti',
            name: 'Juanjo M Marti',
            status: 1,
            years: 68,
            sex: 'M',
            address: 'Alte Landstrasse 21 8800 Thaiwii ZH CH',
            telephone: [
                '+34658995566',
                '+41555555555'
            ],
            email: 'juanjo@colba.es',
            web: 'http://www.colba.es'
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
                'Specialist Lawyer SAV     public static readonlyruction and real Estate Law'
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
            owner: 'Juanjo M Marti',
            IBAN: 'CH48 00700 0110 0009 7178 4',
            VAT_number: '47529348238'
        }
    ];

    public static readonly user_services = [];
}
