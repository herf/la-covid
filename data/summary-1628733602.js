$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,335,332" ,

								"death": "24,833" ,

								"dailycount": "3,498" ,

								"dailydeath": "28" ,
								"date":"08/11" ,
								"info":"through 6:00pm 08/10/2021" ,							
								

								"testingaverage":"68,026" ,

								"peopletested":"7,558,056" ,

								"positivity":"5.50%" ,
								"hospitalizations":"1,573"

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



