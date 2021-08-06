$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,315,313" ,

								"death": "24,739" ,

								"dailycount": "3,672" ,

								"dailydeath": "19" ,
								"date":"08/05" ,
								"info":"through 6:00pm 08/04/2021" ,							
								

								"testingaverage":"52,122" ,

								"peopletested":"7,405,237" ,

								"positivity":"6.16%" ,
								"hospitalizations":"1,279"

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



