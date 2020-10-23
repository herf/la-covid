$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "294,065", 
								"death": "6,956" ,
								"dailycount": "3,600",
								"dailydeath": "18" ,
								"date":"10/22" ,
								"info":"through 8:00pm 10/21/2020" ,
								
								"testingaverage":"12,400" , 
								"peopletested":"2,936,763" , 
								"positivity":"3.7%" , 
								"hospitalizations":"777"	
								
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



