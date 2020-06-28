## Daily feed of LA Public Health Data

Los Angeles county has more than 10 million people organized over a large number of regions. 

LA public health provides a dashboard of cases, but daily snapshots by geography are not available, so it has been difficult to estimate how COVID-19 is changing by region of the city. 

Using the Wayback Machine and daily mirrors, we have constructed a feed of these updates.

### Here are our feeds, which you can use for anything your want to:

- [la-covid-feed.csv](https://github.com/herf/la-covid/raw/master/la-covid-feed.csv)
- [la-covid-region.csv](https://github.com/herf/la-covid/raw/master/la-covid-region.csv)

We use "Service Planning Areas" to group neighborhoods [region.csv](https://github.com/herf/la-covid/raw/master/region.csv). They apply across the county, not just the city. There may be errors in this file since it was transcribed by hand.

Please note that these data are not timestamped with *test dates* but instead with *result dates* (when the webpage updates), and so a delay should be expected when using these timestamps.

### Data souces

- Los Angeles publishes per-neighborhood COVID case data at [this webpage](http://publichealth.lacounty.gov/media/Coronavirus/locations.htm)
- There is a geographic dashboard of total cases [here](http://dashboard.publichealth.lacounty.gov/covid19_surveillance_dashboard/).
- We have used this list of [Service Planning Areas](http://www.laalmanac.com/health/he798.php) in order to cluster the neighborhoods into regions. This mapping (including typos in the source data).
