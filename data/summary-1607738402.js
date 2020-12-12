$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
				               	"count": "501,635",
								"death": "8,199" ,
								"dailycount": "13,815", 
								"dailydeath": "50" ,
								"date":"12/11" ,
								"info":"through 8:00pm 12/10/2020" ,
								
								"testingaverage":"89,094" , 
								"peopletested":"4,060,680" , 
								"positivity":"11.60%" , 
								"hospitalizations":"3,624"	
								
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



