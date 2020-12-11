$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
				               	"count": "487,917",
								"death": "8,149" ,
								"dailycount": "12,819", 
								"dailydeath": "74" ,
								"date":"12/10" ,
								"info":"through 8:00pm 12/09/2020" ,
								
								"testingaverage":"78,809" , 
								"peopletested":"4,022,072" , 
								"positivity":"11.70%" , 
								"hospitalizations":"3,433"	
								
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



