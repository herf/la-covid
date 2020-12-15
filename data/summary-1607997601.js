$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "532,730", 

								"death": "8,345" ,
								"dailycount": "7,344", 
								"dailydeath": "48" ,
								"date":"12/14" ,
								"info":"through 8:00pm 12/13/2020" ,
								
								"testingaverage":"91,473" ,
								"peopletested":"4,148,479" ,
								"positivity":"12.20%" , 
								"hospitalizations":"4,203" 
								
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



