$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,262,578" ,

								"death": "24,566" ,

								"dailycount": "1,537" ,

								"dailydeath": "3" ,
								"date":"07/15" ,
								"info":"through 6:00pm 07/14/2021" ,							
								

								"testingaverage":"32,000" ,

								"peopletested":"7,142,456" ,

								"positivity":"2.68%" ,
								"hospitalizations":"406"

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



