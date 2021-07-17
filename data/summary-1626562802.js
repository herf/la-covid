$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,266,227" ,

								"death": "24,579" ,

								"dailycount": "1,827" ,

								"dailydeath": "11" ,
								"date":"07/17" ,
								"info":"through 6:00pm 07/16/2021" ,							
								

								"testingaverage":"34,978" ,

								"peopletested":"7,165,321" ,

								"positivity":"3.01%" ,
								"hospitalizations":"462"

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



