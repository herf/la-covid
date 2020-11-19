$( document ).ready(function() {
    var data = {
				    "content": {            
				               								
								"count": "348,336", 
								"death": "7,335" ,
								"dailycount": "3,944",
								"dailydeath": "36" ,
								"date":"11/18" ,
								"info":"through 8:00pm 11/17/2020" ,
								
								"testingaverage":"50,739" , 
								"peopletested":"3,443,875" , 
								"positivity":"5.5%" , 
								"hospitalizations":"1,188"	

								
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



