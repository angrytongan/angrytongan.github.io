'use strict';

const referees = [
    {
        name: 'David McCullough',
        email: 'david.mccullough@accelecon.com',
        title: 'Systems Engineer',
        place: 'Accelerated Concepts',
    },
    {
        name: 'Tod Horton',
        email: 'tod_horton@flightcentre.com',
        title: 'Global Leader Healthwise',
        place: 'Flight Centre',
    },
    {
        name: 'Stephen Callaghan',
        email: 'sj.callaghan@qut.edu.au',
        title: 'Manager HR Systems',
        place: 'QUT',
    },
];

const personalProjects = [
    {
        title: 'The Erg Arcade',
        production: 'https://ergarcade.com/',
        source: 'https://github.com/ergarcade',
    },
    {
        title: 'wodscrape',
        production: 'http://wodscrape.com.au',
        source: 'https://github.com/angrytongan/wodscrape',
    },
    {
        title: 'Calendar Arc',
        source: 'https://github.com/angrytongan/calendararc',
    },
    {
        title: 'Solar monitor log relay',
        source: 'https://github.com/angrytongan/dfinvrelay',
    },
];

const certifications = [
    {
        qualification: 'Bachelor of Computer Science',
        educator: 'University of Newcastle',
    },
    {
        qualification: 'First Aid',
        educator: 'St Johns Ambulance',
    },
    {
        qualification: 'Blue Card',
        educator: 'Queensland Government',
    },
    {
        qualification: 'CrossFit Level 1 Trainer',
        educator: 'CrossFit Inc.',
    },
    {
        qualification: 'Remedial Massage Therapist',
        educator: 'QAcademy',
    },
    {
        qualification: 'Certificate III and IV in Fitness',
        educator: 'Queensland Academy of Fitness',
    },
];

const overview = `
Flexible, experienced multi-discipline software developer with strong work
ethic. Automation advocate. Happy working solo or in a team as a member or
leader. Enjoys learning, being challenged and getting things done.
`;

const experience = [
    'Software development',
    'System administration',
    'Team management',
];

const tools = `
    git, JavaScript, Linux, C, dev-tools, mithril.js, PHP, assembler, Python,
    PostgreSQL, HTML, CSS, MySQL, Apache, embedded systems, JIRA, Bamboo,
    Jenkins, Stash, ansible, AWS, ELK, ARM, atmel, Arduino, Agile, Qt, APIs,
    d3.js, SPAs, vagrant and more!
`;

const jobs = [
    {
        place: 'Branch Merge Tag',
        start: '2014-12-01',
        end: null,
        based: 'Brisbane, Australia',
        title: 'Owner',
        description: `Application development and statistical analytics
        dashboards for exercise equipment supporting the CSAFE interface,
        including the Concept2 range of rower, bike and ski ergometers.`,
    },
    {
        place: 'Atmail',
        start: '2014-05-01',
        end: '2014-11-30',
        based: 'Sunshine Coast, Australia',
        title: 'System Administrator (contract)',
        description: `Systems administrator and architect. Maintenance on
        existing infrastructure. Development of new infrastructure for
        email platform.`,
    },
    {
        place: 'Flight Centre',
        start: '2014-02-01',
        end: '2014-04-30',
        based: 'Brisbane, Australia',
        title: 'System Administrator (contract)',
        description: `Web and system administrator. Deployment and
        management of internal and public websites. Automation, continuous
        integration and new systems management and allocation.`,
    },
    {
        place: 'Melbourne IT',
        start: '2013-07-01',
        end: '2013-12-31',
        based: 'Brisbane, Australia',
        title: 'Solutions Engineer (contract)',
        description: `Enterprise services team. Developer for internal R&D
        tools. High interaction with ops teams.`,
    },
    {
        place: 'Queensland University of Technology',
        start: '2010-01-01',
        end: '2013-06-30',
        based: 'Brisbane, Australia',
        title: 'Analyst',
        description: `Business analyst and support on QUT’s HRM system
        Alesco. Pickup programmer and consultant for integration projects.
        Team leader (short term).`,
    },
    {
        place: 'Flight Centre - Healthwise',
        start: '2006-06-01',
        end: '2009-12-31',
        based: [
            'Vancouver and Toronto, Canada',
            'Brisbane, Australia',
        ],
        title: [
            'Team Leader',
            'Solutions Engineer',
        ],
        description: `Team leader of North American arm of Flight Centre
        Healthwise. Business management and development. Developer and
        maintainer on associated websites and event management software.
        Application support and development on internal HR tools.`,
    },
    {
        place: 'Trolltech',
        start: '2002-01-01',
        end: '2003-12-31',
        based: 'Brisbane, Australia',
        title: 'Embedded developer',
        description: `Embedded systems development. Maintenance and
        improvements to Qtopia and Qt/E variants of Qt. Port of IBM
        ViaVoice to Qt/E.`,
    },
    {
        place: 'RSA Security',
        start: '2001-01-01',
        end: '2001-12-31',
        based: 'Brisbane, Australia',
        title: 'Embedded developer',
        description: `Embedded systems development. Cryptographic library
        porting between embedded architectures. Build automation for embedded
        platforms. Team leader (short term).`,
    },
    {
        place: 'Stallion Technologies',
        start: '1999-06-01',
        end: '2000-12-31',
        based: 'Brisbane, Australia',
        title: 'Embedded developer',
        description: `Embedded systems development. Multiport serial
        adaptor maintenance. ADSL aggregator development.`,
    },
    {
        place: 'Ingenico International',
        start: '1995-01-01',
        end: '1999-05-31',
        based: [
            'Sydney, Australia',
            'Central, Hong Kong',
        ],
        title: [
            'Embedded developer',
            'System administrator',
        ],
        description: `Embedded systems development. Mobile RF EFTPoS
        terminal software. Software download backend for Mobile RF EFTPoS
        terminals over Telstra DataTAC network.`,
    },
];

const expandArray = (a) => {
    if (Array.isArray(a)) {
        const out = a.reduce((acc, val) => {
            acc += `${val}; `;
            return acc;
        }, '');

        return out.replace(/; $/, '');
    } else {
        return a;
    }
};

const dateRange = (s, e) => {
    const fmt = (d) => luxon.DateTime.fromSQL(d).toLocaleString({
        month: 'long',
        year: 'numeric',
    });

    let str = fmt(s);

    if (e) {
        str += ' to ' + fmt(e);
    } else {
        str += ' to present';
    }

    return str;
};

const Experience = {
    view: () => {
        return [
            m('h2', 'Experience'),
            m('.experience', m('ul', experience.map((e) => m('li', e))))
        ];
    },
};

const Referees = {
    view: () => {
        return [
            m('h2', 'Referees'),
            m('.referees', m('ul', referees.map((r) => {
                return m('li', [
                    m('p', m.trust(`<strong>${r.name}</strong>`)),
                    m('p', m('a', { href: `mailto:${r.email}`, }, r.email)),
                    m('p', r.title),
                    m('p', r.place),
                ]);
            }))),
        ];
    },
};

const Certifications = {
    view: () => {
        return [
            m('h2', 'Certifications'),
            m('ul', certifications.map((c) => m('li', [
                m('p.qualification', c.qualification),
                m('p.educator', c.educator),
            ]))),
        ];
    },
};

const Overview = {
    view: () => {
        return [
            m('h1', 'Dean Fogarty'),
            m('h3', m('a', { href: 'mailto:dean@df.id.au' }, 'dean@df.id.au')),
            m('p', overview)
        ];
    },
};

const Jobs = {
    view: () => {
        return [
            m('h2', 'Employment history'),
            m('.jobs', jobs.map((j) => {
                return m('.job', [
                    m('h3', j.place),
                    m('p.title', expandArray(j.title)),
                    m('p.based', expandArray(j.based)),
                    m('p.dates', dateRange(j.start, j.end)),
                    m('p.description', j.description),
                ]);
            })),
        ];
    },
};

const Tools = {
    view: () => {
        return [
            m('h2', 'Tools and skills'),
            m('ul', m('li', tools)),
        ];
    },
};

const PersonalProjects = {
    view: () => {
        return [
            m('h2', 'Personal Projects'),
            m('ul.personalProjects', personalProjects.map((pp) => m('li', [
                pp.production ? m('a.title', { href: pp.production }, pp.title) : m('p.title', pp.title),
                m('p.source', m('a', { href: pp.source }, '(source)')),
            ]))),
        ];
    },
};

const Left = {
    view: () => {
        return [
            m(Jobs),
        ];
    },
};

const Right = {
    view: () => {
        const sections = [
            Experience,
            PersonalProjects,
            Certifications,
            Tools,
            Referees
        ];

        return sections.map((s) => m('.section', m(s)));
    },
};

const Resume = {
    view: () => {
        return [
            m('#overview', m(Overview)),
            m('#main', [
                m('#left', m(Left)),
                m('#right', m(Right)),
            ]),
        ];
    },
};

document.addEventListener('DOMContentLoaded', () => {
    const routes = {
        '/':    Resume,
    };
    m.route(document.body, '/', routes);
});
