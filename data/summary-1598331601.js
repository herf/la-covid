$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "232,893",
				            "death": "5,558" ,
				            "dailycount": "1,198",
				            "dailydeath": "13" ,
				            "date":"08/24" ,
				            "info":"through 8:00pm 08/23/2020" ,
				            
							"testingaverage":"15,674" ,
							"peopletested":"2,195,899" ,
							"positivity":"5.2%" ,
							"hospitalizations":"1,219" ,                    
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



