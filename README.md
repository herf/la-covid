## Daily feed of LA Public Health Data

[Dashboard is here](https://herf.org/la-covid/).

Los Angeles county has more than 10 million people organized over a large number of regions. 

LA public health provides a dashboard of cases, but daily snapshots by geography are not available, so it has been difficult to estimate how COVID-19 is changing by region of the city. 

Using the Wayback Machine and daily mirrors, we have constructed a feed of these updates.

### Here are our feeds, which you can link to in your own projects:

- [la-covid-feed.csv](https://github.com/herf/la-covid/raw/master/la-covid-feed.csv): all timestamped data according to the LA dashboard
- [la-covid-region.csv](https://github.com/herf/la-covid/raw/master/la-covid-region.csv): our groupings of regions, with daily summaries

We use "Service Planning Areas" to group neighborhoods in [region.csv](https://github.com/herf/la-covid/raw/master/region.csv). They apply across the county, not just the city. There may be errors in this file since it was transcribed by hand.

Please note that these data are not timestamped with *test dates* but instead with *result dates* (when the webpage updates), and so a delay should be expected when using these timestamps.

### Region key

- AV: Antelope Valley
- E: East LA
- MLA: Metro LA
- S: South LA
- SB: South Bay
- SFV: San Fernando Valley
- SGV: San Gabriel Valley
- W: Westside

### Data souces

- Los Angeles publishes per-neighborhood COVID case data at [this webpage](http://publichealth.lacounty.gov/media/Coronavirus/locations.htm)
- There is a geographic dashboard of total cases [here](http://dashboard.publichealth.lacounty.gov/covid19_surveillance_dashboard/).
- We have used this list of [Service Planning Areas](http://www.laalmanac.com/health/he798.php) in order to cluster the neighborhoods into regions. Our mapping also includes region maps for typos in the source data.
