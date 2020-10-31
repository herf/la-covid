$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "306,327", 
								"death": "7,056" ,
								"dailycount": "1,296",
								"dailydeath": "26" ,
								"date":"10/30" ,
								"info":"through 8:00pm 10/29/2020" ,
								
								"testingaverage":"14,915" , 
								"peopletested":"3,101,417" , 
								"positivity":"3.5%" , 
								"hospitalizations":"743"	
								
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



