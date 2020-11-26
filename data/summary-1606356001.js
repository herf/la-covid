$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
				               	"count": "378,323", 
								"death": "7,543" ,
								"dailycount": "4,311",
								"dailydeath": "49" ,
								"date":"11/25" ,
								"info":"through 8:00pm 11/24/2020" ,
								
								"testingaverage":"64,275" ,
								"peopletested":"3,624,942" ,  
								"positivity":"6.7%" , 
								"hospitalizations":"1,682"	

								
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



