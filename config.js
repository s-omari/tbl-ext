'use strict';

var extensionURL = new URL(window.location.href);

// console.log(siteURL.href , 'siteURL' );
var delimiter = '~';

// this is the  UID for google analytics integration
// let analyticsUID = 'UA-108556658-1';
var analyticsGTMID = 'GTM-TW3RR5N';

var matomoServer = '//52.60.221.88/piwik/';

var transmitter = 'matomo'; // 'matomoTagManager'


//Generate session number between 0 and 10000 & current date
var myRandomNumber = Math.floor(Math.random() * 10000);

// parent.window.location 
var currentDate = Date.now();
var sessionId = currentDate - myRandomNumber;

var getRequestId = function getRequestId() {
  return Date.now();
};

var shortenString = function shortenString(string) {
  switch (string.toLowerCase()) {
    case 'viz':
      return 'VIE';

    case 'dashboardname':
      return 'NAM';

    case 'worksheetname':
      return 'NAM';

    case 'view':
      return 'VIE';

    case 'filter':
      return 'FLT';

    case 'mark':
      return 'MAR';

    case 'parameter':
      return 'PAR';

    case 'story point':
      return 'STP';

    case 'tab':
      return 'TAB';

    case 'tollbar button':
      return 'tob';

    case 'load':
      return 'LAD';

    case 'apply':
      return 'APL';

    case 'select':
      return 'SEL';

    case 'click':
      return 'CLC';

    case 'resize':
      return 'res';

    case 'toolbar':
      return 'TBR';

    case 'url':
      return 'URL';

    case 'name':
      return 'NAM';

    case 'width':
      return 'WID';

    case 'height':
      return 'HEI';

    case 'field name':
      return 'FIN';

    case 'type':
      return 'TYP';

    case 'exclude filter':
      return 'EXF';

    case 'value applied':
      return 'VAA';

    case 'domain min':
      return 'DIN';

    case 'domain max':
      return 'DAX';

    case 'min':
      return 'MIN';

    case 'max':
      return 'MAX';

    case 'include nulls':
      return 'INN';

    case 'period type':
      return 'PET';

    case 'date range type':
      return 'DRT';

    case 'range number':
      return 'RAN';

    case 'value selected':
      return 'VAS';

    case 'value':
      return 'VAL';
    case 'action':
      return 'ACT';
    case 'index':
      return 'IND';
    case 'caption':
      return 'CAP';
    case 'button name':
      return 'BUN';

    default:
      console.log('Could not find a shorthand for the string: ' + string);
      return string;
  }
};