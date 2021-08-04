$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,307,970" ,

								"death": "24,704" ,

								"dailycount": "2,293" ,

								"dailydeath": "20" ,
								"date":"08/03" ,
								"info":"through 6:00pm 08/02/2021" ,							
								

								"testingaverage":"50,758" ,

								"peopletested":"7,358,401" ,

								"positivity":"5.83%" ,
								"hospitalizations":"1,138"

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



