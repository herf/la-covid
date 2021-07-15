$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,261,068" ,

								"death": "24,563" ,

								"dailycount": "1,315" ,

								"dailydeath": "9" ,
								"date":"07/14" ,
								"info":"through 6:00pm 07/13/2021" ,							
								

								"testingaverage":"31,661" ,

								"peopletested":"7,133,711" ,

								"positivity":"2.37%" ,
								"hospitalizations":"398"

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



