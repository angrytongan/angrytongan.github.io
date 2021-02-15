'use strict';

const referees = [
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
    {
        name: 'David McCullough',
        email: 'david.mccullough@accelecon.com',
        title: 'Systems Engineer',
        place: 'Accelerated Concepts',
    },
];

const products = [
    {
        title: 'The Erg Arcade',
        production: 'https://ergarcade.com/',
        source: 'https://github.com/ergarcade',
        description: `Concept2 ergometer data collection utilities.`,
    },
    {
        title: 'Calendar Arc',
        production: 'https://df.id.au/calendararc',
        source: 'https://github.com/angrytongan/calendararc',
        description: `Circular calendar chain productivity tracker.`,
    },
    {
        title: 'GitHub',
        production: '',
        source: 'https://github.com/angrytongan',
        description: `Personal repositories.`,
    },
    /*
    {
        title: 'wodscrape',
        production: 'http://wodscrape.com.au',
        source: 'https://github.com/angrytongan/wodscrape',
        description: `Aggregator of publicly-available daily workouts.`,
    },
    */
];

const certifications = [
    {
        qualification: 'Bachelor of Computer Science',
        educator: 'University of Newcastle',
    },
    /*
    {
        qualification: 'First Aid',
        educator: 'St Johns Ambulance',
    },
    {
        qualification: 'Remedial Massage Therapist',
        educator: 'QAcademy',
    },
    {
        qualification: 'CrossFit Level 1 Trainer',
        educator: 'CrossFit Inc.',
    },
    {
        qualification: 'Certificate III and IV in Fitness',
        educator: 'Queensland Academy of Fitness',
    },
    */
];

const presentations = [
    {
        title: 'Porting OpenBSD to the Motorola ColdFire',
        role: 'Author, co-presenter',
        place: 'BSDCon 2000, San Mateo, California',
    },
    {
        title: 'Animated Three-Dimensional Information Visualizations',
        role: 'Co-author',
        place: 'Australiasian Computer Science Conference 1996, UM / RMIT',
    },
];

const overview = `
Flexible, multi-discipline software engineer and team leader with a strong work
ethic. Automation advocate. Happy working solo or in a team as a member or
leader. Enjoys learning, being challenged and getting things done.
`;

const jobs = [
    {
        place: 'Branch Merge Tag',
        start: '2014-12-01',
        end: null,
        based: 'Brisbane, Australia',
        title: 'Owner',
        description: `Application development and analytics dashboards for
        measuring athletic performance. Connectors for exercise equipment
        supporting the CSAFE interface, including the Concept2 range of rower,
        bike and ski ergometers.`,
        tools: `JavaScript / mithril.js / node.js / svelte / HTML / CSS / git /
        d3.js / ECharts / XCode / Qt / WebSockets`,
    },
    {
        place: 'Atmail',
        start: '2014-05-01',
        end: '2014-11-30',
        based: 'Sunshine Coast, Australia',
        title: 'System Administrator (contract)',
        description: `Systems administrator and architect. Maintenance on
        existing infrastructure. Development and initial prototyping of new
        infrastructure for email platform.`,
        tools: `AWS / Linux / git / JIRA / Bamboo / ELK / ansible / vagrant /
        Release management`,
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
        tools: `AWS / WSH / Linux / Jenkins / sh / git / JIRA / Release
        management`,
    },
    {
        place: 'Melbourne IT',
        start: '2013-07-01',
        end: '2013-12-31',
        based: 'Brisbane, Australia',
        title: 'Solutions Engineer (contract)',
        description: `Enterprise services team. Developer for internal R&D
        tools. High interaction with ops teams.`,
        tools: `Linux / AWS / LAMP / CSS / git`,
    },
    {
        place: 'Queensland University of Technology',
        start: '2010-01-01',
        end: '2013-06-30',
        based: 'Brisbane, Australia',
        title: 'Analyst',
        description: `Business analyst and support on QUT’s HRM systems.
        Pickup programmer and consultant for integration projects.
        Team leader (short term).`,
        tools: `Alseco / SQL / PHP / git / svn`,
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
        tools: `Linux / LAMP / JavaScript / CSS / PostreSQL / git / python`,
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
        tools: `Qt / Qtopia / Linux / svn / cross-compilers`,
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
        tools: `asm / C / C++ / Linux / Windows / svn / cross-compilers`,
    },
    {
        place: 'Stallion Technologies',
        start: '1999-06-01',
        end: '2000-12-31',
        based: 'Brisbane, Australia',
        title: 'Embedded developer',
        description: `Embedded systems development. Multiport serial
        adaptor maintenance. ADSL aggregator development.`,
        tools: `asm / C / C++ / Linux / svn / cross-compilers`,
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
        tools: `asm / C / C++ / Linux / LAMP / Windows / cross-compilers`,
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


const Referees = {
    view: () => {
        return [
            m('h2', 'Referees'),
            m('.referees', m('ul', referees.map((r) => {
                return m('li', [
                    m('p', m.trust(`<strong>${r.name}</strong>`)),
                    m('p', m('a', { href: `mailto:${r.email}`, }, r.email)),
                    m('p', r.title + ' / ' + r.place),
                ]);
            }))),
        ];
    },
};

const Presentations = {
    view: () => {
        return [
            m('h2', 'Presentations'),
            m('ul', presentations.map((p) => m('li', [
                m('p', [
                    m('b', p.title),
                    m.trust('<br />'),
                    m('i', p.role),
                    m('.presentations-place', p.place),
                ]),
            ]))),
        ];
    },
};

const Certifications = {
    view: () => {
        return [
            m('h2', 'Certifications'),
            m('ul', certifications.map((c) => m('li', [
                m('p.qualification', c.qualification),
                c.educator && m('p.educator', c.educator),
            ]))),
            m(Presentations),
        ];
    },
};

const Overview = {
    view: () => {
        return [
            m('.two-col .kinda-even', [
                m('.left', m('h1', 'Dean Fogarty')),
                m('.right .email', m('h3', m('a', { href: 'mailto:dean@df.id.au' }, 'dean@df.id.au'))),
            ]),
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
                    m('.two-col', [
                        m('.left', [
                            m('p.title', expandArray(j.title)),
                            m('p.based', expandArray(j.based)),
                            m('p.dates', dateRange(j.start, j.end)),
                            m('p.description', j.description),
                        ]),
                        m('.right', [
                            m('p.tools', m.trust(j.tools.replace(/ \//g, '&nbsp;/'))),
                        ]),
                    ]),
                ]);
            }))
        ];
    },
};

const Products = {
    view: () => {
        return [
            m('h2', 'Products'),
            m('ul.products', products.map((pp) => m('li',
                m('a.title', pp.production ? { href: pp.production } : '', pp.title),
                m.trust(' '),
                pp.source && m('a', { href: pp.source }, '(source)'),
                m.trust('<br />' + pp.description + '<br /><br />'),
            ))),
        ];
    },
};

const CertsProducts = {
    view: () => {
        return m('.two-col .kinda-even', [
            m('.left', m(Certifications)),
            m('.right', m(Products)),
        ]);
    },
};

const Resume = {
    view: () => {
        return [
            m(Overview),
            m(CertsProducts),
            m(Jobs),
            m(Referees),
        ];
    },
};

document.addEventListener('DOMContentLoaded', () => {
    const routes = {
        '/':    Resume,
    };
    m.route(document.body, '/', routes);
});
