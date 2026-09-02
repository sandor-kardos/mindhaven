const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const path = require('path');

const propertyId = '480925718';
const keyFilename = path.join(__dirname, '..', '.secrets', 'service-account.json');

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename,
});

async function runRealtimeReport() {
  try {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${propertyId}`,
      dimensions: [
        { name: 'eventName' },
      ],
      metrics: [
        { name: 'eventCount' },
      ],
    });

    console.log('=== GA4 REALTIME REPORT ===');
    console.log(`Property ID: ${propertyId}`);
    
    let totalEvents = 0;

    if (response.rows && response.rows.length > 0) {
      console.log('\nEvents in the last 30 minutes:');
      console.log('---------------------------------------------------------');
      console.log(
        'Event Name'.padEnd(35) + 'Event Count'
      );
      console.log('---------------------------------------------------------');

      response.rows.forEach(row => {
        const eventName = row.dimensionValues[0].value;
        const eventCount = parseInt(row.metricValues[0].value, 10);
        
        totalEvents += eventCount;

        console.log(
          eventName.padEnd(35) +
          eventCount.toString()
        );
      });
      console.log('---------------------------------------------------------');
    } else {
      console.log('\nNo realtime event data found in the last 30 minutes.');
    }

    const [userResponse] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [
        { name: 'activeUsers' },
      ],
    });

    const activeUsersNow = userResponse.rows && userResponse.rows.length > 0
      ? userResponse.rows[0].metricValues[0].value
      : '0';

    console.log(`\nTOTAL ACTIVE USERS RIGHT NOW: ${activeUsersNow}`);
    console.log(`TOTAL EVENTS (30 MIN): ${totalEvents}`);
    console.log('===========================\n');
  } catch (error) {
    console.error('Error running GA4 Realtime Report:', error);
  }
}

runRealtimeReport();
