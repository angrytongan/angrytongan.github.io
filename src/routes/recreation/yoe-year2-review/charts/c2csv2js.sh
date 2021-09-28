#!/bin/bash

set -e

if [ -$# -eq 0 ]; then
    >&2 echo "usage: ${0} <.csv>"
    exit 1
fi

if [ ! -f $1 ]; then
    echo "${0}: can't find ${1}"
    exit 1
fi

# Pull leading path, redundant filename, suffix
WORKOUTID=`echo $1 | sed -e 's/.*\///' -e 's/concept2-result-//' -e 's/\.csv$//'`

(
    echo "export const workout_${WORKOUTID} = [";
    cat $1 | awk -F, 'BEGIN { OFS="," } { print "t:"$2, "d:"$3, "p:"$4, "w:"$5, "c:"$6, "sr:"$7 }'|sed -e '1d'|sed -e 's/^/{/' -e 's/$/},/'
    echo ']';
) > $WORKOUTID.js
