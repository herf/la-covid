## Daily feed of LA Public Health Data

Los Angeles publishes per-neighborhood COVID case data at [this webpage](http://publichealth.lacounty.gov/media/Coronavirus/locations.htm) and there is a geographic dashboard of total cases [here](http://dashboard.publichealth.lacounty.gov/covid19_surveillance_dashboard/).

However, daily snapshots by geography are not available, so it has been difficult to estimate how COVID-19 is changing by region of the city. 

Using the Wayback Machine and daily mirrors, we have constructed a feed of these updates.

### Our main summary feed (deduped and cleaned) is available at [la-covid-feed.js](la-covid-feed.js)

Please note that these data are not timestamped with *test dates* but instead with *result dates* (when the webpage updates), and so a delay should be expected when using these timestamps.
