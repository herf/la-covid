#!/bin/bash -f
rsync -a ../standalone-etl-LAUSD/data/etl/cases/case\ rate/ etldata/
rsync -a ../standalone-etl-LAUSD/data/etl/cases/active\ cases/ etldata/

node index.js > lausd-rate.log
cp LAUSD-rates.csv ../html/lausd
cp LAUSD-active.csv ../html/lausd
#scp LAUSD-rates.csv pandas@pandas:notebook/
