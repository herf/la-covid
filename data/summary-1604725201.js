$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "317,656", 
								"death": "7,157" ,
								"dailycount": "2,108",
								"dailydeath": "23" ,
								"date":"11/06" ,
								"info":"through 8:00pm 11/05/2020" ,
								
								"testingaverage":"15,864" , 
								"peopletested":"3,216,941" , 
								"positivity":"3.8%" , 
								"hospitalizations":"821"	
								
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



