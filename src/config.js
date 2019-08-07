const Products = [
    'Memory',
    'Linear',
    'Logic',
    'Opto',
    'Diodes/Transistors',
    'FPGA Replacements',
    'Programmable Logic',
    'Custom Interface'
];

const table = {
    name: 'Part Number'
};

const navNew = [
    {
        title: 'Die Bank',
        routePath: '/die-bank'
    },
    {
        title: 'Products',
        routePath: '/products',
        children: [
            {
                title: 'Memory',
                routePath: '/products',
                parent: 'Products'
            },
            {
                title: 'Linear',
                routePath: '/products',
                parent: 'Products'
            },
            {
                title: 'Logic',
                routePath: '/products',
                parent: 'Products'
            },
            {
                title: 'Diodes/Transistors',
                routePath: '/products',
                parent: 'Products'
            },
        ]
    },
    {
        title: 'Services',
        routePath: '/services',
        children: [
            {
                title: 'Manufacturing Services',
                routePath: '/services',
                parent: 'Services'
            },
            {
                title: 'Logistics Services',
                routePath: '/services',
                parent: 'Services'
            },
        ]
    },
    {
        title: 'About Us',
        routePath: '/about-us'
    }
]



export {
    Products,
    table,
    navNew
}