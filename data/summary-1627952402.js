$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,305,704" ,

								"death": "24,690" ,

								"dailycount": "2,361" ,

								"dailydeath": "5" ,
								"date":"08/02" ,
								"info":"through 6:00pm 08/01/2021" ,							
								

								"testingaverage":"50,734" ,

								"peopletested":"7,350,063" ,

								"positivity":"5.61%" ,
								"hospitalizations":"1,096"

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



