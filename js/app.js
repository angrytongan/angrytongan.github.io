'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const graphContainer = document.getElementById("graph-container");

    const branches = [
        'master',
        'study',
        'life',
        'work',
        'play',
        'certs',
    ];

    /*
     * Top-level options:
     * https://github.com/nicoespeon/gitgraph.js/blob/master/packages/gitgraph-core/src/gitgraph.ts
     */
    const gitgraph = GitgraphJS.createGitgraph(graphContainer, {
        author: ' ',
        commitMessage: 'testing',
    });

    const master = gitgraph.branch('master');
    const life = gitgraph.branch('life');
    const study = gitgraph.branch('study');
    const certs = gitgraph.branch('certs');
    const work_it = gitgraph.branch('work - IT');
    const work_fitness = gitgraph.branch('work - Fitness');
    const projects = gitgraph.branch('projects');

    master.commit('');
    study.merge(master, 'University of Newcastle');
    certs.merge(study, 'Bachelor of Computer Science');

    work_it.merge(certs, 'Ingenico International');
    work_it.commit('Stallion Technologies');
    work_it.commit('RSA Security');

    study.commit('Fitness Institute of Australia');
    certs.merge(study, 'Cert III in Fitness');
    certs.commit('Cert IV in fitness');
    work_it.commit('Trolltech');

    work_fitness.merge(work_it, 'Dean Fogarty Personal Training');
    work_fitness.commit('Flight Centre Healthwise Team Leader');

    life.commit('marriage');

    study.commit('Bachelor of Paramedicine / Bachelor of Nursing');
    life.merge('master', 'first child');
    work_it.commit('Flight Centre contractor');
    life.commit('second child');

    work_it.commit('Atmail');
    work_it.commit('Branch Merge Tag');

    study.commit('Q Academy');
    certs.merge(study, 'Certificate III in Massage Therapy');
    certs.commit('Diploma of Remedial Massage Therapy');

    life.commit('third child');

    study.commit('CrossFit Inc.');
    certs.merge(study, 'CrossFit Level 1 Trainer');

    study.commit('Dark Horse Rowing');
    certs.merge(study, 'Concept2 Instructor');


    work_fitness.merge(work_it, 'The Erg Arcade');


    // Simulate git commands with Gitgraph API.
    /*
    master.commit("Initial commit");

    const develop = gitgraph.branch("develop");
    develop.commit("Add TypeScript");

    const aFeature = gitgraph.branch("a-feature");

    gitgraph.branch('b-feature').commit('first');
    gitgraph.branch('c-feature').commit('first');
    gitgraph.branch('d-feature').commit('first');
    gitgraph.branch('e-feature').commit('first');
    gitgraph.branch('f-feature').commit('first');
    gitgraph.branch('g-feature').commit('first');
    gitgraph.branch('h-feature').commit('first');
    gitgraph.branch('i-feature').commit('first');
    gitgraph.branch('j-feature').commit('first');

    aFeature
      .commit("Make it work")
      .commit("Make it right")
      .commit("Make it fast");

    develop.merge(aFeature);
    develop.commit("Prepare v1");

    master.merge(develop).tag("v1.0.0");
    */
});
