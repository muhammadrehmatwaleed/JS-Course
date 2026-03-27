// const date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toISOString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toUTCString());
// console.log(date.toJSON());
// console.log(date.toLocaleString('en-US', { timeZone: 'America/New_York' }));
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getDay());
// console.log(date.getTime());
// console.log(date.getTimezoneOffset());
// console.log(typeof date);

// const date1 = new Date('2020-01-01');
// console.log(date1);

// const date2 = new Date(2020, 0, 1); // January is month 0
// console.log(date2);

// console.log(date1.getTime()); // Milliseconds since January 1, 1970
// console.log(Date.now()); // Current time in milliseconds since January 1, 1970
// const date3 = new Date(1580515200000); // Date from milliseconds
// console.log(date3);
// let myCreatedTime = new Date('01-01-2020');
// console.log(myCreatedTime.getTime());

// let myTimestamp = Date.now();
// console.log(myTimestamp);

// console.log(Math.floor(Date.now()/1000)); // Days since January 1, 2020



console.log(new Date().toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',      
    timeZone: 'Asia/Karachi'            

}));
