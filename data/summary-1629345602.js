$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,359,672" ,

								"death": "24,967" ,

								"dailycount": "4,046" ,

								"dailydeath": "34" ,
								"date":"08/18" ,
								"info":"through 6:00pm 08/17/2021" ,							
								

								"testingaverage":"103,166" ,

								"peopletested":"7,825,484" ,

								"positivity":"3.85%" ,
								"hospitalizations":"1,754"

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



