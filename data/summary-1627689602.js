$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,297,032" ,

								"death": "24,676" ,

								"dailycount": "3,606" ,

								"dailydeath": "5" ,
								"date":"07/30" ,
								"info":"through 6:00pm 07/29/2021" ,							
								

								"testingaverage":"48,325" ,

								"peopletested":"7,307,580" ,

								"positivity":"5.34%" ,
								"hospitalizations":"991"

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



