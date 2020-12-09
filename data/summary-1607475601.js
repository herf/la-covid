$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
				               	"count": "466,321",
								"death": "8,000" ,
								"dailycount": "8,547", 
								"dailydeath": "64" ,
								"date":"12/08" ,
								"info":"through 8:00pm 12/07/2020" ,
								
								"testingaverage":"62,040" , 
								"peopletested":"3,954,974" , 
								"positivity":"11.30%" , 
								"hospitalizations":"3,113"	
								
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



