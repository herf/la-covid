$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "580,325", 

								"death": "8,664" ,
								"dailycount": "14,418", 
								"dailydeath": "102" ,
								"date":"12/17" ,
								"info":"through 8:00pm 12/16/2020" ,
								
								"testingaverage":"91,155" ,
								"peopletested":"4,265,732" ,
								"positivity":"13.7%" , 
								"hospitalizations":"4,864" 
								
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



