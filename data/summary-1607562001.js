$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
				               	"count": "475,271",
								"death": "8,075" ,
								"dailycount": "9,243", 
								"dailydeath": "75" ,
								"date":"12/09" ,
								"info":"through 8:00pm 12/08/2020" ,
								
								"testingaverage":"64,592" , 
								"peopletested":"3,984,504" , 
								"positivity":"11.80%" , 
								"hospitalizations":"3,299"	
								
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



