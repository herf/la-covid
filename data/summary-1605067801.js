$( document ).ready(function() {
    var data = {
				    "content": {            
				               								
								"count": "325,876", 
								"death": "7,200" ,
								"dailycount": "2,318",
								"dailydeath": "25" ,
								"date":"11/10" ,
								"info":"through 8:00pm 11/09/2020" ,
								
								"testingaverage":"44,787" , 
								"peopletested":"3,282,221" , 
								"positivity":"4.4%" , 
								"hospitalizations":"888"	

								
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



