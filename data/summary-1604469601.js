$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "311,745", 
								"death": "7,097" ,
								"dailycount": "1,224",
								"dailydeath": "23" ,
								"date":"11/03" ,
								"info":"through 8:00pm 11/02/2020" ,
								
								"testingaverage":"16,037" , 
								"peopletested":"3,163,904" , 
								"positivity":"3.2%" , 
								"hospitalizations":"798"	
								
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



