$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,264,450" ,

								"death": "24,568" ,

								"dailycount": "1,902" ,

								"dailydeath": "6" ,
								"date":"07/16" ,
								"info":"through 6:00pm 07/15/2021" ,							
								

								"testingaverage":"34,668" ,

								"peopletested":"7,155,357" ,

								"positivity":"2.8%" ,
								"hospitalizations":"452"

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



