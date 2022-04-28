const express = require('express');
const app = express();
const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('agora-access-token');

// Rtc Examples
const appID = 'cf8f308e1fb3430e8dd8a4bbf0dcbf6e';
const appCertificate = 'c5165f9e86314a33bc5c3ce976472c81';
const channelName = '';
const uid = 2882341273;
const account = "2882341273";
const role = RtcRole.PUBLISHER;

const expirationTimeInSeconds = 3600

const currentTimestamp = Math.floor(Date.now() / 1000)

const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

// IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

// Build token with uid
const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);
console.log("Token With Integer Number Uid: " + tokenA);

// Build token with user account
const tokenB = RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs);
console.log("Token With UserAccount: " + tokenB);

app.listen(4444, () => {
    console.log("Server is running");
});