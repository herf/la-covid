$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,342,839" ,

								"death": "24,872" ,

								"dailycount": "3,810" ,

								"dailydeath": "19" ,
								"date":"08/13" ,
								"info":"through 6:00pm 08/12/2021" ,							
								

								"testingaverage":"78,950" ,

								"peopletested":"7,632,151" ,

								"positivity":"4.95%" ,
								"hospitalizations":"1,645"

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



