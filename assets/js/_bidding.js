$(function(){


});

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
			startDownload(dataObject.downloads[0]);

		},
		startLotDownload:function(){
			dataObject.downloadStarted = true;
			startDownload(dataObject.downloads[1]);
		},
		cancelDownload: function(e,context){
			context.download.active = false;
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





