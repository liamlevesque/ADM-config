$(function(){
	if($('#js-media-list').length > 0){
		medialist = new List('js-media-list',listOptions);
		medialist.sort(dataObject.sortedColumn,{order:dataObject.sortdirection});
	} 

	if($('#js-sale-list').length > 0){
		saleList = new List('js-sale-list',saleListOptions);
	} 

	if($('.js-header-waypoint').length > 0){
		var waypoint = new Waypoint({
		  element: $('.js-header-waypoint'),
		  handler: function(direction) {
		    $('.js-sticky-header').toggleClass('s-fixed');
		  }
		});
	} 

	$('.js-filter-readout').tooltipster({
		content: $('.js-filter-popup'),
		animation: 'fade',
		animationDuration: 0,
		arrow: false,
		theme: 'ritchie-tooltips',
		trigger: 'custom',
		interactive: true,
		delay: 0,
		triggerOpen: {
	        click: true
	    },
	    triggerClose: {
	        click: true,
	    },
		side: 'bottom',
	});

	$('.js-export-popup-toggle').tooltipster({
		content: $('.js-export-popup'),
		animation: 'fade',
		animationDuration: 0,
		arrow: false,
		theme: 'ritchie-tooltips',
		trigger: 'custom',
		interactive: true,
		delay: 0,
		triggerOpen: {
	        click: true
	    },
	    triggerClose: {
	        click: true,
	    },
		side: 'bottom',
	});

	if($('.swiper-container').length > 0){
		initializeSlideshow();
	};
	

	$('.js-pres-settings').on('change keyup',function(){
		dataObject.savePresChangeVisible = true;
		dataObject.resetChangesVisible = true;
	});

	$('.js-advanced-settings').on('change keyup',function(){
		dataObject.savePresChangeVisible = true;
		dataObject.resetChangesVisible = true;
	});

	
}); 

var drake;
var medialist;

const listOptions = {
	valueNames:["js-lotnumber",
				"js-lotequipid",
				"js-lotvideo",
				"js-lotphoto",
				"js-lotnotes",
				"js-lotflagged",
				"js-lotupdated",
				{data:['lot']},
			],
};

var saleList;
const saleListOptions = {
	valueNames:["jsSaleName",
				"jsSaleNumber",
			],
};

const relativeURL = function(target){
	let location = window.location.pathname.split('/');
	location.pop();
	return location.join('/')+target;
};

const cleanPathname = function(){
	let location = window.location.pathname.split('/');
	location = '/' + location.pop();
	return location;
};

const dataObject = {
	activePage: cleanPathname(),
	auctionName: 'Regina, Sk',
	auctionLots: {
		haveData: false,
		downloaded: 2500,
	},
	auctionPhotos:{
		haveData: false,
		downloaded: 1582,
		missingHero: 7,
		withVideo: 21,
	},
	auctionOtherRings: 3,

	getOtherSalesVisible: false,
	dataCenterSwitchVisible: false,
	deleteEventVisible: false,
	addDisplayVisible: false,
	displayList: [],
	tempDisplay: {},
	saveDisplayAllowed: false,
	historyExpanded: false,
	CCYSettingsVisible: false,
	confirmDeleteDisplayVisible: false,
	downloadPhotosSettingsVisible: false,

	altccys:[
		{
			ccy: 'AUD',
			symbol: '$',
			rate: 1.01,
			format: '$999,999,999.99'
		},
		{
			ccy: 'JPY',
			symbol: '$',
			rate: 107.2,
			format: '¥999,999,999.99'
		}
	],
	ccys: [
		{
			ccy: 'CAD',
			symbol: '$',
			rate: 0.79,
			format: '$999,999,999.99'
		},
		{
			ccy: 'USD',
			symbol: '$',
			rate: 1.213,
			format: '$999,999,999.99'
		},
		{
			ccy: 'AUD',
			symbol: '$',
			rate: 1.01,
			format: '$999,999,999.99'
		},
		{
			ccy: 'JPY',
			symbol: '$',
			rate: 107.2,
			format: '¥999,999,999.99'
		},
	],

	dataCenter2: false,
	confirmSwitchDataCenter: false,
	salesList: [
		{
			name: "Orlando, FL",
			number: "2017345-1",
			ring: 1,
			totalRings: 3,
			hasTal: true,
		},
		{
			name: "Regina, SK",
			number: "2017101-1",
			ring: 1,
			totalRings: 3,
			hasTal: true,
		},
		{
			name: "Regina, SK",
			number: "2017101-2",
			ring: 2,
			totalRings: 3,
			hasTal: true,
		},
		{
			name: "Edmonton, AB",
			number: "2017345-1",
			ring: 1,
			totalRings: 3,
			hasTal: true,
		},

	],

	lots: lotlist,
	sortedColumn: 'js-lotnumber',
	sortdirection: 'asc',
	filterRangeStart: null,
	filterRangeEnd: null,
	mediaFilters: ['All Lots'],
	sendEmailVisible: false,
	mediaImportVisible: false,
	mediaProcessingVisible: false,
	mediaConflictVisible: false,
	mediaDoneVisible: false,


	activeTab: 'general',
	savePresChangeVisible: false,
	savedConfirmationVisible: false,
	resetChangesVisible: false,
	slideDuration: 8,
	slideAutoPlay: true,
	cycleChoiceGroup: true,
	lotpres: [
				{"src": "assets/img/lot1.jpg","disabled":false},
				{"src": "assets/img/lot2.jpg","disabled":false},
				{"src": "assets/img/lot3.jpg","disabled":false},
				{"src": "assets/img/lot4.jpg","disabled":false}
			],
	slideshowSettingVisibile:false,
	mktgSlideDuration: 8,
	mktgpres: [
				{"src": "assets/img/mktg1.jpg","disabled":false},
				{"src": "assets/img/mktg2.jpg","disabled":false},
				{"src": "assets/img/mktg3.jpg","disabled":false},
				{"src": "assets/img/mktg4.jpg","disabled":false}
			],
	mktgprespre: [],
	deleteSlideVisible: false,
	presentation: {
		ring: 'Ring 1',
		lots: 'Lots 1 - 451, 8001 - 8012',
		welcomeMsg: '',
		startLabel: '',
		startTime: '',
		bidEnded: '',
		tomorrowLabel: '',
		tomorrowTime: '',
		tomorrowLots: '',
		pausedExplanation: 'We are currently experiencing technical difficulties and will resume shortly.',
		pausedMsg: '',
		ring2start: 'Starts ~ 09:00',
		ring3start: 'Starts ~ 11:00',
		talstart: 'Lots start closing Tuesday'
	},

	manageMessageGroupVisible: false,
	confirmDeleteShortcutsVisible: false,
	currentShortcuts: 0,
	keyboardShortcuts: [
	],
	clonedshortcuts: {},
	tempshortcuts: {
		name: '',
		shortcuts: [
			{
				key: 'f1',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f2',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f3',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f4',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f6',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f7',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f8',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f9',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f10',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			{
				key: 'f12',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lacus, dapibus eu urna nec, facilisis convallis odio',
			},
			
		]
	},

	haveTriedToDownload: false,
	noInventoryErrorVisible: false,
	downloads:[
		{
			title: "Downloading Photos",
			progress: 8,
			checkprogress: 0,
			items: 20,
			error: false,
			active: false,
		},
		{
			title: "Downloading Lots",
			progress: 5,
			items: 200,
			error: false,
			active: false,
		}
	],
	downloadStarted: false,
	hasDownloaded: false,
	photoDownloadInput: '',
	photoDownloadLotSelected: false,
	photoDownloadLotInput: '',
	confirmMediaSentVisible: false,
	cancelDownloadVisible: false,
	cancelDownloadContext: null,

	reportClerkActivity:false,
	reportRecipient: '',
	confirmReportSentVisible: false,
	techReportRecipient: '',
	systemReportTypeSelected: false,

	advancedUserName: '',
	acceptedGraveResponsibility: false,
};

var mySwiper = null;

const initializeSlideshow = function(){
	if(mySwiper != null) mySwiper.destroy(false,true);
	mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		autoplay: (dataObject.slideAutoPlay)? dataObject.slideDuration * 1000 : 0,
		speed: 300,
		effect: "coverflow",
	})
};

function customKeyboardShortcuts(current,name){
	let newObj = jQuery.extend(true,{},current);
	newObj.name = name;
	return newObj;
}

dataObject.keyboardShortcuts.push(customKeyboardShortcuts(dataObject.tempshortcuts,'Default'));

const controller = {
	gotoPage: function(e){
		let target = $(e.currentTarget).data('targetpage');
		window.location.pathname = relativeURL(target);
	},

	gotoTab: function(e){
		let target = $(e.currentTarget).data('targetpage');
		dataObject.activeTab = target;

		if($('.swiper-container').length > 0){
			initializeSlideshow();
		};

		if($('.js-media-drag').length > 0){
			drake = dragula([$('.js-media-drag')], { revertOnSpill: true , direction: 'vertical'}).on('drag',function(e){
				console.log('drag');
			});
			console.log(drake);
		}
	},

	refreshData: function(e){
		$(e.currentTarget).addClass('s-loading');
		setTimeout(function(){
			$(e.currentTarget).removeClass('s-loading').addClass('s-success');

			setTimeout(function(){
				$(e.currentTarget).removeClass('s-success');
			},3000);

		},5000);
	},

	checkDownloadLotImages: function(e){
		$('.js-downloadLotImages').attr('checked','true');
		dataObject.photoDownloadLotSelected = true;
	},

	toggleConfirmSwitchDataCenter: function(e){
		dataObject.confirmSwitchDataCenter = !dataObject.confirmSwitchDataCenter;

		if(!dataObject.confirmSwitchDataCenter) dataObject.dataCenterSwitchVisible = false;
	},

	toggleGetOtherSales: function(e){
		dataObject.getOtherSalesVisible = !dataObject.getOtherSalesVisible;
	},
	filterSales: function(e){
		let query = $(e.currentTarget).val();
		saleList.filter(function(item) {
			if (item.values().jsSaleName.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
			   return true;
			} else {
			   return false;
			}
		});
	},
	toggleDataCenterSwitch: function(e){
		dataObject.dataCenterSwitchVisible = !dataObject.dataCenterSwitchVisible;	
	},
	toggleDeleteEventVisible: function(e){
		dataObject.deleteEventVisible = !dataObject.deleteEventVisible;
		e.stopPropagation();
	},
	toggleAddDisplayVisible: function(e){
		dataObject.addDisplayVisible = !dataObject.addDisplayVisible;
		dataObject.tempDisplay = null;
		dataObject.tempDisplay = {};
	},
	toggleHistoryExpanded: function(){
		dataObject.historyExpanded = !dataObject.historyExpanded;
	},
	toggleCCYSettingsVisible: function(){
		dataObject.CCYSettingsVisible = !dataObject.CCYSettingsVisible;
	},

	setCCY: function(e){
		let target = $(e.currentTarget).data('index');
		let index = parseInt($(e.currentTarget).val());
		
		dataObject.altccys[target] = (dataObject.ccys[index]);
	},
	clearCCY: function(e){
		let target = $(e.currentTarget).data('index');
		dataObject.altccys[target] = null;
	},

	toggleDownloadPhotosSettingsVisible: function(){
		if(controller.checkIfNoInventoryError()) return;
		dataObject.downloadPhotosSettingsVisible = !dataObject.downloadPhotosSettingsVisible;
	},
	toggleNoInventoryErrorVisible: function(){
		dataObject.noInventoryErrorVisible = !dataObject.noInventoryErrorVisible;
	},
	checkIfNoInventoryError: function(){
		if(!dataObject.haveTriedToDownload){
			dataObject.noInventoryErrorVisible = true;
			dataObject.haveTriedToDownload = true;
			return true;
		}
		else return false;
	},
	goToEventList: function(){
		window.location = "index.html";
	},

	//MEDIA IMPORT

		toggleMediaImport: function(){
			dataObject.mediaImportVisible = !dataObject.mediaImportVisible;
		},

		startMediaProcessing: function(){
			dataObject.mediaImportVisible = false;
			dataObject.mediaProcessingVisible = true;
		},

		stopMediaProcessing: function(){
			dataObject.mediaProcessingVisible = false;
		},

		toggleMediaConflict: function(){
			dataObject.mediaProcessingVisible = false;
			dataObject.mediaConflictVisible = !dataObject.mediaConflictVisible;
		},

		toggleMediaDoneVisible: function(){
			dataObject.mediaConflictVisible = false;
			dataObject.mediaDoneVisible = !dataObject.mediaDoneVisible;
		},

	//DISPLAY SETUP CONTROLS
		setDisplayType: function(e){
			dataObject.tempDisplay.type = $(e.currentTarget).data('type');
		},
		updateDisplayName: function(e){
			if($(e.currentTarget).val().length > 0) dataObject.saveDisplayAllowed = true;
			else dataObject.saveDisplayAllowed = false;
		},
		createDisplay: function(e){
			dataObject.displayList.push(dataObject.tempDisplay);
			controller.toggleAddDisplayVisible();
		},
		editDisplay: function(e,context){
			dataObject.addDisplayVisible = true;
			dataObject.tempDisplay.type = context.display.type;
			dataObject.tempDisplay.name = context.display.name;
			dataObject.tempDisplay.editing = true;
		},
		toggleDisplay: function(e,context){
			context.display.status = (context.display.status === "active") ? "inactive" : "active";
		},
		toggleConfirmDeleteDisplay: function(e,context){
			dataObject.confirmDeleteDisplayVisible = !dataObject.confirmDeleteDisplayVisible;
		},
		confirmDeleteDisplay: function(e,context){
			
			dataObject.confirmDeleteDisplayVisible = false;
			dataObject.addDisplayVisible = false;
			dataObject.displayList.pop();
		},

	//DOWNLOAD MONITOR
		startPhotoDownload:function(){
			dataObject.downloadStarted = true;
			dataObject.downloadPhotosSettingsVisible = false;
			startDownload(dataObject.downloads[0]);

		},
		startLotDownload:function(){
			if(controller.checkIfNoInventoryError()) return;
			dataObject.downloadStarted = true;
			startDownload(dataObject.downloads[1]);
		},
		confirmCancelDownload: function(e,context){
			dataObject.cancelDownloadVisible = !dataObject.cancelDownloadVisible;
			dataObject.cancelDownloadContext = context;
		},
		cancelDownload: function(e){
			dataObject.cancelDownloadVisible = false;
			dataObject.cancelDownloadContext.download.active = false;
		},
		throwDownloadError: function(e,context){
			context.download.error = true;
			clearInterval(progressTimer);
			dataObject.hasDownloaded = true;
			if(context.download.title === 'Downloading Lots') dataObject.auctionLots.haveData = true;
			else dataObject.auctionPhotos.haveData = true;
		},
		errorRetry: function(e,context){
			context.download.error = false;
			clearInterval(progressTimer);
			if(context.download.title === 'Downloading Lots') controller.startLotDownload();
			else controller.startPhotoDownload();
		},
		errorDismiss: function(e,context){
			context.download.active = false;
			context.download.error = false;
		},

	//MANAGE LOT MEDIA
		toggleExpandLot: function(e,context){
			if(typeof context.lot.expanded === "undefined") context.lot.expanded = true;
			else context.lot.expanded = !context.lot.expanded;

			if(context.lot.expanded) $(e.currentTarget).parent().addClass('s-expanded');
			else $(e.currentTarget).parent().removeClass('s-expanded');
		},
		sortColumn: function(e){
			let targetColumn = $(e.currentTarget).data('column');
			if(dataObject.sortedColumn === targetColumn)
				dataObject.sortdirection = (dataObject.sortdirection === 'asc')? 'desc': 'asc';
			else{
				dataObject.sortedColumn = targetColumn;
				dataObject.sortdirection = 'asc';
			}
			medialist.sort(dataObject.sortedColumn,{order:dataObject.sortdirection});
		},
		filterLotList:function(e){
			let rangeStart = (dataObject.filterRangeStart)? parseInt(dataObject.filterRangeStart) : 0;
			let rangeEnd = (dataObject.filterRangeEnd)? parseInt(dataObject.filterRangeEnd) : 9999;

			medialist.filter(function(item) {
				if (item.values().lot >= rangeStart && item.values().lot <= rangeEnd ) {
				   return true;
				} else {
				   return false;
				}
			});
		},
		clearAllFilters: function(e){
			medialist.filter();
			dataObject.filterRangeStart = null;
			dataObject.filterRangeEnd = null;
		},
		toggleFilterVisibility: function(e){
			$('.js-filter-popup').toggleClass('s-visible');
		},
		updateFilters: function(e){
			if(dataObject.mediaFilters.indexOf("All Lots") >= 0)dataObject.mediaFilters.splice(dataObject.mediaFilters.indexOf("All Lots"),1);

			let targetFilter = $(e.currentTarget).data('filter');
			if(dataObject.mediaFilters.indexOf(targetFilter) < 0) dataObject.mediaFilters.push(targetFilter);
			else dataObject.mediaFilters.splice(dataObject.mediaFilters.indexOf(targetFilter),1);

			if(dataObject.mediaFilters.length === 0) dataObject.mediaFilters = ['All Lots'];
			//console.log(dataObject.mediaFilters);
		},
		selectAllFilters: function(e){
			dataObject.mediaFilters = ['Lots with video','Lots misssing hero photos','Lots with less than 4 photos','Flagged lots','Lots with disabled media'];
		},
		clearFilters: function(e){
			dataObject.mediaFilters = ['All Lots'];
		},
		disableImage: function(e,context){
			context.photo.disabled = !context.photo.disabled;
		},
		toggleFlagged: function(e,context){
			context.lot.flagged = !context.lot.flagged;
			if(context.lot.flagged) context.lot.editingNote = true;
		},
		saveNote: function(e,context){
			context.lot.editingNote = false;
		},
		toggleExportVisibility:function(e){
			$('.js-export-popup').toggleClass('s-visible');
		},
		toggleEmailVisibility: function(e){
			dataObject.sendEmailVisible = !dataObject.sendEmailVisible;
			$('.js-export-popup').removeClass('s-visible');
		},

	//PRESENTATION SETUP
		toggleSlideshowSettingVisibility: function(e){
			dataObject.slideshowSettingVisibile = !dataObject.slideshowSettingVisibile;
		},
		toggleDeleteSlideVisible: function(e){
			dataObject.deleteSlideVisible = !dataObject.deleteSlideVisible;
		},
		showSavedConfirmation: function(e){
			dataObject.savePresChangeVisible = false;
			dataObject.resetChangesVisible = true;
			dataObject.savedConfirmationVisible = true;
			setTimeout(function(){
				dataObject.savedConfirmationVisible = false;
			},toastDuration);
		},
		hideSavedConfirmation: function(e){
			dataObject.savePresChangeVisible = false;
		},
		clearSpecialMsg: function(e){
			dataObject.presentation.specialMsg = '';
		},
		slideshowUpdate: function(e){
			initializeSlideshow();
		},
		toggleManageMessageGroupVisible: function(e){
			dataObject.manageMessageGroupVisible = !dataObject.manageMessageGroupVisible;
			if(dataObject.manageMessageGroupVisible)
				dataObject.clonedshortcuts = customKeyboardShortcuts(dataObject.tempshortcuts,'');
		},
		clearKeyboardMsg: function(e,context){
			context.key.message = '';
		},
		createCustomMessageGroup: function(){
			dataObject.keyboardShortcuts.push(dataObject.clonedshortcuts);
			dataObject.clonedshortcuts = {};
			dataObject.currentShortcuts = dataObject.keyboardShortcuts.length - 1;
			dataObject.manageMessageGroupVisible = false;
		},
		deleteCustomMessageGroup: function(){
			dataObject.confirmDeleteShortcutsVisible = false;
			let tempindex = dataObject.currentShortcuts;
			dataObject.currentShortcuts = 0;
			dataObject.keyboardShortcuts.splice(tempindex,1);
		},
		setCurrentShortcuts: function(e){
			dataObject.currentShortcuts = parseInt($(e.currentTarget).data('target'));
		},
		toggleConfirmDeleteShortcuts: function(e){
			dataObject.confirmDeleteShortcutsVisible = !dataObject.confirmDeleteShortcutsVisible;
		},

	//REPORTS
		confirmReportSent: function(e){
			dataObject.confirmReportSentVisible = true;
			setTimeout(function(){
				dataObject.confirmReportSentVisible = false;
				dataObject.reportRecipient = '';
				dataObject.reportClerkActivity = false;
			},toastDuration);
		},
		showSendMediaSuccess: function(e){
			dataObject.confirmMediaSentVisible = true;
			dataObject.sendEmailVisible = false;
			setTimeout(function(){
				dataObject.confirmMediaSentVisible = false;
			},toastDuration);
		},
		setSystemReportTypeSelected: function(e){
			dataObject.systemReportTypeSelected = $('input[name=reportType]:checked').val();
		},

	//ADVANCED
		acceptGraveResponsibility: function(e){
			dataObject.acceptedGraveResponsibility = true;
		},
};

const toastDuration = 2000;

var progressTimer;

const startDownload = function(target){
	target.active = true;
	target.progress = 0;
	
	progressTimer = setInterval(function(){
		
		if(target.title === 'Downloading Lots') target.progress+= 10;
		else{
			if(target.checkprogress >= target.items) target.progress++;
			else target.checkprogress+=5;
		}

		if(target.progress >= target.items){
			clearInterval(progressTimer);
			target.active = false;
			if(target.title === 'Downloading Lots') dataObject.auctionLots.haveData = true;
			if(target.title === 'Downloading Photos') dataObject.auctionPhotos.haveData = true;
			dataObject.hasDownloaded = true;
		}
	},500);
};

const focusFirstInput = function(container){
	container.find('input').first().focus();
};


rivets.bind($('.js--data-context'),{
	dataObject: dataObject,
	controller: controller
});


