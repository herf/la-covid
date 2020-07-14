$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "136,129",
				            "death": "3,822" ,
				            "dailycount": "2,593",
				            "dailydeath": "13" ,
				            "date":"07/13" ,
				            "info":"through 8:00pm 07/12/2020" ,
				            
							"testingaverage":"15,864" ,
							"peopletested":"1,338,806" ,
							"positivity":"9%" ,
							"hospitalizations":"2,056" ,                    
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



