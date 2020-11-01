$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "307,618", 
								"death": "7,071" ,
								"dailycount": "1,326",
								"dailydeath": "15" ,
								"date":"10/31" ,
								"info":"through 8:00pm 10/30/2020" ,
								
								"testingaverage":"15,488" , 
								"peopletested":"3,124,038" , 
								"positivity":"3.5%" , 
								"hospitalizations":"783"	
								
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



