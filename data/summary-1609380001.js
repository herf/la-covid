$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								

								"count": "756,116", 

								"death": "10,056" ,
								"dailycount": "10,392", 
								"dailydeath": "274" ,
								"date":"12/30" ,
								"info":"through 8:00pm 12/29/2020" ,
								
								"testingaverage":"103,735" , 
								"peopletested":"4,671,729" ,
								"positivity":"17.0%" , 
								"hospitalizations":"7,415" 						
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



