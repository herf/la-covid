$( document ).ready(function() {
    var data = {
				    "content": {            
				               								
								"count": "332,865", 
								"death": "7,246" ,
								"dailycount": "2,481",
								"dailydeath": "28" ,
								"date":"11/13" ,
								"info":"through 8:00pm 11/12/2020" ,
								
								"testingaverage":"47,617" , 
								"peopletested":"3,337,964" , 
								"positivity":"5%" , 
								"hospitalizations":"942"	

								
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



