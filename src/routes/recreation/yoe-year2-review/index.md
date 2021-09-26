<script>
    import EChart from '$lib/components/Echart.svelte';
    import { theme } from '$lib/store';
    import * as charts from './charts.js';
    import { dev } from '$app/env';
</script>

# Year of the Engine Program Review - Year 2

---

Please note this is a review of the **_2nd year_**. [Go here for the 1st
year](/recreation/yoe-year1-review).

---

## tl;dr

I completed the second year of [The Gains Lab](https://thegainslab.com) [Year
of the Engine](https://thegainslab.com/engine) capacity program by [Matt
Wiebke](https://www.instagram.com/thegainslab1/). The results of each workout
were recorded. Some evidence of continued improvement from Year 1 is
demonstrated. External factors significantly impacted training efforts.
Difficulty level increased substantially. I continue to recommend the program
if you wish to improve your cardiovascular capacity.

## Contents

* <a rel="external" href="#about-this-review">About this review</a>

    * <a rel="external" href="#about-this-review-disclosure">Disclosure</a>
    * <a rel="external" href="#about-this-review-approval">Approval</a>
    * <a rel="external" href="#about-this-review-workout-obfuscation">Workout obfuscation</a>
    * <a rel="external" href="#about-this-review-data">Data</a>
    * <a rel="external" href="#program">Program Overview</a>
    * <a rel="external" href="#program-phases">Phases</a>
    * <a rel="external" href="#program-tracks">Tracks</a>
    * <a rel="external" href="#program-workouts">Workouts</a>
    * <a rel="external" href="#program-workout-types">Workout types</a>
    * <a rel="external" href="#program-equipment">Equipment</a>
    * <a rel="external" href="#program-additional-training">Additional Training</a>

* <a rel="external" href="#methodology">Methodology</a>

    * <a rel="external" href="#methodology-the-subject">The subject</a>
    * <a rel="external" href="#methodology-scheduling">Scheduling</a>
    * <a rel="external" href="#methodology-additional-training">Additional Training</a>
    * <a rel="external" href="#methodology-equipment">Equipment</a>
    * <a rel="external" href="#methodology-recording-results">Recording results</a>
    * <a rel="external" href="#methodology-execution">Execution</a>

* <a rel="external" href="#objective-results">Objective Results</a>

    * <a rel="external" href="#objective-results-10-minute-rower">10:00.0 Rower time trial</a>

* <a rel="external" href="#subjective-observations">Subjective Observations</a>

* <a rel="external" href="#program-review">Program review</a>

    * <a rel="external" href="#program-review-program-structure">Program structure</a>
    * <a rel="external" href="#program-review-workout-intensity">Workout intensity</a>
    * <a rel="external" href="#program-review-time-commitment">Time commitment</a>
    * <a rel="external" href="#program-review-mental-fortitude">Mental fortitude</a>
    * <a rel="external" href="#program-review-recovery">Recovery</a>

### <a name="about-this-review">About this review</a>

This review of Year 2 follows on from [Year 1](/recreation/yoe-year1-review).

<p class="self">
    A box like this describes a decision, experience or an observation that I
    made while on the program.
</p>

### <a name="about-this-review-disclosure">Disclosure</a>

I have trained with The Gains Lab previously, having completed five months of
the [Total Domination](https://www.thegainslab.com/dominate) program about 9
months prior to starting Year of the Engine Year 1. I have also done some
behind-the-scenes work on [The Gains Lab website](https://thegainslab.com)
in exchange for a reduced rate on this program.

This review is unsolicited.

### <a name="about-this-review-approval">Approval</a>

Prior to publishing, this review was sent to <a
    href="mailto:coach@thegainslab.com">Matt Wiebke</a> from The Gains Lab seeking:

* Approval to show some specific workouts from the program;
* Comment on accuracy of how I describe the program.

### <a name="about-this-review-workout-obfuscation">Workout obfuscation</a>

For purposes of discussion, selected workouts that comprise the program
are described in detail in this review. All other workout descriptions
are obfuscated to protect the content of the program. This obfuscation
is described in more detail <a rel="external" href="#program-workouts">below</a>.

### <a name="about-this-review-data">Data</a>

The results and graphs presented in this review come directly from data
collected throughout the program. Stroke data information for specific rower,
SkiErg and BikeErg workouts were sourced from my account on the [Concept2
Logbook](https://log.concept2.com); links are provided where referenced.

### <a name="program">Program Overview</a>

A broad overview of the program can be found in the [Year 1
review](/recreation/yoe-year1-review).  More detail is available on [The Gains
Lab Engine](https://thegainslab.com/engine) page.  Matt also gives a good
summary [on this /r/crossfit
thread](https://www.reddit.com/r/crossfit/comments/i86gqh/year_of_the_engine_data_from_a_almost_complete/g19kg1f/).


### <a name="program-phases">Phases</a>

Year 2 has four phases. Each phase builds on the work from the
previous phase, necessitating completing each one before starting the
next.

<table>
    <tr>
        <th>Phase</th>
        <th>Focus</th>
        <th>Months</th>
        <th>Workout&nbsp;types</th>
    </tr>
    <tr>
        <td>Cyborg</td>
        <td>Pure capacity &plus; functional movement</td>
        <td>1, 2, 3</td>
        <td>Ascending, Cyborg, Endurance, Intervals, Polarisation</td>
    </tr>
    <tr>
        <td>Hybrid</td>
        <td>Pacing and power</td>
        <td>4, 5, 6</td>
        <td>Ascending, Cyborg, Endurance, Hybrid, Intervals, Polarisation</td>
    </tr>
    <tr>
        <td>Devour</td>
        <td>Intervals with increasing work-to-rest ratios</td>
        <td>7, 8, 9</td>
        <td>(Ascending) Devour, Endurance, FLUX, Intervals, Polarisation, Time Trial</td>
    </tr>
    <tr>
        <td>Infinity</td>
        <td>Increasing work, Decreasing rest</td>
        <td>10, 11, 12</td>
        <td>Ascending, Endurance, FLUX, Infinity, Intervals, Polarisation, Time Trial</td>
    </tr>
</table>

### <a name="program-tracks">Tracks</a>

Year 2 uses a single track; there is no MetCon track like in Year 1.

### <a name="program-workouts">Workouts</a>

Workouts were received via email each month as a single .pdf file. Each file
contains four weeks of workouts, each week having five workouts to complete.

### <a name="program-workout-types">Workout types</a>

Each workout type is described below. As <a rel="external"
href="#about-this-review-workout-obfuscation">mentioned above</a>, only a
select number of workouts are described in full in this document; all other
workout descriptions are obfuscated according to the rules below.

<table>
    <tr>
        <th>Workout Type</th>
        <th>Description</th>
        <th>Example workout</th>
        <th>Obfuscation</th>
        <th>Described here as</th>
    </tr>
    <tr>
        <th>Interval</th>
        <td>Alternating rounds of work time or distance, and rest time.  Broken
        up into speed/threshold, anaerobic and max aerobic power
        sub-types.</td>
        <td>4x500m/1:00r</td>
        <td>Cumulative work time and rest time.</td>
        <td class="right"><strong>2k/3:00r</strong></td>
    </tr>
    <tr>
        <th>Endurance</th>
        <td>Total duration of work time at consistent pace.</td>
        <td>52:00 consistent pace</td>
        <td>No change.</td>
        <td class="right"><strong>52:00</strong></td>
    </tr>
    <tr>
        <th>Cyborg</th>
        <td>Exercises to be done for time, or for rounds and repetitions.</td>
        <td>For time<br />
            <ul>
                <li>20 burpees</li>
                <li>Run 400m (or row 500m)</li>
            </ul>
            Repeat until you have completed 100
            burpees and run 1 mile (or rowed 2k)</td>
        <td>Not used in this review.</td>
        <td>Not used in this review.</td>
    </tr>
    <tr>
        <th>Time trials</th>
        <td>Total duration of work time at or beyond a competition
            pace.</td>
        <td>10:00.0 Time Trial</td>
        <td>No change.</td>
        <td class="right"><strong>10:00.0</strong></td>
    </tr>
    <tr>
        <th>Polarisation</th>
        <td>Total duration of work time, with repeated intervals of
            maximum effort for short durations.</td>
        <td>24:00 at endurance pace with max effort for 0:07 at minutes 5,
            10, 15 and 20</td>
        <td>Total work time.</td>
        <td
            class="right"><strong>24:00</strong></td>
    </tr>
    <tr>
        <th>FLUX</th>
        <td>Alternating rounds of work at endurance pace and above
            endurance pace.</td>
        <td>12 rounds of:
            <ul>
                <li>2 minutes endurance pace</li>
                <li>1 minute at 120% endurance pace</li>
            </ul>
        </td>
        <td>Total work time.</td>
        <td class="right"><strong>36:00</strong></td>
    </tr>
    <tr>
        <th>Ascending</th>
        <td>Max intervals with fixed work / rest times but increasing distance
        / calorie targets.</td>
        <td>??x0:30 work, 0:30 rest<br />
        Row goals: 105m-110m-115m-120m-125m-etc<br />
        Bike goals: 9cal-10cal-11cal-12cal-etc
        </td>
        <td>Distance &plus; delta distance</td>
        <td class="right"><strong>105+15</strong></td>
    </tr>
    <tr>
        <th>Hybrid</th>
        <td>Multiple varied interval sets, separated by rest.</td>
        <td>4 rounds:
            <ul>
                <li>1:00 work</li>
                <li>0:30 rest</li>
            </ul>
            Rest 2:00<br />
            4 rounds:
            <ul>
                <li>2:00 work</li>
                <li>0:30 rest</li>
            </ul>
        </td>
        <td>Cumulative work time and rest time</td>
        <td class="right"><strong>12:00/6:00r</td>
    </tr>
    <tr>
        <th>Devour</th>
        <td>Increasing work time with unchanging rest at a variant of time
        trial pace.</td>
        <td>8 rounds total<br />
        0:30 work, 0:30 rest<br />
        1:00 work, 0:30 rest<br />
        1:30 work, 0:30 rest<br />
        ...<br />
        Continue until you reach 4:00<br />
        Pace = time trial pace -1cal</td>
        <td>Cumulative work time and rest time</td>
        <td class="right"><strong>10:00/8:00r</strong></td>
    </tr>
    <tr>
        <th>Infinity</th>
        <td>Intervals with increasing work time but steady rest, then intervals
        with steady work time but decreasing rest, then a max time round. All
        intervals to be done at a variant of time trial pace.</td>
        <td>@ time trial pace -1cal:<br />
        1:00 work, 1:00 rest<br />
        2:00 work, 1:00 rest<br />
        3:00 work, 1:00 rest<br />
        3:00 work, 0:45 rest<br />
        3:00 work, 0:30 rest<br />
        3:00 work, 0:15 rest<br />
        <br />
        After 0:15 rest, continue until you fail the pace in a given minute<br /></td>
        <td>Cumulative work time and rest time</td>
        <td class="right"><strong>15:00+/4:30r</strong></td>
    </tr>
</table>

[Sample workouts](https://www.thegainslab.com/engine)
[FAQ](https://www.thegainslab.com/yefaq)


### <a name="program-equipment">Equipment</a>

Year of the Engine uses ergometers. The program as supplied gives options for:

- Rowing on the Concept2 indoor rowing machine or similar;
- Skiing on the Concept2 SkiErg or similar;
- Biking on the Assault Air Bike, Rogue Echo Bike, Concept2 BikeErg, Schwinn
  AirDyne or similar; and
- Running.

Each workout can be completed with a different apparatus. Scalings are
supplied.

### <a name="program-additional-training">Additional Training</a>

The program can be run as standalone or in addition to other training.
Integration with other training is left to the athlete to manage.

## <a name="methodology">Methodology</a>

### <a name="methodology-the-subject">The subject</a>

- Male, even later 40s than in Year 1, 182cm, 100kg.
- Married, kids, desk-bound work. Normal day-to-day western-lifestyle stresses.
- Basketball, mountain biking, road cycling, snowboarding, martial arts prior
  to 2012. CrossFit and running about after the kids since 2012.
- Non-competitive exerciser. Training to stay healthy.
- Between 30 and 45 minutes available to train each day.
- Meat-and-three-veg diet. Dad-bod well in progress.

### <a name="methodology-scheduling">Scheduling</a>

The program places no restriction on what days workouts are to occur,
only that each weeks' workouts are to be completed before moving to the
next week.

The program deliberately allows you to move workouts around during the
week in order to fit in with other training and life.

<div class="self">
    Due to the impact of restrictions in Australia as a result of the <a
    href="https://en.wikipedia.org/wiki/COVID-19_pandemic">COVID-19
    pandemic</a>, it became incredibly difficult to routinely schedule training
    due to changing familial responsibilities. Workouts were forced into gaps
    in my timetable as they became available, unlike Year 1 which was more
    strictly regimented.

    Rest days were also slotted haphazardly, which no doubt affected
    recovery and subsequent workouts.
</div>

### <a name="methodology-additional-training">Additional Training</a>

<div class="self">
    No additional training was undertaken during Year 2, due to time
    constraints as <a rel="external" href="#methodology-scheduling">described
    above</a>.

    All other exercise was incidental, mostly just playing with my kids.
</div>

### <a name="methodology-equipment">Equipment</a>

I chose:

<table>
    <tr>
        <th>Workout&nbsp;type</th>
        <th>Apparatus</th>
        <th>Rationale</th>
    </tr>
    <tr>
        <td>Ascending<br />
            Cyborg<br />
            Devour<br />
            Hybrid<br />
            Infinity<br />
            Interval
        </td>
        <th>Rower SkiErg BikeErg</th>
        <td>Concept2 provide the mobile application <a
        href="https://concept2.com/ergdata">ErgData</a> which records entire
        workouts performed on their ergometers. This includes per-stroke data,
        which came in useful for examining interval consistency.</td>
    </tr>
    <tr>
        <td>Time trials</td>
        <th>Rower</th>
        <td>I chose only the rower for time trials.</td>
    </tr>
    <tr>
        <td>Endurance<br />
            Polarisation<br />
            FLUX<br />
        </td>
        <th>AirDyne</th>
        <td>I find longer sessions more comfortable and tolerable on
            the bike than on rower or SkiErg.</td>
    </tr>
</table>

<div class="images">
    <div class="apparatus">
        <img src="/yoe-year-1-review/IMG_1217.jpeg" alt="Schwinn AirDyne6" title="Schwinn AirDyne6" />
        Schwinn AirDyne6
    </div>

    <div class="apparatus">
        <img src="/yoe-year-1-review/IMG_1218.jpeg" alt="Concept2 SkiErg" title="Concept2 SkiErg" />
        Concept2 SkiErg
    </div>

    <div class="apparatus">
        <img src="/yoe-year-1-review/IMG_1219.jpeg" alt="Concept2 Rower" title="Concept2 Rower" />
        Concept2 Rower
    </div>

    <div class="apparatus">
        <img src="/yoe-year-2-review/IMG_2054.jpeg" alt="Concept2 BikeErg" title="Concept2 BikeErg" />
        Concept2 BikeErg
    </div>
</div>

<div class="clear"></div>

### <a name="methodology-recording-results">Recording results</a>

The .pdf supplied each month specifies what to record for each workout, with
space available to write results. Matt suggests printing out each sheet and
recording directly on the sheet.

<div class="self">
    On the rower and SkiErg I used Concept2's <a
    href="https://concept2.com/ergdata">ErgData</a> to record each session,
    which were then uploaded to the <a href="https://log.concept2.com">Concept2
    Logbook</a>. Workout information,
    including stroke data, was extracted using the <a
    href="https://log.concept2.com/developers/documentation/">Concept2
    developer API</a>).

    The AirDyne lacks automated recording, so I took a photo of the
    monitor at the end of each workout and tabled the results in a
    spreadsheet.
</div>

### <a name="methodology-execution">Execution</a>

I started the program on Monday 17th September 2020, and finished on Monday
27th September, 2021.

Workouts, and their phases, were completed as below.

<EChart
    id="graph-execution-summary"
    theme={$theme}
    height="170"
    option={charts.execution.summary()}
/>

## <a name="objective-results">Objective results</a>

The following workouts are presented as evidence of performance changes both
during and after Year 2 of the Year of the Engine program. The results are
mine alone (<i>n</i> = 1).

### <a name="objective-results-10-minute-rower">10:00.0 Rower time trial</a>

## <a name="subjective-observations">Subjective Observations</a>

## <a name="program-review">Program review</a>

### <a name="program-review-program-structure">Program Structure</a>

The structuring of Year 2 is the same as Year 1:

- 5 workouts per week.
- 4 weeks supplied at the start of the month.
- 3 months per phase.
- 4 phases over the entire year.
- Move workouts around to suit your schedule.
- Standalone or integrate with your existing training.
- Ergometer or feet required.
- Workouts are unambiguously described.

### <a name="program-review-workout-intensity">Workout intensity</a>

Like Year 1, the intensity of each workout type is described at the start of
each 3-month phase, as well as carrying over from Year 1. The first 2 phases of
Year 2 run like Year 1, where the athlete works at a pace sustainable across
the entire workout, or as a percentage of the athlete's endurance pace that was
determined in Year 1.

However, the latter 2 phases of Year 2 (Devour and Infinity) incorporate new
workout types where pacing for these workouts is given as a variation of a
time-trial pace.

At the start of month 7 (Devour phase) and month 10 (Infinity phase), the
athlete completes a 10:00 time trial on their chosen apparatus. The number of
calories accumulated on their apparatus' monitor at the end of the trial is
divided by 10 to yield a target **pace per minute** value.

This value is used in Devour and Infinity workouts. These workouts are described
as TT plus or minus a constant. For example,

- 8 rounds at pace TT-1:
  - 0:30 work, 0:30 rest
  - 1:00 work, 0:30 rest
  - 1:30 work, 0:30 rest
  - ...

This workout is 8 rounds long, each work period extends by 0:30, the rest
period does not change, and it is to be performed at the athlete's time trial
pace minus one (1) calorie.

Devour and Infinity workouts vary in pacing from TT-4 to TT+4.

<p class="self">

</p>

### <a name="program-review-time-commitment">Time commitment</a>

<style>
    .images {
        display: flex;
    }
    .images .apparatus {
        width: 100%;
    }
    .self {
        border: 1px solid #0af;
        color: #eee;
        background: #06a;
        padding: 1em;
    }
    .self a {
        color: white;
    }
</style>
