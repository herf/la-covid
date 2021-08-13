$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,339,138" ,

								"death": "24,854" ,

								"dailycount": "3,865" ,

								"dailydeath": "23" ,
								"date":"08/12" ,
								"info":"through 6:00pm 08/11/2021" ,							
								

								"testingaverage":"74,329" ,

								"peopletested":"7,594,036" ,

								"positivity":"5.06%" ,
								"hospitalizations":"1,648"

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



