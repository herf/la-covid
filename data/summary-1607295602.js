$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
				               	"count": "449,851",
								"death": "7,909" ,
								"dailycount": "10,528", 
								"dailydeath": "23" ,
								"date":"12/06" ,
								"info":"through 8:00pm 12/05/2020" ,
								
								"testingaverage":"59,604" , 
								"peopletested":"3,900,021" , 
								"positivity":"9.30%" , 
								"hospitalizations":"2,855"	
								
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



