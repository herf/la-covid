$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,376,551" ,

								"death": "25,032" ,

								"dailycount": "3,361" ,

								"dailydeath": "31" ,
								"date":"08/20" ,
								"info":"through 6:00pm 08/19/2021" ,							
								

								"testingaverage":"111,951" ,

								"peopletested":"7,870,510" ,

								"positivity":"3.63%" ,
								"hospitalizations":"1,786"

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



