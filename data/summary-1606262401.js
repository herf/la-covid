$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
				               	"count": "374,134", 
								"death": "7,497" ,
								"dailycount": "3,692",
								"dailydeath": "51" ,
								"date":"11/24" ,
								"info":"through 8:00pm 11/23/2020" ,
								
								"testingaverage":"61,131" ,
								"peopletested":"3,601,615" ,  
								"positivity":"6.6%" , 
								"hospitalizations":"1,575"	

								
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



