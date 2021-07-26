$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,285,771" ,

								"death": "24,631" ,

								"dailycount": "1,966" ,

								"dailydeath": "4" ,
								"date":"07/26" ,
								"info":"through 6:00pm 07/25/2021" ,							
								

								"testingaverage":"43,785" ,

								"peopletested":"7,261,769" ,

								"positivity":"4.78%" ,
								"hospitalizations":"745"

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



