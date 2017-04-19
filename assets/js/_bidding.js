$(function(){
	if($('#js-media-list').length > 0){
		medialist = new List('js-media-list',listOptions);
		medialist.sort(dataObject.sortedColumn,{order:dataObject.sortdirection});
	} 

	if($('.js-header-waypoint').length > 0){
		var waypoint = new Waypoint({
		  element: $('.js-header-waypoint'),
		  handler: function(direction) {
		    $('.js-sticky-header').toggleClass('s-fixed');
		  }
		});
	} 

	if($('.js-filter-readout').length > 0){
		var reference = $('.js-filter-readout');
		var popper = $('.js-filter-popup');
		var anotherPopper = new Popper(
		    reference,
		    popper,
		    {
		        placement: 'bottom-start',
		    }
		); 
	}

	if($('.js-export-popup-toggle').length > 0){
		var exportreference = $('.js-export-popup-toggle');
		var exportpopper = $('.js-export-popup');
		var exportPopper = new Popper(
		    exportreference,
		    exportpopper,
		    {
		        placement: 'bottom-end',
		    }
		); 
	}

	if($('.js-media-drag').length > 0){
		drake = dragula([$('.js-media-drag')], { revertOnSpill: true , direction: 'horizontal'});
		console.log(drake);
		drake.on('drag',function(e){
			console.log('drag');
		});
	}

	$('.js-pres-settings').on('change keyup',function(){
		dataObject.savePresChangeVisible = true;
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
	
	lots: lotlist,
	sortedColumn: 'js-lotnumber',
	sortdirection: 'asc',
	filterRangeStart: null,
	filterRangeEnd: null,
	mediaFilters: ['All Lots'],
	sendEmailVisible: false,

	activeTab: 'general',
	savePresChangeVisible: false,
	savedConfirmationVisible: false,
	slideDuration: 8,
	slideshowSettingVisibile:false,
	mktgSlideDuration: 8,
	mktgpres: [
				{"src": "assets/img/vramp1.jpg","disabled":false},
				{"src": "assets/img/vramp2.jpg","disabled":false},
				{"src": "assets/img/vramp3.jpg","disabled":false},
				{"src": "assets/img/vramp4.jpg","disabled":false}
			],
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

	downloads:[
		{
			title: "Downloading Photos",
			progress: 8,
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
};



const controller = {
	gotoPage: function(e){
		let target = $(e.currentTarget).data('targetpage');
		window.location.pathname = relativeURL(target);
	},

	gotoTab: function(e){
		let target = $(e.currentTarget).data('targetpage');
		dataObject.activeTab = target;
	},

	toggleGetOtherSales: function(e){
		dataObject.getOtherSalesVisible = !dataObject.getOtherSalesVisible;
	},
	toggleDataCenterSwitch: function(e){
		dataObject.dataCenterSwitchVisible = !dataObject.dataCenterSwitchVisible;	
	},
	toggleDeleteEventVisible: function(e){
		dataObject.deleteEventVisible = !dataObject.deleteEventVisible;
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
	toggleDownloadPhotosSettingsVisible: function(){
		dataObject.downloadPhotosSettingsVisible = !dataObject.downloadPhotosSettingsVisible;
	},

	goToEventList: function(){
		window.location = "index.html";
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
			dataObject.downloadStarted = true;
			startDownload(dataObject.downloads[1]);
		},
		cancelDownload: function(e,context){
			context.download.active = false;
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
			dataObject.mediaFilters = ['Lots with video','Lots misssing hero photos','Lots with less than 4 photos','Flagged Lots'];
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
			dataObject.savedConfirmationVisible = true;
			setTimeout(function(){
				dataObject.savedConfirmationVisible = false;
			},2000);
		},

};

const startDownload = function(target){
	target.active = true;
	target.progress = 0;
	
	var progressTimer = setInterval(function(){
		
		if(target.title === 'Downloading Lots') target.progress+= 10;
		else target.progress++;

		if(target.progress >= target.items){
			clearInterval(progressTimer);
			target.active = false;
			if(target.title === 'Downloading Lots') dataObject.auctionLots.haveData = true;
			if(target.title === 'Downloading Photos') dataObject.auctionPhotos.haveData = true;
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





