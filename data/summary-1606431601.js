$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
				               	"count": "383,275", 
								"death": "7,580" ,
								"dailycount": "5,087",
								"dailydeath": "37" ,
								"date":"11/26" ,
								"info":"through 8:00pm 11/25/2020" ,
								
								"testingaverage":"65,689" ,
								"peopletested":"3,654,454" ,  
								"positivity":"6.9%" , 
								"hospitalizations":"1,809"	

								
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



