$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,300,313" ,

								"death": "24,682" ,

								"dailycount": "3,318" ,

								"dailydeath": "11" ,
								"date":"07/31" ,
								"info":"through 6:00pm 07/30/2021" ,							
								

								"testingaverage":"49,271" ,

								"peopletested":"7,322,927" ,

								"positivity":"5.39%" ,
								"hospitalizations":"1,008"

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



