export let olCtaWidget = {
    appTheme: '3a49337c5724d18079602a4ca5a91626', // This is a reference to the appTheme MD5 Hash in UX Server
    urls: {
        apiBaseUrl: 'http://localhost:8001',
        uxBaseUrl: 'http://localhost:3000',
        widgetBaseUrl: 'http://localhost:8001/static/widget',
        logException: `http://localhost:8001/api/v1/partners/widgets/log_exception/`,
    },
    pageType: null,
    pageTypes: {
        INVENTORY: 'inventory_vehicle_page',
        RESEARCH: 'research_vehicle_page',
        SEARCH: 'search_results_page',
        INVALID: 'invalid_page',
    },
    pendingClickIndex: -1,
    tooltip: {
        component: null,
        text: null,
        openTarget: null,
        eventListeners: {
            scroll: [],
            resize: [],
            click: []
        }
    },
    vehicles: [],
    mobileBreakpoint: 992,
    inventoryMsrpColor: '#4C4C4C',
    inventorySubtitleColor: '#666666',
    // The below values can get overwritten by domain files via PartnerWidgetConfiguration
    docFee: 0,
    aprPercent: 5.99,
    termMonths: 84,
    ctaText: 'Get Prequalified',
    filterGroups: [],
};

