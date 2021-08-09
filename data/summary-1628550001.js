$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,329,262" ,

								"death": "24,783" ,

								"dailycount": "2,919" ,

								"dailydeath": "6" ,
								"date":"08/09" ,
								"info":"through 6:00pm 08/08/2021" ,							
								

								"testingaverage":"58,505" ,

								"peopletested":"7,517,864" ,

								"positivity":"6.05%" ,
								"hospitalizations":"1,437"

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



