$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "287,222", 
								"death": "6,855" ,
								"dailycount": "1,072",
								"dailydeath": "27" ,
								"date":"10/16" ,
								"info":"through 8:00pm 10/15/2020" ,
								
								"testingaverage":"13,628" , 
								"peopletested":"2,878,575" , 
								"positivity":"3.1%" , 
								"hospitalizations":"735"	
								
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



