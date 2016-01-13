//------------------------------------------------------------------------------------------------
// getNewObsDefaults()
//
//------------------------------------------------------------------------------------------------
											   
function getNewObsDefaults(username, password)
{	
    var host =  "http://hyonteiset.luomus.fi/insects";
    
    //var _userName = $('#username').val();
    //var _passWord = $('#password').val();
    
	var queryString = host + "/json?op=getDefaults&username=" + username + "&password=" + password + "&callback=?";	
	console.log(queryString);
	
	$.getJSON( queryString, function(data) 
	{	
	/*	Ext.getCmp('startDay_new').setValue( data[0].startDay );
		Ext.getCmp('startMonth_new').setValue( data[0].startMonth );
		Ext.getCmp('endDay_new').setValue( data[0].endDay );
		Ext.getCmp('endMonth_new').setValue( data[0].endMonth );
		Ext.getCmp('year_new').setValue( data[0].year );
		Ext.getCmp('comboRegion_new').setValue( data[0].region );
		Ext.getCmp('county_new').setValue( data[0].county );
		Ext.getCmp('locality_new').setValue( data[0].locality );
		Ext.getCmp('coords_new').setValue( data[0].coordinates );
		Ext.getCmp('habitat_new').setValue( data[0].habitat );
		Ext.getCmp('method_new').setValue( data[0].method );
		Ext.getCmp('t_count_new').setValue( data[0].totalCount );
		Ext.getCmp('devStage_new').setValue( data[0].devStage );
		Ext.getCmp('observer_new').setValue( data[0].observer );
		Ext.getCmp('det_new').setValue( data[0].det );
		Ext.getCmp('detYear_new').setValue( data[0].detYear );
		Ext.getCmp('comboDetMethod_new').setValue( data[0].detMethod );
		if ( Ext.getCmp('comboDetMethod_new').getValue() == 'undefined' )
		{
		    Ext.getCmp('comboDetMethod_new').setValue( '' );
		}  */
		
		$('#year').val(data[0].year);
	 	$('#startMonth').val(data[0].startMonth);
	 	$('#startDay').val(data[0].startDay);
	 	$('#endDay').val(data[0].endDay);
	 	$('#endMonth').val(data[0].endMonth);
	 	$('#observer').val(data[0].observer);
	 	//$("#region option:selected").text();
	 	$("#region").val(data[0].region).change();
	 	$('#county').val(data[0].county);	 	
	 	$('#locality').val(data[0].locality);
	 		
	 	var koordinaatit = data[0].coordinates.split(":");
	 	var new_coordY = koordinaatit[0];
	 	var new_coordX = koordinaatit[1]; 	
	 	$('#yCoord').val(new_coordY);
	 	$('#xCoord').val(new_coordX);
	 	
	 	$('#tCount').val(data[0].totalCount);
	 	$('#devStage').val(data[0].devStage).change();
	 	$('#det').val(data[0].det);
	 	$('#detYear').val(data[0].detYear);
	 	$('#detMethod').val(data[0].detMethod).change();
	 	if ( data[0].detMethod == 'undefined' )
		{
		   $('#detMethod').val('').change();
		}
	 	$('#method').val(data[0].method);
	 	$('#habitat').val(data[0].habitat);
	 	

	});
}

//------------------------------------------------------------------------------------------------
// saveDefaults()
//------------------------------------------------------------------------------------------------
											   
function saveDefaults()
{
//	var values = saveObsForm.getForm().getValues();

	var queryString = host + "/json?op=saveDefaults"
	
	/*
	
	                + "&username=" + username + "&password=" + password
	                + "&startDay="    + values.startDay_new
					+ "&startMonth="  + values.startMonth_new
					+ "&endDay="      + values.endDay_new
					+ "&endMonth="    + values.endMonth_new
					+ "&year="        + values.year_new
					+ "&region="      + values.comboRegion_new
					+ "&county="      + values.county_new
					+ "&locality="    + values.locality_new
					+ "&coordinates=" + values.coords_new
					+ "&habitat="     + values.habitat_new
					+ "&method="      + values.method_new
					+ "&totalCount="  + values.t_count_new
					+ "&devStage="    + values.devStage_new
					+ "&observer="    + values.observer_new
					+ "&det="         + values.det_new
					+ "&detYear="     + values.detYear_new
					+ "&detMethod="   + values.comboDetMethod_new
					+ "&callback=?";
	
	// console.log( queryString );
	
	// --- Server returns { "success": "OK" } or { "error": "<message>" }
    //	
	$.getJSON( queryString, function(data) 
	{	
        if ( data[0].success != null )
        {
			Ext.MessageBox.alert( ui.save_defaults, 'Ok. ' + ui.defaults_saved + '.' );
		}
		else
		{		
		    Ext.MessageBox.alert( ui.save_defaults, data[0].error );
		}
	});
	*/
} 