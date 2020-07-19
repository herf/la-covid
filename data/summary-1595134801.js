$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "153,041",
				            "death": "4,084" ,
				            "dailycount": "2,770",
				            "dailydeath": "37" ,
				            "date":"07/18" ,
				            "info":"through 8:00pm 07/17/2020" ,
				            
							"testingaverage":"20,623" ,
							"peopletested":"1,491,353" ,
							"positivity":"8.7%" ,
							"hospitalizations":"2,188" ,                    
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



