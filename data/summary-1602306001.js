$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "279,909",
				            "death": "6,741" ,
				            "dailycount": "1,256",
				            "dailydeath": "13" ,
				            "date":"10/09" ,
				            "info":"through 8:00pm 10/08/2020" ,
				            
							"testingaverage":"11,606" ,
							"peopletested":"2,786,071" ,
							"positivity":"3.3%" ,
							"hospitalizations":"724" 							
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



