$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
				              						
								
								"count": "512,872",
								"death": "8,269", 
								"dailycount": "11,476", 
								"dailydeath": "70",
								"date":"12/12",
								"info":"through 8:00pm 12/11/2020",
								
								"testingaverage":"90,263",
								"peopletested":"4,091,880", 
								"positivity":"11.70%",
								"hospitalizations":"3,850"
								
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



