$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "566,005", 

								"death": "8,568" ,
								"dailycount": "22,422", 
								"dailydeath": "138" ,
								"date":"12/16" ,
								"info":"through 8:00pm 12/15/2020" ,
								
								"testingaverage":"91,423" ,
								"peopletested":"4,226,030" ,
								"positivity":"13.2%" , 
								"hospitalizations":"4,656" 
								
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



