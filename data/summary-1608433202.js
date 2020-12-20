$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "610,372", 

								"death": "8,817" ,
								"dailycount": "13,756", 
								"dailydeath": "60" ,
								"date":"12/19" ,
								"info":"through 8:00pm 12/18/2020" ,
								
								"testingaverage":"91,800" ,
								"peopletested":"4,338,184" ,
								"positivity":"14.70%" , 
								"hospitalizations":"5,424" 								
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



