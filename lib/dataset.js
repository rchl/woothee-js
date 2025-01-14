var KEY_LABEL = exports.KEY_LABEL = 'label',
    KEY_NAME = exports.KEY_NAME = 'name',
    KEY_TYPE = exports.KEY_TYPE = 'type',
    KEY_CATEGORY = exports.KEY_CATEGORY = 'category',
    KEY_OS = exports.KEY_OS = 'os',
    KEY_OS_VERSION = exports.KEY_OS_VERSION = 'os_version',
    KEY_VENDOR = exports.KEY_VENDOR = 'vendor',
    KEY_VERSION = exports.KEY_VERSION = 'version';

var TYPE_BROWSER = 'browser',
    TYPE_OS = 'os',
    TYPE_FULL = 'full';

var CATEGORY_PC = exports.CATEGORY_PC = 'pc',
    CATEGORY_SMARTPHONE = exports.CATEGORY_SMARTPHONE = 'smartphone',
    CATEGORY_MOBILEPHONE = exports.CATEGORY_MOBILEPHONE = 'mobilephone',
    CATEGORY_CRAWLER = exports.CATEGORY_CRAWLER = 'crawler',
    CATEGORY_APPLIANCE = exports.CATEGORY_APPLIANCE = 'appliance',
    CATEGORY_MISC = exports.CATEGORY_MISC = 'misc';

var ATTRIBUTE_NAME = exports.ATTRIBUTE_NAME = 'name',
    ATTRIBUTE_CATEGORY = exports.ATTRIBUTE_CATEGORY = 'category',
    ATTRIBUTE_OS = exports.ATTRIBUTE_OS = 'os',
    ATTRIBUTE_OS_VERSION = exports.ATTRIBUTE_OS_VERSION = 'os_version',
    ATTRIBUTE_VENDOR = exports.ATTRIBUTE_VENDOR = 'vendor',
    ATTRIBUTE_VERSION = exports.ATTRIBUTE_VERSION = 'version';

var VALUE_UNKNOWN = exports.VALUE_UNKNOWN = 'UNKNOWN';

var CATEGORY_LIST = exports.CATEGORY_LIST = [
  CATEGORY_PC, CATEGORY_SMARTPHONE, CATEGORY_MOBILEPHONE,
  CATEGORY_CRAWLER, CATEGORY_APPLIANCE, CATEGORY_MISC, VALUE_UNKNOWN
];
var ATTRIBUTE_LIST = exports.ATTRIBUTE_LIST = [ATTRIBUTE_NAME, ATTRIBUTE_CATEGORY, ATTRIBUTE_OS, ATTRIBUTE_VENDOR, ATTRIBUTE_VERSION, ATTRIBUTE_OS_VERSION];

var DATASET = {};
// GENERATED from dataset.yaml at Thu Apr 11 17:12:02 JST 2019 by tagomoris
var obj;
obj = {label:'MSIE', name:'Internet Explorer', type:'browser'};
obj['vendor'] = 'Microsoft';
DATASET[obj.label] = obj;
obj = {label:'Edge', name:'Edge', type:'browser'};
obj['vendor'] = 'Microsoft';
DATASET[obj.label] = obj;
obj = {label:'Chrome', name:'Chrome', type:'browser'};
obj['vendor'] = 'Google';
DATASET[obj.label] = obj;
obj = {label:'Safari', name:'Safari', type:'browser'};
obj['vendor'] = 'Apple';
DATASET[obj.label] = obj;
obj = {label:'Firefox', name:'Firefox', type:'browser'};
obj['vendor'] = 'Mozilla';
DATASET[obj.label] = obj;
obj = {label:'Opera', name:'Opera', type:'browser'};
obj['vendor'] = 'Opera';
DATASET[obj.label] = obj;
obj = {label:'Vivaldi', name:'Vivaldi', type:'browser'};
obj['vendor'] = 'Vivaldi Technologies';
DATASET[obj.label] = obj;
obj = {label:'Sleipnir', name:'Sleipnir', type:'browser'};
obj['vendor'] = 'Fenrir Inc.';
DATASET[obj.label] = obj;
obj = {label:'Webview', name:'Webview', type:'browser'};
obj['vendor'] = 'OS vendor';
DATASET[obj.label] = obj;
obj = {label:'YaBrowser', name:'Yandex Browser', type:'browser'};
obj['vendor'] = 'Yandex';
DATASET[obj.label] = obj;
obj = {label:'Win', name:'Windows UNKNOWN Ver', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'Win10', name:'Windows 10', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'Win8.1', name:'Windows 8.1', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'Win8', name:'Windows 8', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'Win7', name:'Windows 7', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'WinVista', name:'Windows Vista', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'WinXP', name:'Windows XP', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'Win2000', name:'Windows 2000', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'WinNT4', name:'Windows NT 4.0', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'WinMe', name:'Windows Me', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'Win98', name:'Windows 98', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'Win95', name:'Windows 95', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'WinPhone', name:'Windows Phone OS', type:'os'};
obj['category'] = 'smartphone';
DATASET[obj.label] = obj;
obj = {label:'WinCE', name:'Windows CE', type:'os'};
obj['category'] = 'smartphone';
DATASET[obj.label] = obj;
obj = {label:'OSX', name:'Mac OSX', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'MacOS', name:'Mac OS Classic', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'Linux', name:'Linux', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'BSD', name:'BSD', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'ChromeOS', name:'ChromeOS', type:'os'};
obj['category'] = 'pc';
DATASET[obj.label] = obj;
obj = {label:'Android', name:'Android', type:'os'};
obj['category'] = 'smartphone';
DATASET[obj.label] = obj;
obj = {label:'iPhone', name:'iPhone', type:'os'};
obj['category'] = 'smartphone';
DATASET[obj.label] = obj;
obj = {label:'iPad', name:'iPad', type:'os'};
obj['category'] = 'smartphone';
DATASET[obj.label] = obj;
obj = {label:'iPod', name:'iPod', type:'os'};
obj['category'] = 'smartphone';
DATASET[obj.label] = obj;
obj = {label:'iOS', name:'iOS', type:'os'};
obj['category'] = 'smartphone';
DATASET[obj.label] = obj;
obj = {label:'FirefoxOS', name:'Firefox OS', type:'os'};
obj['category'] = 'smartphone';
DATASET[obj.label] = obj;
obj = {label:'BlackBerry', name:'BlackBerry', type:'os'};
obj['category'] = 'smartphone';
DATASET[obj.label] = obj;
obj = {label:'BlackBerry10', name:'BlackBerry 10', type:'os'};
obj['category'] = 'smartphone';
DATASET[obj.label] = obj;
obj = {label:'docomo', name:'docomo', type:'full'};
obj['vendor'] = 'docomo';
obj['category'] = 'mobilephone';
obj['os'] = 'docomo';
DATASET[obj.label] = obj;
obj = {label:'au', name:'au by KDDI', type:'full'};
obj['vendor'] = 'au';
obj['category'] = 'mobilephone';
obj['os'] = 'au';
DATASET[obj.label] = obj;
obj = {label:'SoftBank', name:'SoftBank Mobile', type:'full'};
obj['vendor'] = 'SoftBank';
obj['category'] = 'mobilephone';
obj['os'] = 'SoftBank';
DATASET[obj.label] = obj;
obj = {label:'willcom', name:'WILLCOM', type:'full'};
obj['vendor'] = 'WILLCOM';
obj['category'] = 'mobilephone';
obj['os'] = 'WILLCOM';
DATASET[obj.label] = obj;
obj = {label:'jig', name:'jig browser', type:'full'};
obj['vendor'] = '';
obj['category'] = 'mobilephone';
obj['os'] = 'jig';
DATASET[obj.label] = obj;
obj = {label:'emobile', name:'emobile', type:'full'};
obj['vendor'] = '';
obj['category'] = 'mobilephone';
obj['os'] = 'emobile';
DATASET[obj.label] = obj;
obj = {label:'SymbianOS', name:'SymbianOS', type:'full'};
obj['vendor'] = '';
obj['category'] = 'mobilephone';
obj['os'] = 'SymbianOS';
DATASET[obj.label] = obj;
obj = {label:'MobileTranscoder', name:'Mobile Transcoder', type:'full'};
obj['vendor'] = '';
obj['category'] = 'mobilephone';
obj['os'] = 'Mobile Transcoder';
DATASET[obj.label] = obj;
obj = {label:'Nintendo3DS', name:'Nintendo 3DS', type:'full'};
obj['vendor'] = 'Nintendo';
obj['category'] = 'appliance';
obj['os'] = 'Nintendo 3DS';
DATASET[obj.label] = obj;
obj = {label:'NintendoDSi', name:'Nintendo DSi', type:'full'};
obj['vendor'] = 'Nintendo';
obj['category'] = 'appliance';
obj['os'] = 'Nintendo DSi';
DATASET[obj.label] = obj;
obj = {label:'NintendoWii', name:'Nintendo Wii', type:'full'};
obj['vendor'] = 'Nintendo';
obj['category'] = 'appliance';
obj['os'] = 'Nintendo Wii';
DATASET[obj.label] = obj;
obj = {label:'NintendoWiiU', name:'Nintendo Wii U', type:'full'};
obj['vendor'] = 'Nintendo';
obj['category'] = 'appliance';
obj['os'] = 'Nintendo Wii U';
DATASET[obj.label] = obj;
obj = {label:'PSP', name:'PlayStation Portable', type:'full'};
obj['vendor'] = 'Sony';
obj['category'] = 'appliance';
obj['os'] = 'PlayStation Portable';
DATASET[obj.label] = obj;
obj = {label:'PSVita', name:'PlayStation Vita', type:'full'};
obj['vendor'] = 'Sony';
obj['category'] = 'appliance';
obj['os'] = 'PlayStation Vita';
DATASET[obj.label] = obj;
obj = {label:'PS3', name:'PlayStation 3', type:'full'};
obj['vendor'] = 'Sony';
obj['category'] = 'appliance';
obj['os'] = 'PlayStation 3';
DATASET[obj.label] = obj;
obj = {label:'PS4', name:'PlayStation 4', type:'full'};
obj['vendor'] = 'Sony';
obj['category'] = 'appliance';
obj['os'] = 'PlayStation 4';
DATASET[obj.label] = obj;
obj = {label:'Xbox360', name:'Xbox 360', type:'full'};
obj['vendor'] = 'Microsoft';
obj['category'] = 'appliance';
obj['os'] = 'Xbox 360';
DATASET[obj.label] = obj;
obj = {label:'XboxOne', name:'Xbox One', type:'full'};
obj['vendor'] = 'Microsoft';
obj['category'] = 'appliance';
obj['os'] = 'Xbox One';
DATASET[obj.label] = obj;
obj = {label:'DigitalTV', name:'InternetTVBrowser', type:'full'};
obj['vendor'] = '';
obj['category'] = 'appliance';
obj['os'] = 'DigitalTV';
DATASET[obj.label] = obj;
obj = {label:'SafariRSSReader', name:'Safari RSSReader', type:'full'};
obj['vendor'] = 'Apple';
obj['category'] = 'misc';
DATASET[obj.label] = obj;
obj = {label:'GoogleDesktop', name:'Google Desktop', type:'full'};
obj['vendor'] = 'Google';
obj['category'] = 'misc';
DATASET[obj.label] = obj;
obj = {label:'WindowsRSSReader', name:'Windows RSSReader', type:'full'};
obj['vendor'] = 'Microsoft';
obj['category'] = 'misc';
DATASET[obj.label] = obj;
obj = {label:'VariousRSSReader', name:'RSSReader', type:'full'};
obj['vendor'] = '';
obj['category'] = 'misc';
DATASET[obj.label] = obj;
obj = {label:'HTTPLibrary', name:'HTTP Library', type:'full'};
obj['vendor'] = '';
obj['category'] = 'misc';
DATASET[obj.label] = obj;
obj = {label:'GoogleBot', name:'Googlebot', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'GoogleBotMobile', name:'Googlebot Mobile', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'GoogleMediaPartners', name:'Google Mediapartners', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'GoogleFeedFetcher', name:'Google Feedfetcher', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'GoogleAppEngine', name:'Google AppEngine', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'GoogleWebPreview', name:'Google Web Preview', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'YahooSlurp', name:'Yahoo! Slurp', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'YahooJP', name:'Yahoo! Japan', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'YahooPipes', name:'Yahoo! Pipes', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'Baiduspider', name:'Baiduspider', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'msnbot', name:'msnbot', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'bingbot', name:'bingbot', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'BingPreview', name:'BingPreview', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'Yeti', name:'Naver Yeti', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'FeedBurner', name:'Google FeedBurner', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'facebook', name:'facebook', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'twitter', name:'twitter', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'trendictionbot', name:'trendiction', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'mixi', name:'mixi', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'IndyLibrary', name:'Indy Library', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'ApplePubSub', name:'Apple iCloud', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'Genieo', name:'Genieo Web Filter', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'topsyButterfly', name:'topsy Butterfly', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'rogerbot', name:'SeoMoz rogerbot', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'AhrefsBot', name:'ahref AhrefsBot', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'radian6', name:'salesforce radian6', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'Hatena', name:'Hatena', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'goo', name:'goo', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'livedoorFeedFetcher', name:'livedoor FeedFetcher', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
obj = {label:'VariousCrawler', name:'misc crawler', type:'full'};
obj['vendor'] = '';
obj['category'] = 'crawler';
DATASET[obj.label] = obj;
var get = exports.get = function(label) {
  return DATASET[label];
};
