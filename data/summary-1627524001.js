$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,290,226" ,

								"death": "24,658" ,

								"dailycount": "2,454" ,

								"dailydeath": "15" ,
								"date":"07/28" ,
								"info":"through 6:00pm 07/27/2021" ,							
								

								"testingaverage":"46,669" ,

								"peopletested":"7,279,944" ,

								"positivity":"5.17%" ,
								"hospitalizations":"891"

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



