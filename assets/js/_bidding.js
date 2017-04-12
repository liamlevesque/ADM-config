$(function(){
	medialist = new List('js-media-list',listOptions);
	medialist.sort(dataObject.sortedColumn,{order:dataObject.sortdirection});

	var waypoint = new Waypoint({
	  element: $('.js-header-waypoint'),
	  handler: function(direction) {
	    $('.js-sticky-header').toggleClass('s-fixed');
	  }
	})
});

var medialist;
const listOptions = {
	valueNames:["js-lotnumber",
				"js-lotequipid",
				"js-lotvideo",
				"js-lotphoto",
				"js-lotnotes",
				"js-lotflagged",
				"js-lotupdated"],
};

const dataObject = {
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
	activeTab: window.location.pathname,
	lots: lotlist,
	sortedColumn: 'js-lotnumber',
	sortdirection: 'asc',

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
		var target = $(e.currentTarget).data('targetpage');
		window.location = target;
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
		window.location = "/";
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
			if(typeof context.lot.expanded == "undefined") context.lot.expanded = true;
			else context.lot.expanded = !context.lot.expanded;

			if(context.lot.expanded) $(e.currentTarget).parent().addClass('s-expanded');
			else $(e.currentTarget).parent().removeClass('s-expanded');
		},
		sortColumn: function(e){
			let targetColumn = $(e.currentTarget).data('column');
			if(dataObject.sortedColumn == targetColumn)
				dataObject.sortdirection = (dataObject.sortdirection === 'asc')? 'desc': 'asc';
			else{
				dataObject.sortedColumn = targetColumn;
				dataObject.sortdirection = 'asc';
			}
			medialist.sort(dataObject.sortedColumn,{order:dataObject.sortdirection});
		}
};

const startDownload = function(target){
	target.active = true;
	target.progress = 0;
	var progressTimer = setInterval(function(){
		target.progress++;
		if(target.progress >= target.items){
			clearInterval(progressTimer);
			target.active = false;
		}
	},500);
}

const focusFirstInput = function(container){
	container.find('input').first().focus();
}


rivets.bind($('.js--data-context'),{
	dataObject: dataObject,
	controller: controller
});





