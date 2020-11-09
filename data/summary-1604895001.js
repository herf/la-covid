$( document ).ready(function() {
    var data = {
				    "content": {            
				               								
								 "count": "322,207", 
								"death": "7,172" ,
								"dailycount": "2238",
								"dailydeath": "2" ,
								"date":"11/08" ,
								"info":"through 8:00pm 11/07/2020" ,
								
								"testingaverage":"15,927" , 
								"peopletested":"3,256,783" , 
								"positivity":"3.9%" , 
								"hospitalizations":"851"	

								
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



