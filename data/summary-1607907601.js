$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "525,486", 

								"death": "8,298" ,
								"dailycount": "12,731", 
								"dailydeath": "29" ,
								"date":"12/13" ,
								"info":"through 8:00pm 12/12/2020" ,
								
								"testingaverage":"90,722" ,
								"peopletested":"4,129,568" ,
								"positivity":"11.80%" , 
								"hospitalizations":"4,009" 
								
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



