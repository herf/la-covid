#!/bin/bash -f
node index.js > lausd-rate.csv
cp LAUSD-rates.csv ../html/lausd
cp LAUSD-active.csv ../html/lausd
scp LAUSD-rates.csv pandas@pandas:notebook/
