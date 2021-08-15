$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,347,023" ,

								"death": "24,892" ,

								"dailycount": "4,229" ,

								"dailydeath": "21" ,
								"date":"08/14" ,
								"info":"through 6:00pm 08/13/2021" ,							
								

								"testingaverage":"81,015" ,

								"peopletested":"7,668,174" ,

								"positivity":"4.84%" ,
								"hospitalizations":"1,627"

								}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
			
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



