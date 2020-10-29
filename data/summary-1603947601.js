$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "303,369", 
								"death": "7,040" ,
								"dailycount": "1,351",
								"dailydeath": "20" ,
								"date":"10/28" ,
								"info":"through 8:00pm 10/27/2020" ,
								
								"testingaverage":"15,003" , 
								"peopletested":"3,061,115" , 
								"positivity":"3.5%" , 
								"hospitalizations":"755"	
								
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



