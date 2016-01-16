var host =  "http://hyonteiset.luomus.fi/insects";

//------------------------------------------------------------------------------------------------
// getNewObsDefaults()
//
//------------------------------------------------------------------------------------------------
											   
function getNewObsDefaults(username, password)
{	
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
	 		
	 		console.log(data[0].coordinates);
	 	var koordinaatit = data[0].coordinates.split(":");
	 	var new_coordY = koordinaatit[0];
	 	var new_coordX = koordinaatit[1]; 	
	 	$('#ykoord').val(new_coordY);
	 	$('#xkoord').val(new_coordX);
	 	
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
											   
function saveDefaults(username, password)
{
//	var values = saveObsForm.getForm().getValues();
    var coordinates = $('#ykoord').val() + ':' + $('#xkoord').val();
    var observer = $('#observer').val();
    
	var queryString = host + "/json?op=saveDefaults"
	                + "&username=" + username + "&password=" + password
	                + "&startDay="    + $('#startDay').val()
					+ "&startMonth="  + $('#startMonth').val()
					+ "&endDay="      + $('#endDay').val()
					+ "&endMonth="    + $('#endMonth').val()
					+ "&year="        + $('#year').val()
					+ "&region="      + $('#region').val()
					+ "&county="      + $('#county').val()
					+ "&locality="    + $('#locality').val()
					+ "&coordinates=" + coordinates
					+ "&habitat="     + $('#habitat').val()
					+ "&method="      + $('#method').val()
					+ "&totalCount="  + $('#tCount').val()
					+ "&devStage="    + $('#devStage').val()
					+ "&observer="    + $('#observer').val()
					+ "&det="         + $('#det').val()
					+ "&detYear="     + $('#detYear').val()
					+ "&detMethod="   + $('#method').val()
					+ "&callback=?";
	
	 console.log( queryString );
	
	var year = $('#year').val();
	 	var startMonth = $('#startMonth').val();
	 	var startDay = $('#startDay').val();
	 	var endDay = $('#endDay').val();
	 	var endMonth = $('#endMonth').val();
	 	var observer = $('#observer').val();
	 	var region = $("#region option:selected").text();
	 	var county = $('#county').val();
	 	var locality = $('#locality').val();
	 	var coordinates = $('#ykoord').val() + ':' + $('#xkoord').val();
	 	var totalCount = $('#tCount').val();
	 	var maleCount =  $('#mCount').val();
	 	var femaleCount =  $('#fCount').val();
	 	var devStage = $('#devStage').val();
	 	var det = $('#det').val();
	 	var detYear = $('#detYear').val();
	 	var detMethod = $('#detMethod').val();
	 	var method = $('#method').val();
	 	var habitat = $('#habitat').val();
	// 	var username = $('#username').val();
	// 	var password = $('#password').val();
	
	  observer = decodeURIComponent(observer);
	
	$.ajax({   
    url: 'http://hyonteiset.luomus.fi/insects/json?op=saveDefaults&callback=?',  
    data: { username,
    password,
            year,
            startMonth,
            startDay,
            endDay,
            endMonth,
            region,
            county,
            locality,            
            coordinates,             
            totalCount,
            observer,
            devStage,
            det,
            detMethod,
            method,
            habitat },    
    //type: 'POST',
   contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: 'json' })
    .done(function( data, textStatus, xhr ) 
    {     
        console.log( data );
        //x.innerHTML = "Obs id: " + data.obsID;
    })
    .fail(function( xhr ) 
    {  
        console.log( xhr.status, xhr.statusText, xhr.responseText );
        x.innerHTML = "Tallennus ep‰onnistui: " + xhr.responseText;
    });  
	//contentType (default: 'application/x-www-form-urlencoded; charset=UTF-8')
	
	// --- Server returns { "success": "OK" } or { "error": "<message>" }
    //	
	/*$.getJSON( queryString, function(data) 
	{	
        if ( data[0].success != null )
        {
			//Ext.MessageBox.alert( ui.save_defaults, 'Ok. ' + ui.defaults_saved + '.' );
			console.log( "defaults saved" );
			x.innerHTML = "Asetusten tallennus onnistui";
		}
		else
		{		
		    //Ext.MessageBox.alert( ui.save_defaults, data[0].error );
		    x.innerHTML = "Asetusten tallennus ep√§onnistui: " + data[0].error;
		}
	}); */
	
} 